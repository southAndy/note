---
title: React 元件渲染生命週期
description: React 元件的完整渲染機制，包含 Mount、Update、Unmount 三個生命週期的詳細流程，trigger phase、render phase、commit phase 的運作原理
---

# React - 畫面渲染機制


React 的頁面區域都是由許多不同元件所構成，因此了解元件的渲染也是非常重要的，在 React 元件渲染主要有三個週期，分別是 *mount* , *update*, *unmount* 。


每個週期會執行的架構渲染，都會完整經歷以下步驟：

1. trigger phase：執行 *set function* 告知 React 畫面要重新渲染
2. render phase：React 開始產生此次畫面的 virtual DOM 架構，還可細分：
	1. 首次觸發：不會有比較 virtual DOM 架構流程
	2. 更新觸發：會有比較流程
3. commit phase：將差異部分架構提交給瀏覽器，開始正式渲染真實 DOM

```jsx
const Counter = ({counter})=>{
	const [counter,setCounter] = useState(0);

	const add = ()=>{
		setCounter((n)=>n+1)
	}
	return (
		<div>
			{counter}
			<button onClick={add}>add</button>
		</div>
	)
}
```

### Mount

#### render phase
執行 Counter 元件的 *component function* ，執行後會建立元件的 *Lexical context*，而如果有 `state`, `props` 等資訊的需求，React 會在背後產生 *fiber node* 去儲存資訊，最終就是產生並回傳 React element 架構。

```jsx
Counter() //開始渲染這個元件

const Counter = ({counter})=>{
	// 產生變數、函式
	const [counter,setCounter] = useState(0);

	useEffect(()=>{
		console.log('render')
		return ()=>{}
	},[])

	// 產生函式
	const add = ()=>{
		setCounter((n)=>n+1)
	}
	// 回傳 React elements
	return (
		<div>
			{counter}
			<button onClick={add}>add</button>
		</div>
	)
}
```

如果沒有更多元件內容要進行渲染，就會將該 React element 架構提交。

#### commit phase
瀏覽器會依照這個架構去渲染真實的 DOM 架構

#### 觸發副作用處理
完成真實 DOM 架構渲染後觸發 *effect function* 執行元件所需的副作用。

### Update
在 React 這個流程又被稱為 *Reconciliation*，當元件內的 set function 被觸發，且比對元件新舊狀態發現確實有變化後會進行。

#### render phase
已知React 採取 *一律重繪* 的渲染策略，所以會先根據新的 state 產生新的 virtual DOM 架構去跟舊版的進行比較，比較的方式就是 **採用 Diff 演算法進行新舊架構的比較**。


比較會從根元素開始比對，如果 root element 的元素已不同，就會跳過後續比較流程，直接將全新的 virtual DOM 提交給瀏覽器使用。

假設根部元素從 `<div>` 改變為 `<section>`
```jsx
// 舊版架構
const Page = ({})=>{
	return (
		
		<div>
			<ChildComponent/>
		</div>
	)
}

// 新版架構
const Page = ({})=>{
	return (
		
		<section>
			<ChildComponent/>
		</section>
	)
}
```

#### commit phase
瀏覽器將提交的架構渲染為真實 DOM 架構

#### 清除舊版副作用
在觸發 effect function 前，若是有 clean function 存在，**在每次 update 週期都會先執行 clean function 清除前一次元件所遺留的副作用。**

#### 觸發副作用
重新呼叫 effect function 。


### Unmount
#### render phase 
做類似 update 週期時會進行的 virtual DOM 比較後，發現新的架構下元件已不存在，接著提交差異。

#### 清除舊版副作用
在執行實際的 DOM 架構更新前，會先清除舊版的副作用

#### commit phase 
根據差異進行實際的 DOM 架構渲染
#### 移除 fiber node
移除這個元件所需的 `state` , `props` 等資訊的儲存。


---
## 參考資料

4. [Reconciliation](https://zh-hant.legacy.reactjs.org/docs/reconciliation.html)
5. [## 從jQuery到VirtualDOM來淺談什麼是state—useState完整範例與介紹](https://ithelp.ithome.com.tw/articles/10300256)
6. [# React 渲染機制 — — Virtual DOM 與 Diffing 演算法](https://medium.com/swf-lab/react-%E6%B8%B2%E6%9F%93%E6%A9%9F%E5%88%B6-virtual-dom-%E8%88%87-diffing-%E6%BC%94%E7%AE%97%E6%B3%95-fcf515ccbc59)
7. [# What is Diffing Algorithm ?](https://www.geeksforgeeks.org/what-is-diffing-algorithm/)

