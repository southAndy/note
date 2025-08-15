### 避免將靜態樣式定義於主元件內

若是將靜態樣式元件定義於元件內，當元件每次觸發重新渲染時， **樣式即便沒有改變也會跟著被重新計算**

```js
const Modal = ({isOpen})=>{
	//定義於元件內
	const CloseButton = styled(div)``

	return (
		<>
			<CloseButton>close</CloseButton>
		</>
	)
}
```

比較安全的方法是將 **靜態樣式元件定義於元件外**

```js
//定義於元件外
const CloseButton = styled(div)``

const Modal = ({isOpen})=>{
	return (
		<>
			<CloseButton>close</CloseButton>
		</>
	)
}
```

### 需考量動態樣式更新的頻率

支援 props 動態調整樣式若不當設計，也可能會產生不好的影響，當今天動態樣式值變動會很頻繁時，會對頁面渲染造成負荷。

假設今天產生一個按鈕元件

```jsx
const Button = styled.div`
	background-color:${props.color?'red':'black'}
`
```

初次渲染完成時，當 `props.color` 為 `false` 時

```css
.css-xyz123 {
  background-color: blue;
  padding: 10px;
}
```

當變成 `true` 時，元件狀態改變觸發重新渲染，此時元素上的樣式也會一同重新計算，並取得重新隨機產生的 class 名稱

```css
.css-abc456 {
  background-color: gray;
  padding: 10px;
}
```

因此，如果用於 **頻繁更動的架構**時，容易對頁面的效能造成負擔。