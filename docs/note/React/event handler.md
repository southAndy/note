#react 

React 將事件處理封裝為 **合成事件** (Synthetic Event)，因此事件語法與原生 Javascript 非常相似

### 語法架構

```js
<element eventName= {handler}></element>
```

### handler 不需攜帶參數時

handler 有以下寫法，可以根據情境複雜度決定使用方式。

1. 傳入定義好的函式
2. 匿名函式

```js
function test(){alert('hi')}

//傳入定義好的函式
<button onClick={test}></button>

//直接寫匿名函式
<button onClick={()=>alert('hi')}></button>
```

### handler 需要攜帶參數的情境

觸發事件時希望可以攜帶參數，可以用**回呼函式**或是使用函式方法  **`.bind()`** 的方法來攜帶參數


例如當使用者點擊了不同列表元素時，要傳入列表的 id 值時：

```jsx
const ListPage = ()=>{
	return (
		<div>
			{list.map((data)=>{
				// callback
				<div onClick={()=>func(data.id)}>{data.id}</div>
				// bind
				<div onClick={func(data.id).bind(this.1)}
			})}
		</div>
	)
}
```



## 阻止預設行為

在某些情境下，我們希望預設行為不要發生，例如表單架構內點擊 `<button>` 預設會發出 `POST` 造成頁面重新渲染，在原生 Javascript 可以透過`event.preventDefault()`  去阻止，又或者是透過 `event.stopPropagation`  阻止事件冒泡、捕捉等。

react 也有提供 `event` 參數讓你可以達到類似的效果:


```js
//handler
const stopDefault = (event)=>{
	// 阻止預設行為
	event.preventDefault()
}

const FormComponent = ()=>{
	<>
		<form>
			<input/>
			<input/>
			<input/>
			<input/>
			<input/>
			<button onClick={stopDefault}>submit</button>
		</form>
	</>
}
```
