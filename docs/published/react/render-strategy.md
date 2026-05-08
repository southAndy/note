---
title: React 的渲染策略
description: React 採用一律重繪策略的原理與優缺點，包含 Virtual DOM 比對機制如何優化效能，以及與傳統 DOM 操作的差異比較
draft: false
---

# react 的渲染策略 

React 是採取**一律重繪的渲染策略**，意思是當元件的 state 發生變化時，該元件本身與其所有子孫元件都會重新執行一次 render function，**不論子孫元件的 state 是否也有改變**。


為了理解 React 的渲染策略，先看一個直白的一律重繪實作

```jsx
const counterValues = [0, 0, 0];

function getNumbersSum(numbers) {
	return numbers.reduce((x, y) => x + y);
}

function handleIncrementButtonClick() {	
	counterValues[0] += 1;
	counterValues[2] += 1;	
	renderScreen();
}

function renderScreen() {
	document.body.innerHTML = '';	
	document.body.innerHTML = `
	<div id="counters-wrapper">
		<ul id="counter-list">
			${counterValues.map((counterValue, index) => `
				<li>counter ${index}: <span>${counterValue}</span></li>
			`).join('')
			}
		</ul>
	<div id="counter-sum">
		counters sum: <span>${getNumbersSum(counterValues)}</span>
	</div>
	</div>
	<button id="increment-btn">increment counter 0 & 2</button>
	`;

	document.getElementById('increment-btn').addEventListener('click', handleIncrementButtonClick);

}

renderScreen();
```

> 上述程式碼參考 [React 思維進化](https://www.tenlong.com.tw/products/9786263336841) 書中範例

上面的程式碼做了哪些事？以最簡單的說法

- 模擬了 useState 產生的狀態值及 set function 
- 模擬了一個簡易概念版的渲染函式

觸發點擊事件時，除了改變 `counterValues` 的值以外，也會觸發重新渲染的函式，**請仔細看 `renderScreen` 的內容，這是最核心的重點。**

```js
function renderScreen() {
	document.body.innerHTML = ''; //清空目前的畫面
	document.body.innerHTML = `
	<div id="counters-wrapper">
		<ul id="counter-list">
			${counterValues.map((counterValue, index) => `
				<li>counter ${index}: <span>${counterValue}</span></li>
			`).join('')
			}
		</ul>
	<div id="counter-sum">
		counters sum: <span>${getNumbersSum(counterValues)}</span>
	</div>
	</div>
	<button id="increment-btn">increment counter 0 & 2</button>
	`; //根據 state 的改變重新繪製

	document.getElementById('increment-btn').addEventListener('click', handleIncrementButtonClick); //重新綁定事件

}
```

這樣做法的優點是： **不需要精確判斷資料更新具體影響到哪些 DOM 元素**，因為每次重新渲染時，一律會將當前畫面上的 DOM 元素清除後，再重繪出全新的版本。

相對的，缺點就是會有顯著的效能浪費，**若設計不佳時會造成大量 DOM 被不必要操作產生**，應用在大型架構的網站，容易破壞使用者體驗。


看完了直白的概念之後，回來看看 React 的版本。


### React 的一律重繪

雖然以 **一律重繪** 作為渲染策略，但明白重繪 DOM 相當消耗效能，因此它將這件事在 virtual DOM 的階段去處理：


![virtual DOM diff flow](/react/render/virtual_dom_diff_flow.svg)


在 virtual DOM 的階段，會根據 state 的變化直接產生全新的 virtual DOM 架構，並**將新舊版的 virtual DOM 透過 diff 演算法進行比對**，比對出差異後才執行真實的 DOM 渲染。

因此，即便採取一律重繪的渲染策略，但比對差異的工作發生在 virtual DOM 階段，最終**只把「真正有變化的部分」更新到真實DOM**，避免了無差別清空重畫整個畫面的浪費。


### 如何避免子孫元件不必要的重新渲染

還記得文章開頭說過

> **一律重繪的渲染策略**，意思是當元件的 state 發生變化時，該元件本身與其所有子孫元件都會重新執行一次 render function

如果子孫元件並沒有改變，卻也要跟著被重新渲染，這很明顯是效能浪費，隨著網站架構越龐大，對效能影響會越明顯，使用者體驗也越差。

React 提供了 `React.memo` 搭配 `useCallback` 來解決這個問題，以下是概念示意圖，建議搭配範例程式碼一起看

![React.memo 與 useCallback 比較示意](/react/render/react_memo_usecallback_comparison.svg)




