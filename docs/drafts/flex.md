#css 


### 產生 flex 排版

```html
<body>
	<div class='container'>
		<div></div>
		<div></div>
		<div></div>
	</div>
</body>
<style>
	.container{
		display:flex;
	}
</style>
```

在 `.container` 以 flex 進行排版會產生 *flex-container*，在內部的所有元素都會變成  `flex-items`。



### 設定元素排列方向

排列分為： `main-axis`、 `cross-axis` 

`main-axis` 是設定容器內 **所有子元素** 排列方向，預設排列方向為 `row`，可透過 `flex-direction`變更主副排列方向 —— **代表主副軸是可變更的**

### 使用`display:flex`的特性
1. 內部元素無法使用 `float` 做排版
2. 內部元素文字無法使用 `vertical-align`




## 計算伸縮比例吧

與空間分配有關，有所謂的**positive free space**/ **negative free space**
1. **positive free space**
若 flex items 在主軸(main axis)方向上的尺寸總和小於 flex container 的尺寸，此時會出現 flex container 的空間沒有被填滿，這些剩餘空間就稱為 positive free space。
2. **negative free space**
反之，則為**negative free space**。

### `flex` 屬性
**syntax**:
1. flex-grow:得到多少比例的positive space
2. flex-shrink:negative space
3. flex-basis:決定`flex-item`在尚未`grow`,`shrink`的原始尺寸

**預設值**：0 1 auto



1. **下在容器**
`justify-content` 分配==預設書寫模式的主軸方向==的空間
==`align-content`== 分配==預設書寫模式的副軸方向==的空間
`algin-items`分配子元素在==副軸==的排列方式
2. **下在子元素**
`align-self` 個別調整子元素在

### 排列順序
`order` 依數值由小而大排列

