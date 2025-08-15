---
title: React Hooks 完整指南
description: React Hooks 的詳細介紹，包含 useState、useEffect、useMemo、useCallback 的使用方法、觸發時機、適用情境以及最佳實踐建議
---

# React - hooks


## useState

請參考 [useState](./useState)

## useEffect

`useEffect` 用於在元件中負責處理副作用 side effect 

> 因為它可以設定觸發時機，**常常會被用來當作是元件的生命週期函式使用**，*React 思維進化*一書，作者提供了另一個概念，下面會說明

### 什麼是副作用 
英文是 side effect，通常是指與渲染無直接關聯的操作，像是後端請求（呼叫 API ）、操作資料庫，**副作用不一定是負面的**，我可能會更傾向理解為「次要的」功能，但是常常具有 **不可預測**、 **難測試** 等特性。

例如，以後端請求來說，可能就會受到網路狀況、伺服器狀況等外部因素影響，因此無法預期資料何時會回來，又或者是哪個請求會先回來。

### 語法
`useEffect` 可傳入兩個參數，第一個是 effect function，撰寫元件所需的副作用，第二個是觸發依賴（依賴數量不限）

```jsx
useEffect(effect,[])
```

1. `effect function`: 除了負責處理元件所需副作用外，也可以在裡面撰寫 *clean function* 清除不同渲染間的副作用，避免造成不必要的副作用堆積進而引發類似 memory leak 
2. `dependencies`: 會受到這個副作用影響的狀態，剛開始學習時會把 `useEffect` 的不同觸發時機視為元件不同生命週期，但是其實要用，它有以下幾種寫法：

```jsx
useEffect(effect)
useEffect(effect,[])
useEffect(effect,[dependencies])
```

### 觸發時機
先說結論，`useEffect` 初次觸發會在元件完成渲染後，React 會特別設計這個 hooks 的用意是 **確保元件渲染階段不受到任何副作用影響**，為什麼呢？讓我們試著反向思考， **如果觸發時機在渲染階段會怎樣？**


### 副作用與依賴

> **加入依賴是一種效能優化的做法，而不是設定時機點的作法**

**1.多個狀態影響功能輸出值**：
當這個 `useEffect` 處理的功能，受到多個狀態影響時，例如：

今天撰寫一個總費用計算的功能，當價格或是折扣數狀態改變時都應該要觸發，因為兩個狀態都影響著最終的輸出值，這時候就會需要同時監聽這兩個狀態。

```jsx
const component = ()=>{
	const [price,setPrice] = useState(0);
	const [discount,setDiscount] = useState(7);
	const [total,setTotal] = useState(0)

	// 費用計算功能
	useEffect(()=>{
		setTotal((total)=>total = price * discount)
	},[price,discount])
}
```

## useMemo

用於緩存重新渲染間的計算結果，減少不必要的渲染，進一步提升網站性能。

```jsx
const memoTodo = useMemo(calculateValue,[dependencies])	
```

1. `calculateValue`：需要是一個 *pure function*，會在初次渲染時執行一次，當 `dependencies` 改變時才會再次執行。
2. `dependencies`：監聽的狀態，可以有多個依賴狀態

> 寫 Vue 的人可以用 `computed` 去思考這個 hooks


### 適用情境
1. 避免大量資料的重新計算：當某個狀態是儲存 API 篩選資料的結果時，假設今天 API 資料筆數很多時，每次重新篩選都相當耗時。

## useCallback

由於 React 是採取 *一律重繪* 的渲染策略，所以函式也會在每次渲染間被重新宣告，透過 `useCallback` 在合適的設計下，能讓函式在正確的時機下重新宣告。

### 語法
```jsx
const callback = useCallback(func,[dependencies,dependencies])
```

### 執行流程
1. 將新舊 *dependencies* 進行比較：
	1. 發生變化：將此次渲染宣告產生的函式重新存入
	2. 沒有發生：緩存前次渲染的函式

> 你會發現 `useCallback` **不能阻止不必要的函式重新宣告**，每次元件重新渲染，函式都還是有被宣告產生，因此 `useCallback` 我自己理解真正的用途是 **確保函式處理邏輯能跟狀態同步**

### 使用情境

今天 Page 頁面在每次渲染都會觸發的副作用是 **索取 API 資料** 的副作用，期望達到的優化是 **只有當 query 狀態改變時**，才需要重新產生新的 `fetchData` 函式，這種受到 **依賴改變** 而影響的函式，就很適合加入 `useCallback` 去減少不必要的函式建構。

```jsx
export const Page = ()=>{
	const [query,setQuery] = useState('')

	useEffect(()=>{
		fetchData()
	},[fetchData])

	//未加入 useCallback
	functino fetchData(){
		return fetch(`urls/${query}`).then((res)=>res.json())		
	};

	//加入 useCallback：這樣一來若是 query 沒有改變，就沒有更新函式參照的必要
	const fetchData = useCallback(()=>{
		return fetch(`urls/${query}`).then((res)=>res.json())
	},[query])

}
```

