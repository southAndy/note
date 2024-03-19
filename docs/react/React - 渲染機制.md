### 觸發時機

根據官方文件，可以分為三個步驟：

1. 觸發(triggering)
2. 開始渲染畫面所需元件(rendering)
3. 將渲染畫面提交至 DOM (committing)

---

## 觸發

觸發時機可分為**初次載入觸發** 跟 **狀態更新觸發**

### 1.初次載入

會呼叫 `creactRoot` 來產生根層級的虛擬容器，並且綁定至特定的 DOM 結構上，並返回根容器

```jsx
const root = reactDOM.create(getElementById("root"));
```

:::tip
能用 `class` 綁定嗎?是可以的，但考量到:

1. id 相對具有唯一性
2. 若是大型專案架構龐大的情況下，查找 class 會更花時間，較不利性能

等兩個因素，所以通常還是綁定 id
:::

接著透過其內建方法 `render` 去渲染根頁面內容

```js
const root = reactDOM.create(getElementById("root"));
root.render(<App />);
```

### 2.狀態更新渲染

會使用所謂的 _set function_ 去產生狀態，當狀態值發生改變，就會觸發所謂的狀態更新渲染。

---

## React 渲染畫面元件

也同樣可以分為初次及狀態更新兩種

### 1.初次渲染

React 初次渲染機制是採取遞迴式渲染，會透過不斷遞迴檢視架構是否有更多子、甚至孫的架構，直到確認沒有為止。

假設今天要被渲染的頁面架構如下：

```js
const App = () => {
  return (
    <>
      <h1>title</h1>
      <Component />
    </>
  );
};
```

而其中 `<Component/>` 架構

```jsx
const Component = () => {
  return (
    <>
      <h2>subtitle</h2>
      <ChildComponent />
    </>
  );
};
```

最初會由父層 App 元件開始依序渲染，當偵測到內部包含其他元件時，會先去渲染元件內容

<!-- ```
App
- h1
- Component (元件) -> 進入 Component 渲染
	- h2
	- ChildComponent(元件) -> 進入 ChildComponent 渲染
		- h3
		- ... -> 確認到底沒有其他可渲染
	- span
- p
``` -->

所以，以這個範例程式碼來說，會不斷遞迴確認是否還有未渲染內容，其中最快被渲染完成的應該是 ChildComponent 內的架構，依序往上層渲染，直到完成內容。

### 狀態改變重新渲染

react 是使用 _Diffing Algorith_ 去處理重新渲染機制

![](https://imgur.com/Kvu3h0s.png)

> 圖片出處：https://react.dev/learn/render-and-commit

### Diffing 演算法

在狀態發生改變並觸發重新渲染時，首先會比對發生變化的 root element，如果 root element 的元素不同（如下），就會直接整株重新渲染：

#### 單一元素渲染

舊的

```jsx
<div>
  {state}
  <button>click</button>
</div>
```

新的

```jsx
<p>
  {state}
  <button>click</button>
</p>
```

相反的，如果根元素不變，則不會整株更新而是僅更新狀態值的部分。

#### 元件渲染

都是全部完整更新（待補充）

最終我們終於產生一個完整的 Virtual DOM（如下圖）

![[Pasted image 20240130134135.png]]

## 提交渲染至 DOM

### 初次渲染

會使用 `appendChild()` 把 Virtual DOM 上產生的全部內容，從綁定的根節點 root dom 往下渲染（如下圖）

![[Pasted image 20240130140614.png]]

---

### 參考資料

1. [Reconciliation](https://zh-hant.legacy.reactjs.org/docs/reconciliation.html)
2. [## 從 jQuery 到 VirtualDOM 來淺談什麼是 state—useState 完整範例與介紹](https://ithelp.ithome.com.tw/articles/10300256)
3. [# React 渲染機制 — — Virtual DOM 與 Diffing 演算法](https://medium.com/swf-lab/react-%E6%B8%B2%E6%9F%93%E6%A9%9F%E5%88%B6-virtual-dom-%E8%88%87-diffing-%E6%BC%94%E7%AE%97%E6%B3%95-fcf515ccbc59)
4. [# What is Diffing Algorithm ?](https://www.geeksforgeeks.org/what-is-diffing-algorithm/)
