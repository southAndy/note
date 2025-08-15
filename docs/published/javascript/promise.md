---
title: JavaScript Promise 詳解
description: Promise 物件的完整教學，包含基本創建方法、狀態管理、then/catch 使用、Promise 組合方法（all、race、any、allSettled）以及與 async/await 的比較
---

# [JS] Promise

### Promise 基本介紹

Promise 是一個物件，代表非同步操作的結果，當我們發起一個非同步操作時，Promise 會在未來的某個時間點給我們一個結果。


### 如何創建 Promise

要使用 `new` 關鍵字來創建 Promise 物件，這個被稱為 excutor ，excutor 需要傳入一個函式，**這個函式會立刻執行**，而它包含兩個參數 `resolve` 和 `reject`，分別代表非同步操作成功和失敗的回調函數，



1. 當執行 `resolve` 時：狀態會從 pending 轉變為 fulfilled，並且會執行 `resolve` 的回調函數
2. 當執行 `reject` 時：狀態會從 pending 轉變為 rejected，並且會執行 `reject` 的回調函數
3. 當沒有執行 `resolve` 或 `reject` 時：狀態會一直保持在 pending 狀態，直到有結果為止

```javascript
const promise = new Promise((resolve, reject) => {
    // fullfilled
    resolve('成功');
    // rejected
    reject('失敗');
});
```


:::warning
**狀態一旦從 pending 轉變為 fulfilled 或 rejected 後就不會再改變。**<br/>為什麼要特別強調這一點呢？因為這是 Promise 重要的特性之一，它的狀態是有可預期性，以下面簡單例子來說，
```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {reject('失敗')},1000)
    resolve('失敗');
});
```
即便有一個非同步操作在 1 秒後執行 `reject('失敗')`，Promise 的狀態也不會從 fulfilled 轉變為 rejected，而是保持 fulfilled 狀態。
:::

### Promise 的方法


透過 `then` 方法可承接 excutor 中 fullfilled / rejected 狀態的回傳值，它提供兩個參數，分別作為 fullfilled 和 rejected 的回調函數

```
promise.then(fullfilledHandler, rejectedHandler)
```

除此之外，`catch` 是專門用來處理 rejected 狀態的方法

```
promise.catch(rejectedHandler)
```

當 `then` 中觸發 rejected 狀態時，`catch` 會捕捉到這個錯誤，並中斷後續 `then` 的執行，直接執行 `catch` 的回調函數，如下面範例：

```javascript
new Promise((resolve, reject) => {
  resolve("Step 1: Success");
})
  .then((result) => {
    console.log(result); // 打印第一個步驟的結果
    return "Step 2: Success"; // 傳遞給下一個 .then()
  })
  .then((result) => {
    console.log(result); // 打印第二個步驟的結果
    throw new Error("Step 2: Error occurred!"); // 在這裡故意拋出錯誤
  })
  .then((result) => {
    // 這個步驟將不會執行，因為前面已經有錯誤
    console.log(result); 
    return "Step 3: Success";
  })
  .catch((error) => {
    // 錯誤會被這裡的 .catch() 捕獲
    console.error("Caught error:", error.message);
  });
```
剩餘 `all` / `race` / `any` / `allSettled` 都是 Promise 用來處理多個 Promise 組合的方法。它們的差異在於：

- `Promise.all()`：只有當所有原始的 Promise 都成功時，才會成功 resolve，否則只要有一個 Promise 失敗，就會立刻 reject。
- `Promise.race()`：只要有一個原始的 Promise 成功或失敗，就可成功 resolve
- `Promise.any()`：只要有一個原始的 Promise 成功，新的 Promise 就會成功，否則只要所有原始的 Promise 都失敗，新的 Promise 就會失敗。
- `Promise.allSettled()`：不管原始的 Promise 是成功還是失敗，新的 Promise 都會成功，並且會包含所有原始 Promise 的結果。

以及 `finally` 方法，不論原始的 Promise 是成功還是失敗，新的 Promise 都會執行 `finally` 的回調函數。


### 如何選擇 `catch` 或 `then` 作錯誤處理？

上面提到 `catch` 和 `then` 都可以用來處理錯誤，那麼到底該選擇哪一個呢？

```javascript
promise.then(fullfilledHandler, rejectedHandler)
// 等同於
promise.then(fullfilledHandler).catch(rejectedHandler)
```
最簡單來說就是
1.  **是否會有不同錯誤情境要處理？** 
2. 錯誤訊息格式是否一致？

假設你符合上述任一情境，那麼 `then` 會是比較好的選擇。

舉個例子，假設今天你要串接兩個 API，當第一個 API 讀取失敗時，你要打一隻名為 `notifyFailure` API 通知後端，但第二個 API 讀取失敗時，則不須通知後端僅需要回傳錯誤訊息，使用 `then` 能個別處理這兩種情境。

```javascript
new Promise((resolve, reject) => {
    // 模擬第一個 API 讀取失敗
    reject('Error from API 1');
})
.then(result => {
    // 第一隻 API 讀取成功時，執行第二隻 API
    return 'API 2 Success';
}, error => {
    // 第一隻 API 讀取失敗
    notifyFailure(error);
}).then(result => {
    // 第二隻 API 讀取成功
    return 'API 2 Success';
}, error => {
    // 第二隻 API 讀取失敗
    console.log(error);
})
```
但若你今天只有一種錯誤處理情境，那麼 `catch` 會是比較好的選擇。

```javascript
new Promise((resolve, reject) => {
    // 模擬 API 讀取失敗
    reject('API Error');
})
.catch(error => {
    // 捕捉到錯誤
    console.log(error);
});
```

### 何時該用 Promise 而不是 async/await？

網路上已經有許多文章提到 Promise 解決了 callback hell 的問題，但現在多數的非同步串接都是使用 async/await 來寫，那麼什麼時候該用 Promise 而不是 async/await 呢？

1. **需要同時執行多個非同步操作**：若是需要同時執行多個非同步操作，那麼使用 Promise 會比較方便，因為可以使用 `Promise.all` 方法來實現。
2. **不在 `async` 函式內進行非同步操作**：像是 `setTimeout` , `addEventListener` 等函數，這些函數的回調函數通常不會標記 `async`，這時候就會需要用到 `Promise` 來進行非同步操作。
3. **不需要等待的非同步行為**：若是非同步行為不需要等待，那麼使用 Promise 會比較方便。



