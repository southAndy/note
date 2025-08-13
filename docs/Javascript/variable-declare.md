---
title: JavaScript 變數宣告比較：var、let、const
description: 詳細比較 var、let、const 三種變數宣告方式的差異，包含作用域、hoisting 機制、暫時性死區（TDZ）以及最佳實踐建議
---

# [JS] 比較 var, let, const

:::tip
建議先閱讀 [Scoped](./scoped.md) 章節再閱讀本篇文章
:::


### 三者差異

在 JavaScript 中，變數宣告有三種方式：`var`、`let`、`const`，以下幾點是它們的差異：

1. `var` 可以重新宣告，但 `let` 和 `const` 不可以
2. `var`,`let` 可以重新賦值，但 `const` 不可以
3. 自己理解是全部都會有 hoisting 問題，但 `let` 和 `const` 在 hoisting時會受到暫時性死區(TDZ)的限制，不會真正提升
4. `var` 的作用域是全域/函式(Global/Function)，`let` 和 `const` 的作用域是區域(Block)/全域(Global)

### 什麼是 hoisting?

你是否曾經思考過，為什麼有些情境下變數在宣告前就可以使用，而且不會報錯？

```js
console.log(a); // undefined
var a = 1;
```
或是函式也能在宣告前就可以被呼叫：

```js
test(); // "test"
function test(){
    console.log("test");
}
```
這些都是因為提升（hoisting）的關係，變數宣告會被提升到作用域的頂端，但函式提升跟變數提升不一樣的地方是：

- 變數提升：變數宣告會被提升到作用域的頂端，但是賦值的部分不會，所以會有 undefined 的狀況
- 函式提升：函式宣告會被提升到作用域的頂端，而且賦值的部分也會被提升

###  TDZ 

TDZ 是 **Temporal Dead Zone** 的縮寫，是用來避免 `let` 和 `const` 宣告的變數被提前使用，若是觸發則會報錯：

```js
console.log(a); // ReferenceError: a is not defined
let a = 1;
```
除了用來避免被宣告前被使用外，Explain this 的 [什麼是提升 (Hoisting)？](https://www.explainthis.io/zh-hant/swe/hoisting) 這篇文內提到
You don't know JS 的作者給出了另一個很好的解釋：

> TDZ 錯誤其實是為了 `const` 所設計的。試想一下，如果 `const` 的提升行為與 `var` 相同，因此我們在宣告前訪問到 `const` 變量時，會拿到 `undefined` 的值，但我們也知道 `const` 是常數，同個作用域中值不應該變動，因此如果先拿到 `undefined` 後再拿到不同值的設計會不符合規範。因此設計了暫時死區的錯誤，避免這種情況發生。
### 觀念測試

下面呼叫 `test` 函式，會輸出什麼？
```js
var a = 1;
function test(){
    if(typeof a === 'undefined'){
        var a = 2;
        console.log(`hello ${a}`);
    }else{
        console.log(`hello ${a}`);
    }
}
test();
```
答案是 `hello 2`，這邊考兩個觀念：

1. `var` 作用域是 Function scope，所以在 `test` 函式中，是可以讀取到 Block scope 內的 `a` 變數
2. `var` 會有 hoisting 問題，所以即便函式內的 `a` 還沒賦值，也會因為 hoisting 問題，導致在 `test` 函式中，可以讀取到 Block scope 內的 `a` 變數

### 總結差異

最後用圖表再總結一次它們的差異：

| 宣告方式 | 是否可以重新宣告 | 是否可以重新賦值 | 是否會有 hoisting 問題 | 作用域 |
|--------|--------|--------|--------|--------|   
| `var` | 可以 | 可以 | 有 | 全域/函式 |
| `let` | 不可以 | 可以 | 有 | 區域/全域 |
| `const` | 不可以 | 不可以 | 有 | 區域/全域 |