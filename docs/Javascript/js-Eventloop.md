# 事件循環 eventloop

### 前言

當你撰寫完一段程式碼，你是否會好奇它是如何執行？在 javascript 中可以透過理解「事件循環」來認識執行方式。

### 架構

與主要架構相關：

1. call-stack：同步的執行內容會依序放置在此
2. callback-queue：非同步的執行內容放置
3. Web-API：瀏覽器提供的各種方法

![](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Event_loop/the_javascript_runtime_environment_example.svg)

> 圖片來源：https://subhra.hashnode.dev/all-about-javascript-event-loop

### 同步與非同步的概念

一般來說，程式碼的執行會逐行掃描後依序進行：

```js
const x = 2;
console.log("執行 x", x);

setTimeout(() => {
  console.log("執行 setTimeout", "1");
}, 2000);

const y = 3;
console.log("執行 y", y);
```

上述的程式碼執行後得到結果

```
'執行 x' 2
'執行 y' 3
'執行 setTimeout' '1'
```

結果顯示並沒有依序執行，是因為 `setTimeout` 就是所謂的「非同步行為」，除了 `setTimeout` 以外，像是 `Promise`, `script` 等都是「非同步行為」。

### 事件循環流程

對於同步與非同步有基本認識後，讓我們回到文章主題：**事件循環** ，執行步驟如下：

1. 掃描所有的程式碼內容，這時所有的執行都會在**主線軸**

---
