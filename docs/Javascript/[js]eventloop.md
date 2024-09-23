# [JS] Event Loop

### 前言

當你撰寫完一段程式碼，你是否會好奇它是如何執行？在 javascript 中可以透過理解「事件循環」來認識程式碼執行方式。

### 同步與非同步的概念

但在進入事件循環之前，要先了解什麼是**同步**與**非同步**，要知道 Javascript 是單執行序的語言，意思是一次執行一個程式碼完成才往下執行，這就是**同步**的行為。

```js
console.log("1");
// 這時候會先執行印出 1 後，才會執行 2
console.log("2");
// 這時候會先執行印出 2 後，才會執行 3
console.log("3");
```
假想今天我們執行一個程式碼，完成程式碼執行會需要等待一段時間（常見跟伺服器檢索資料之類），如果以同步方式執行，會造成主執行序阻塞，這時候就需要**非同步**的行為來解決。透過非同步行為，我們可以讓程式碼在等待完成的時間去做其他事，而不是阻塞在那邊，而執行環境（如瀏覽器,nodejs）能夠實現非同步操作就是透過事件循環的機制。**事件循環機制有效解決了JavaScript中的單執行緒問題，並確保耗時操作不會阻塞主執行緒。**


### 事件循環內部的幾個元素

這邊執行環境舉例為瀏覽器，其主要架構：

1. 堆疊 (call stack)：採取「後進先出」的機制，內容會依序放置在此
2. 堆疊 (heap)：存放變數、物件等資料
3. 佇列 (callback queue)：最概略的說法就是：存放非同步的執行內容放置
4. Web-API：執行環境（瀏覽器）提供的各種方法

![](/img/eventloop/eventloop.png)

> 圖片來源：https://subhra.hashnode.dev/all-about-javascript-event-loop




### 事件循環運行流程

對於同步與非同步以及事件循環有基本認識後，讓我們回到文章主題**事件循環** ，每次事件循環的執行步驟如下：

1. 掃描所有的程式碼內容，所有的同步執行都會放入 call stack 中執行
2. 中間遇到非同步的程式碼，若是需透過 Web-API 執行（如 setTimeout），會先將非同步的程式碼交給 Web-API 執行，執行完後會推入 callback queue 中等待被執行
3. 等待 call stack 內沒有待執行內容後，會去 callback queue 查看是否有非同步的程式碼待處理，有則推入 call stack 內開始執行

舉例來說，以下程式碼，圖解執行流程如下

![](/img/eventloop/eventloop-work-easy.png)

### 細探 callback queue 

但其實 callback queue 還可以細分 microtask queue 與 macrotask queue，以下是 MDN 的解釋：

> 微任務（Microtasks）：微任務是較輕量級的任務，通常用於處理非同步事件的回調。微任務的執行優先級高於巨集任務，因此它們會在巨集任務之前執行。微任務通常包括 `Promise`, `MutationObserver` 等。

> 巨集任務（Macrotasks）：巨集任務是較重量級的任務，通常用於處理較慢的非同步操作，如 I/O 操作、網路請求等。**巨集任務的執行優先級低於微任務，因此它們會在微任務之後執行**。巨集任務通常包括 `script`, `setTimeout`, `setInterval`, `XMLHttpRequest` 等。

看完了那我們來測試一下，以下程式碼的執行順序

```js
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('script end');

```
你覺得會印出什麼呢？
:::tip
如果想做更多練習，這邊提供一個大神做的網站給你測試：https://latentflip.com/loupe/
:::




---
