# Render and Commit

### 觸發時機

根據官方文件，主要可以分為三個步驟：

1. 觸發渲染(triggering)
2. 渲染畫面所需元件(rendering)
3. 將渲染畫面提交至 DOM (committing)


## 觸發渲染

時機分別是 **初次載入** 跟 **狀態更新**

### 1.初次載入

會呼叫 `creactRoot` 來產生根層級的虛擬容器（virtual DOM)，並且使用 `appendChild()` 綁定至指定的 DOM 結構上並返回根容器，接著透過 `render` 去渲染對應的頁面內容

```jsx
const root = reactDOM.create(getElementById("root"));
root.render()
```

:::tip
能用 `class` 綁定嗎?是可以的，但是考量到:

1. id 具有唯一性
2. 若是大型專案架構龐大的情況下，查找 class 會更花時間，較不利性能

等兩個因素，所以通常還是綁定 id
:::

### 2.狀態更新渲染

會使用所謂的 *set function* 去產生及修改狀態(state)，當狀態值發生改變，就會觸發狀態更新渲染。


## 渲染畫面所需元件

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

以這個範例程式碼來說，渲染流程應該是：

1. 最初開始渲染 `App` 元件內容，遞迴檢查發現有子元件 `Component`，停止 `App` 渲染開始渲染 `Component`
2. 渲染 `Component` 元件，遞迴檢查發現孫元件 `ChildComponent` 停止 `Component` 渲染開始渲染 `ChildComponent`
3. 渲染 `ChildComponent` 元件遞迴檢查沒發現更下層元件，結束元件渲染，返回 `Component` 層級渲染

### 2.狀態改變

react 是使用 _Diffing Algorith_ 去處理重新渲染機制

#### 關於 Diffing 演算法

在狀態發生改變並觸發重新渲染時，首先會比對發生變化的 root element，如果 root element 的元素不同（如下），就會直接整株重新渲染：

```jsx
//原本的架構 root element 為 div
<div>
  {state}
  <button>click</button>
</div>

//新的架構 root element 為 main
<main>
  {state}
  <button>click</button>
</main>
```

相反的，如果根元素不變，則不會整株更新而是僅更新狀態所在的元素（如圖）。

![](https://imgur.com/Kvu3h0s.png)

> 圖片出處：https://react.dev/learn/render-and-commit

## 提交渲染至 DOM

### 初次渲染

會使用 `appendChild()` 把 Virtual DOM 上產生的全部內容，從綁定的根節點 root dom 往下渲染


