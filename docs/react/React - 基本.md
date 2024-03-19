### 文章目錄

在這一篇會介紹的：

1. <a href="#jsx">認識 JSX</a>
2. <a href="#使用事件">在 react 中如何使用事件(event)</a>
3. <a href="#react-中最基本的單位---元件">react 中最基本的單位 - 元件</a>
4. <a href="#介紹-react-中的狀態-state">介紹 react 中的狀態 (state)</a>

### JSX

JSX (Javascript XML) 是一種語法擴編，讓你可以在 Js 檔案內撰寫類似 XML, HTML 的內容：

```jsx
const hTag = <h1>這是 h1 </h1>;
```

透過編譯器（如 babel）幫忙轉譯後，就能產生對應的 html 架構。

#### 在 JSX 使用 JS

在 react 透過 `{}` 允許你將 **Javascript 表達式** 的內容放入 JSX 中

```jsx
const x = 2;
const hTag = <h1>{x}</h1>;
```

簡單條列常見的簡單用途：

```jsx
// 顯示樣式
const isShow = true;
const showElement = isShow ? "block" : "none";
const hTag = <h1 className={{ display: showElement }}></h1>;

// 添加屬性
let type = "text";
const inputTag = <input type={type} />;
```

---

### 使用事件

在原生 Javascript ，我們透過事件來跟使用者產生互動，像是當使用者點擊按鈕後會跳出提示訊息，在 react 同樣也可透過事件來實現這些：

#### 語法

```jsx
<tag event={eventHandler}></tag>
```

#### 使用方式

最簡單可分為立刻、跟被動觸發事件兩種

```jsx
//被動觸發
<h1 event={eventHandler}></h1>

//立刻觸發
<h1 event={eventHandler()}></h1>
```

:::warning
注意：立刻觸發的方式會讓強迫 react 立刻重新渲染，可能會產生不必要的耗能。
:::

當你想要傳遞參數給 `handler` 時，可以改用 callback 的方式呼叫事件

```jsx
<h1 event={(params) => eventHandler}></h1>
```

---

### react 中最基本的單位 - 元件

在 react 中最基本的單位就是元件，每個元件都可以理解是一個函式，所以會具有函式的以下優點：

1. 封裝可複用
2. 邏輯有 scope 保護不易被全域值污染

#### 基本寫法

```jsx
function Button() {
  return <button></button>;
}
export default Button;
```

這樣就產生了一個按鈕元件。

---

### 參考資料
