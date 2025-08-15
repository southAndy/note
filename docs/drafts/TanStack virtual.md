#react 

### 應用情境

假設網站的首頁需要渲染 10000 筆的列表，而每筆列表內容包含 5 個 DOM 架構，若我們沒有做處理，在初次載入就必須要等待 50000 個 DOM 產生完成，這樣勢必大大延長初次載入速度 (FCP)。

### 簡介套件優勢

在 TanStack virtual 官網很明確地列出了以下優勢：

- 套件內建 tree shaking（會自動掃除沒用到的內容，避免專案肥大）
- 極小打包體積
- 支援 Typescript
- 可讓開發者客製化樣式

### 實際使用記錄

首先需要建立虛擬化實例，包含以下步驟：

- 透過 `useRef` 監聽滾動容器父層
- 透過 `count` 告知實例共有多少個內容要顯示
- 透過 `estimateSize` 告知容器每個內容個別的高度

```js
import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'

const MyComponent = ()=>{
	const parentRef = useRef()

	//建立虛擬滾動實例
	const virtualizer = useVirtualizer({
		getScrollElement:()=> parentRef.current,
		count:items.length,
		estimateSize:()=> 250,
	})
	
	return (
	
		<div ref={parentRef}>
			//... scrolling items
		</div>
	)
}
```

建立好虛擬化實例後，開始撰寫虛擬化內容，這時候我自己產生了一個疑惑 **為什麼虛擬化渲染的內容不能直接包在可視域容器內？** 還需要多包覆在一個元素內？

```jsx
//可視區域容器
<div ref={parent} style={height:600px}>
	/*虛擬化的內容*/
	<div style={height:virtualizer.getTotalSize(),width:'100%',position:relative}>
		{virtualizer.getVirtualItems().map((virtualItem)=>(
			<div key={virtualItem.key}
				ref={virtualizer.measureElement}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					transform: `translateY(${virtualRow.start}px)`,
					}}
			>
				<YourComponent/>
			</div>
		)
		)}
	</div>
</div>
```

經過爬文研究以及與 AI 討論，自己的理解是內層的容器元素是透過 `getTotalSize` 取得列表總長作為容器高度，會需要這個元素是為了讓瀏覽器能給正確長度的滾動條，避免滾動條「不足」或「過長」的情形發生。

接著使用 `getVirtualItems` 來動態產生的虛擬列表，這邊你會發現每個列表都需要設定添加絕對定位

```jsx
<div key={virtualItem.key}
				ref={virtualizer.measureElement}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					transform: `translateY(${virtualRow.start}px)`,
					}}
			>
				<YourComponent/>
</div>
```


是因為它利用「絕對定位脫離排版流」的特性，更明確辨識在「哪些是可視域內的元素」，利用`translateY(virtualRow.start)`，直接把元素放到整體列表中它真實應該出現的 y 座標，並透過最外層容器的相對定位當作參考座標系，判斷它是否還在可視域內。

<div style="height=100px">
	<img src="virtual_scroll_render.gif" style="height:400px;width:100%;object-fit:contain">
</div>


----

### 案例應用

實際上，列表通常不會以單行列呈現，以我個人專案的網站為例，在桌機尺寸下就是以 Grid 方式排版，每行有四個內容。

![[Pasted image 20250808181405.png]]


幸好 tanstack 具有「客製化樣式」的特性，讓使用者可以根據自己專案去調整排版



----
### 檢測優化成效

優化通常有明確數字才能讓人信服，所以我會分別以以下面向去綜合評估優化成效，決定是否要採用這個優化：

  - 📦 Bundle 影響
  - 🚀 渲染性能指標
  - ⚡ 滾動體驗

#### Bundle 影響



![[Pasted image 20250811160010.png]]

我實際運行打包指令比較套件安裝前後的打包體積

  - 安裝前：總 JS 大小: 1,377.22 kB (壓縮前) / 415.77 kB (gzip)
  - 安裝後：總 JS 大小: 1,391.28 kB (壓縮前) / 420.24 kB (gzip)


小結來說，加入虛擬化庫讓打包體積大約有 **1.07%** 的增長

#### 渲染性能指標


**監測區域**：只監測所有展覽區域（虛擬化區域）

**測試方向**：

- 虛擬化前後首頁 FCP 時間差異
- 渲染完成後，滾動時性能

**測試方式**：
- FPS 監控: 使用 requestAnimationFrame 計算滾動時的幀率
- 渲染時間: 測量虛擬化前後的 DOM 更新耗時
- 重繪/重排次數: 透過 Performance API 追蹤


### 結論

相較於打包體積小幅上升，在渲染性能方面明顯的優化，因此最終會將這個功能實作到專案上。

