#css

用來規範每個元素的尺寸（寬高）計算方式

1. **子元素是否繼承**：否
2. **預設值**：`content-box`
3. **適用元素**：所有


### 語法

```css
box-sizing: option;
```

`content-box` : 只會計算元素本身的寬、高（不包括邊框 border、內邊距 padding、外邊距 margin）
border-box: 除了 margin 以外的都會一起計算。


來看看實際例子，今天有一個下拉選單
```html
	<div class="dropdown">
		<div class="dropdown--content"></div>
	</div>
```
![[Pasted image 20231103135709.png]]
假設現有樣式設定如下
```scss
.outer {
	width:100px;
	border:1px solid red;
	padding:10px;
}

.inner{
	width:100%;
	border:1px solid blue;
	padding:10px;
	box-sizing:border-box;
}
```
你會發現 inner 寬度設定 100% 實際顯示卻比較小，那是因為 border-box 設定的關係，在這個設定下
> .inner 的寬度 = width(內文本身) + 10px(padding) + 1px(border) = 100px

所以實際上 `.inner` 寬度是縮小的。