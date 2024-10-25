#react

## 為何需要 state 

今天我們先使用一個普通的 Javascript 變數 `number`，當點擊畫面上的按鈕時，觸發事件時會更新它的值：

```js
const number = 0;

const addNumber = ()=>{
    number = number+1
}
<p> current {number} </p>
<button onClick={addNumber}></button>
```
如果我們希望看到 `number` 數值改變顯示在畫面，會需要重新渲染畫面，但你會發現這個值的改變無法被保存，因為每次重新渲染頁面時都會重新為 `number` 賦值。 react 的 `state` 除了可以解決**數值改變無法在頁面渲染間被保存的問題**外，也**將 `state` 改變與頁面渲染進行掛鉤**，讓使用者更方便進行開發。



## 使用限制

1. 只能在 function component 使用 ，class component 不能
2. 只能在 function component 內的 top-level 呼叫，不可在 `block scoped` 呼叫 
3. 更新 state 需遵守 **immutable** 原則

> 所謂的 block scoped 包含： `if(){}` , `for(){}`, `setTimeout(()=>{},1000)`

```js
import {useState} from 'react'

function LimitShow(){
	if(true) { useState(1) } // x
	for(xx) { useState(1) } // x
	function(){useState()} // x
}
```

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

我們知道在 Javascript 內變數分為 **call by value** 與 **call by reference** 兩種類型，為了遵守 immutable 原則，在 react 更新這兩種類型資料的方法並不相同：

###  value type

```js
const [state,setState] = useState(1)

//更新方式
setState(val)
```

### reference type 

直接更新 **reference type** 的資料內容（如下圖），在 react 無法被偵測到 `state` 有產生改變，畫面更新會失效。

```js
const [test,setTest] = useState({name:'1'})
// x: 直接更新物件 key 值
setState(()=>test.name="2")
```
要保持 state 值維持 `immutable`的情形去更新，有以下方法：
#### 離散語法

```jsx
const [state,setState] = useState({x:1,y:2})

setState({...state,要更新部分的值})
```
#### 存入全新物件

```jsx
const [state,setState] = useState({x:1,y:2})
setState({x:2,y:3})
```

## batch update

為何 **batch update** 要特別拉出一個章節，是因為它算是重要的性能節省機制。
**前面有提過 state 改變與元件的 re-render 息息相關**，假設今天事件觸發時，執行了多次的 `set` 方法 ，那照理來說應該會多次 re-render ，但實際上只會發生一次，這背後就是 batch update 機制在運作。

```jsx
const [number,setNumber] = useState(0)
<button onClick={() => {  
	setCount(1);  
    setCount(2);  
    setCount(3);
}}>+3</button>

```

關於 batch update 的運作，我自己會用 [Event loop](/docs/Javascript/[js]eventloop) 的概念來理解這件事，當 `set` 方法觸發後，實際上並不會馬上執行，而是全部會放到類似 callbackque 的等待列裡面，等全部內容都執行完開始一次執行。

![](https://i.imgur.com/U2Jp5VG.png)
> 圖片來源：https://ithelp.ithome.com.tw/articles/10300091


