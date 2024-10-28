# useState

## 為何需要 state 

今天我們先使用一個普通的 Javascript 變數 `number` 作為狀態值，當點擊畫面上的按鈕時，觸發事件時同樣會更新它的值：

```js
//狀態變數
export default  addButton = () =>{
	const number = 0;
	const addNumber = ()=>{number = number+1 }
	return (
		<>
		  <p> current {number} </p>
		  <button onClick={addNumber}></button>
		</>
	)
}
```
你會發現這個狀態值的變化無法被保存，因為每次重新渲染頁面時都會重新為 `number` 賦值。 react 提供的 `useState` 產生的狀態值，除了可以解決**數值改變無法在頁面渲染間被保存的問題**外，也**將 `state` 改變與頁面渲染進行掛鉤**。



## 使用限制

1. **只能在 function component 使用 ，class component 不能**
2. **只能在 function component 內的 top-level 呼叫，不可在 `block scoped` 呼叫**

而所謂的 block scoped 舉例來說就包括：

```js
import {useState} from 'react'

export default LimitShow = ()=>{
	useState() //可
	if(true) { useState(1) } // 不可
	for(xx) { useState(1) } // 不可

	return <></>
}
```
3. **更新 state 需遵守 **immutable** 原則**

在 Javascript 中資料主要分為兩種類型， *Primitive types* 及 *Reference types* ，像是 `Number`,`String`,`Boolean` 等類型的資料，就是所謂的 *Primitive types* 的類型，而像是 `Array` , `Object` 這類型的資料則為 *Reference types* 。

**如何區分兩者？**

當你使用 `const` 進行宣告時，*Primitive types* 的資料無法再重新賦值，這就符合所謂的 *immutable*（不可改變）
```js
const x = 2;
x = 3; //error x is constant variable

const y = x; //ok!
```
反之，你仍可對 *Reference types* 的資料進行調整，或是拷貝，這就是所謂的 *mutable*（可改變）

```js
const objX = {name:"andy"};
objX.name = "danny" // ok!
```
為何 react 會嚴格限制 state 需遵守 *immutable* 原則？ 作者理解 **react 是透過偵測狀態(state)記憶體位置改變，來決定是否要重新渲染**，當你直接對 *Reference types* 的資料進行調整時，記憶體位置並沒有改變，會發生資料已經改變，但是畫面沒有更新的情形。




## 回傳值

`useState`  會回傳一個陣列 ，index: 0 是初始的 `state` ，index: 1 則是更新 `state` 的函式。

```js
function LimitShow(){
	const state = useState(1);
	state = [1,handlerState()]
}
```

所以一般使用上會搭配解構賦值將 **儲存狀態變數** 跟 **處理狀態變數函式** 解構，方便各別使用。

```js
const [state,setState] = useState(1);
```

## 如何更新 state ？

###  Primitive types

```js
const [state,setState] = useState(1)

//更新方式
setState(val)
```

### Reference types

直接更新 **reference type** 的資料內容（如下圖），在 react 無法被偵測到 `state` 有產生改變，畫面更新會失效。

```js
const [test,setTest] = useState({name:'1'})
// x: 直接更新物件 key 值
setState(()=>test.name="2")
```
要保持 state 值維持 `immutable`的情形去更新，有以下方法：


#### 物件型別更新

**離散語法**

```jsx
const [state,setState] = useState({x:1,y:2})

setState({...state,要更新部分的值})
```
**存入全新物件**

```jsx
const [state,setState] = useState({x:1,y:2})
setState({x:2,y:3})
```

上面都是單層物件資料，如果今天是巢狀(nested)的狀態（如下），可以這樣思考去拆解

```jsx
export default function nestObj(){
  const [obj,setObj] =useState({
	name:"andy",
	interest:{ball:'basketball'}
  })
}

```

1. 把 `interest` 先單獨拉出來
```jsx
const newInterest = {...obj.interest}
newInterest.ball = 'baseball'
```

2. 再將更新的值存入本來的狀態  `interest` 物件
```jsx
setObj({...obj,interest:newInterest})
```
所以其實就是單層的作法做兩次。


## 狀態更新機制


假設今天你實作了一個點擊功能，點擊按鈕後彈跳視窗會顯示更新後的狀態值（如下圖），但是當你實際點擊後，發現顯示在彈窗內的仍然是舊的數值，這邊就要帶到另一個重要觀念：**State 更新是非同步的**。

```jsx
export default AlertSection = ()=>{
	const [message,setMessage] = useState(0)
	const alertMessage = ()=>{
		setMessage(2)
		alert(`message is update! ${message}`)
	}
	return (
		<>
			<button onClick={alertMessage}>alert</button>
			<p>{message}</p>
		</>
	)
}
```

再精確地來說：**State 會等此次渲染的所有行為結束後才進行更新**，意思就是說在當次觸發的行為內，你能讀取到的 State 都是舊的，
```jsx
export default AlertSection = ()=>{
	const [message,setMessage] = useState(0)
	const alertMessage = ()=>{
		setMessage(2)
		alert(`message is update! ${message}`)
	}
	return (
		<>
			<button onClick={alertMessage}>alert</button>
			<p>{message}</p>
		</>
	)
}
```
重看一次這個例子，之所以 `alert()` 出來的 `message` 仍然是 0 ，就是因為此次渲染的程序還沒結束， 所以 state 尚未更新，如果你希望能即時讀取到 state 的更新狀態， React 有提供 *updater function* 幫助你實現這件事。

### updater function 

所謂的 updater function 就是你將函式傳入 `set` 方法內，透過它去更新狀態值，

```js
const [state,setState] = useState()

setState((n)=>n+1) 
```
上述程式碼 `(n)=>n+1` 就是所謂的 updater function，上面有提過 state 數值更新，一般會在當次渲染程式都完成才更新，如果改用這個方法則不同，第一次呼叫 `set` 方法的回傳值會作為 parameter 被傳入第二次呼叫的，依序傳遞直到沒有更多 `set` 方法。

```js
const [state,setState] = useState(0)

// directly update state
setState(state+1)  // 0 + 1
setState(state+1)  // 0 + 1
setState(state+1)  // 0 + 1

//updater function 
setState((n)=>n+1) // 0 + 1 = 1
setState((n)=>n+1) // 1 + 1 = 2
setState((n)=>n+1) // 2 + 1 = 3
```

### batch update 機制

為何 **batch update** 要特別拉出一個章節，是因為自己理解它算是重要的性能節省機制。
**前面有提過 state 改變與元件的 re-render 息息相關**，假設今天事件觸發時，執行了多次的 `set` 方法 ，那照理來說應該會多次 re-render ，但實際上只會發生一次，這背後就是 batch update 機制在運作。

```jsx
const [number,setNumber] = useState(0)
<button onClick={() => {  
	setCount(1);  
    setCount(2);  
    setCount(3);
}}>+3</button>

```

關於 batch update 的運作原理，我自己會用 [Event loop](/docs/Javascript/[js]eventloop) 中的非同步概念來理解，當 `set` 方法觸發後，實際上並不會馬上執行，而是全部會放到類似 queueing 的等待列裡面，等全部內容都執行完開始一次執行。

![](https://i.imgur.com/U2Jp5VG.png)
> 圖片來源：https://ithelp.ithome.com.tw/articles/10300091

這樣的好處是避免無意義的渲染，造成多餘的效能損耗，我覺得官方文件的比喻很傳神：

> 假設每次狀態改變會觸發渲染這事件，想像為服務生為客人點餐，要是沒有 batch update 機制，你可以理解為客人每調整一次菜色，服務生就要跑一次廚房，這樣不是很沒效率？有了 batch update 機制，就像是客人確定這次要點的內容後，最終再一次去通知廚房上什麼菜。


