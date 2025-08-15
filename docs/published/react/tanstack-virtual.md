---
title: TanStack Virtual - 虛擬化滾動優化
description: 使用 TanStack Virtual 套件優化大量列表渲染性能，透過虛擬化滾動技術提升網頁首次內容繪製(FCP)速度，並支援響應式多欄佈局設計
---

### 應用情境

假設網站的首頁需要渲染 10000 筆的列表，而每筆列表內容包含 5 個 DOM 架構，若我們沒有做處理，在初次載入就必須要等待 50000 個 DOM 產生完成，這樣勢必大大延長初次載入速度 (FCP)。

### 套件優點

在 TanStack virtual 官網很明確地列出了以下優勢：

- 套件內建 tree shaking（會自動掃除沒用到的內容，避免專案肥大）
- 極小打包體積
- 支援 Typescript
- 可讓開發者客製化樣式

### 應用於專案吧

首先需要建立虛擬化實例，包含以下步驟：

- 透過 `useRef` 監聽滾動容器父層
- 透過 `count` 告知實例共有多少個內容要以虛擬化顯示
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

建立好虛擬化實例後，在撰寫虛擬化內容過程中，我自己產生了一個疑惑：

>  **為什麼虛擬化渲染的內容不能直接包在定高的容器內？** 還需要多包覆一個元素？

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

經過爬文研究以及與 AI 討論，**會需要內層元素是為了讓瀏覽器能給正確長度的滾動條**，因為定高容器高度代表的是 **「使用者可視域」** 的尺寸，內層元素則是根據所有列表的總高（如下圖），為了能正確滾動並顯示所有虛擬化內容，內層元素是必要的架構。

<img src="/react/tanstack-virtual/virtual_scroll_render.gif" style={{height: "50vh",width:"auto"}} />

> 圖片繪製 by ChatGPT

接著使用 `getVirtualItems` 來動態產生的虛擬列表，這邊你會發現每個列表都需要設定添加絕對定位的樣式

```jsx
<div key={virtualItem.key} 
    ref={virtualizer.measureElement} 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: `translateY(${virtualRow.start}px)`}}
>
    <YourComponent/>
</div>
```


是因為它要利用「**絕對定位脫離排版流**」的特性，更明確辨識在「哪些是可視域內的元素」，並利用`translateY(virtualRow.start)`，直接把元素放到整體列表中它真實應該出現的 y 座標，並透過最外層容器的相對定位當作參考座標系，判斷它是否還在可視域內。


實作完成！**但上述的實作只能實現 「單欄」虛擬化列表**，所以呈現結果如下：

![](/react/tanstack-virtual/before.png)



但是實際上，列表通常不會以單行列呈現，以我個人專案的網站為例，在桌機尺寸下就是以 Grid 方式排版，每行有四個內容。

![](/react/tanstack-virtual/project.png)


還記得 tanstack 具有「**可客製化樣式**」的特性嗎？所以我就稍微根據樣式需求進行調整

- 動態地根據不同裝置尺寸調整虛擬化實例內容邏輯
- 恢復以 grid 方式排列虛擬化內容


```jsx

 const virtualColumns = useMemo(() => {
    if (isMobile) return 1 // 手機：1欄
    if (isTablet) return 2 // 平板：2欄
    if (isDesktop) return 4 // 桌面：4欄
    return 4 // 預設：4欄
  }, [isMobile, isTablet, isDesktop])

 const virtualColumns = 4
  const virtualizer = useVirtualizer({
    getScrollElement: () => allExhibitionParent.current,
    count: Math.ceil(filterExhibition.length / virtualColumns),
    estimateSize: () => 280,
  })



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



### 檢測優化成效

雖然在現實開發中，不一定都有時間做評估，但是既然是我個人的專案，那就可以跑個理想流程：

> 有明確數字佐證的優化比較能讓人信服，所以我會以下面向去綜合評估優化成效，決定是否要採用這個優化：

  - 📦 Bundle 影響
  - 🚀 渲染性能指標

#### Bundle 影響


![](/react/tanstack-virtual/bundle.png)

實際運行打包指令比較套件安裝前後的打包體積

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


