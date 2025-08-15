---
title: Redux 狀態管理機制初探
description: Redux 的核心概念與運作機制，包含 store、action、reducer 的功能介紹，純函式的重要性，以及單向資料流的優缺點分析
---

# Redux - 機制初探


### store 
提供以下幾種方法：
1. `getValue` : 獲取當前狀態
2. `dispatch(action)`：通知 redux 更新狀態值
3. `subscribe`：訂閱狀態變化

### action 
主要目的是**描述發生事件**，用來讓 reducer 知道要做什麼， `action` 是一個 Javascript 物件架構

```js
const action = {
	type:"", //要觸發的 reducer 名稱
	payload:'' //希望更新的值
}
```

### reducer
它是一個 **純函式** ，接收兩個參數，分別代表 **當前狀態**、 **動作 (action) **，下面以一個計算功能為例

```js
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

那所謂的純函式又是什麼？為何它需要是一個純函式？

### 定義純函式

純函式，可以是 **輸入決定輸出**、**無副作用**、**不改變輸入值**。

```js
//有副作用
let counter = 0;

function increment() {
    counter += 1; // 這個函式修改了外部變數
    return counter;
}

//改變輸入值
function pushToArray(arr, value) {
    arr.push(value); // 修改了輸入的陣列
    return arr;
}
```


### 為什麼 Redux 強調 reducer 是純函式？

1. **可預測性高**：因為輸入決定輸出，我們可以輕鬆地測試和追蹤狀態的變化。
2. **方便測試**：純函式沒有副作用，測試時只需要檢查輸入與輸出是否符合預期。
3. **時間旅行和快照功能**：Redux 中的 DevTools 可以幫助你「時間旅行」，即還原或重播某個狀態，這要求 reducer 必須是純函式，確保重播的結果一致。
4. **避免不必要的 bug**：如果 reducer 修改了外部變數或狀態，可能導致難以追蹤的問題。

> 資料出自：部分參考 gpt 




## 核心概念

在 redux 內有三個核心概念，分別是 **單向資料流**、 **單一狀態管理**、**不可變狀態** 。

### 單向資料流

首先，要先知道更新 redux 內狀態的步驟：

1. UI 介面上呼叫 `dispatch`
2. `dispatch` 會攜帶 `action` 告知 Store 
3. redux 會帶著 `action` 給 reducer
4. 觸發 middleware 操作，如發出請求取得 API 等非同步行為（非同步操作時）
4. reducer 根據 `action` 內容決定要如何更新狀態
5. 更新完成狀態後，重新觸發 UI 改變

> 同步操作流程圖


![](/img/redux/redux-dataflow.png)

> 非同步操作流程圖

![](/img/redux/redux-async.png)


所謂的單向資料流指的就是 **資料只能按照單一方向流程改變**，也就是你沒辦法跳過、或是反方向來改變資料，例如：跳過呼叫 `dispatch` 直接修改 state。


###  優缺點
#### 優點

1. 資料改變可預測性強
2. 易於進行測試（因為是純函式）

#### 缺點

1. 學習曲線高，專案引入成本也高。

