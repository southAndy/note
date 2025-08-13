---
title: JavaScript 作用域機制
description: JavaScript 作用域的基本概念，包含全域作用域、函數作用域、區塊作用域的差異，以及作用域鏈的運作機制
---

# [JS] Scoped

在 JavaScript 中，有三種 Scope：

1. Global Scope
2. Function Scope
3. Block Scope

### Global Scope

Global Scope 是指在全域範圍內宣告的變數，可以在任何地方存取。

```javascript
var globalVar = 'global';
```

### Function Scope

Function Scope 是指在函數內宣告的變數，只能在函數內存取。

```javascript
function myFunction() {
    let functionVar = 'function';
}
console.log(functionVar); // ReferenceError: functionVar is not defined
```

### Block Scope

Block Scope 是指在 Block 內宣告的變數，只能在 Block 內存取。

```javascript
let x = true;
if (x) {
    let y = 10;
}
console.log(y); // ReferenceError: y is not defined
```

### Scope chain

scope chain 是指在函數內存取變數的順序，從內部向外層尋找，直到找到變數為止。

```javascript
let globalVar = 'global';
function myFunction() {
    console.log(globalVar);
}
myFunction(); // global
```