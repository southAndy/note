#vue3 #virtual-dom

### 我的理解

是以 Javascript 虛擬化 DOM 結構的技術

```js
const vnode = {
	props:{
		id:'app',
		class:'',
	},
	type:'div', //元素類別
	children:[] //子元素
}
```

### 好處

這樣做的好處是減少瀏覽器不必要的重新渲染，因為瀏覽器的渲染很消耗效能。




 ### 延伸閱讀 
 
 - [[virtual dom 渲染流程]]

