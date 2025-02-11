# React - 渲染策略

React 是採取**一律重繪策略**，意思就是只要資料改變，整個頁面都會重新渲染一次。

這裡以 [React 思維進化：一次打破常見的觀念誤解，躍升專業前端開發者（iThome鐵人賽系列書）](https://www.books.com.tw/products/0010977360)書本中的範例程式碼為例：

```jsx
const counterValues = [0, 0, 0];

function getNumbersSum(numbers) {
	return numbers.reduce((x, y) => x + y);
}

function handleIncrementButtonClick() {
	// 範例行為：increment counter 0 & counter 2
	
	counterValues[0] += 1;
	counterValues[2] += 1;
	
	// 不需要判斷這次資料更新具體會影響到的 DOM elements 有哪些
	
	// 一率直接呼叫 renderScreen() 來將整個畫面全部的 DOM elements 都清除後再全部重繪
	renderScreen();
}

function renderScreen() {
	// 每次要繪製新的畫面之前，都先把整個瀏覽器畫面全部清空
	document.body.innerHTML = '';
	
	// 依據目前的最新資料，重新繪製一次整個畫面的所有 DOM elements
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

	// 重新綁定 increment button 事件
	document.getElementById('increment-btn').addEventListener('click', handleIncrementButtonClick);

}

renderScreen();
```
上述程式碼主要是模擬一律重繪 DOM 架構的實作，這樣做法的好處是，在更新資料後 **不需要判斷這次資料更新具體會影響到的 DOM elements 有哪些**，因為會一律將畫面整個 DOM  elements 清除後，再重繪出全新的架構。

但也有顯著的缺點 **效能浪費**，因為每次更新都要重繪全部的元素，容易造成大量不必要的 DOM 操作，應用在大型架構的網站，容易破壞使用者體驗。


React 雖然維持 **一律重繪** 作為渲染策略，但了解不必要重繪 DOM 的效能消耗，所以**它在渲染 virtual DOM 的過程加入比對機制 ，會根據新的資料去產生全新的 virtual DOM 架構，並將新舊版的 virtual DOM 進行比對**，比對出差異後執行真實的 DOM 渲染。

![](/img/react/strategy.png)

> 圖片製作參考：
> React 思維進化：一次打破常見的觀念誤解，躍升專業前端開發者（iThome鐵人賽系列書）