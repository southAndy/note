#javascript 

在 JavaScript 中，**Lexical Context（詞法環境）** 是指變數和函式在程式碼撰寫（編譯）時的作用範圍，而不是在執行時決定的。這與 **Lexical Scope（詞法作用域）** 密切相關，因為 JavaScript 使用靜態作用域來解析變數。


**1. 使用函式創建 Lexical Context**
當 JavaScript 進入一個函式時，會建立一個新的 **Lexical Context（詞法環境）**，這個環境包含：

• **變數環境（Variable Environment）：** 存放 var、let、const 定義的變數

• **外部環境（Outer Environment）：** 參考父層作用域

```js
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a); // 10，從 outer 的 lexical context 取得
  }

  inner();
}

outer();
```

在 inner() 內部，變數 a 是來自 outer() 的詞法環境，這就是 **Lexical Context** 的運作方式。

**2. 使用 let / const 創建區塊作用域的 Lexical Context**

  

let 和 const 具有 **區塊級作用域**（Block Scope），每次進入新的 {} 內都會建立新的 **Lexical Context**。

```js
{
  let x = 100;
  console.log(x); // 100
}

console.log(typeof x); // undefined，因為 x 不在全域詞法環境中
```

**3. this 的 Lexical Context（箭頭函式）**

  

一般函式的 this 會根據執行環境決定，但箭頭函式的 this 來自 **詞法環境**（定義時決定）。

```js
const obj = {
  name: "Andy",
  normalFunc: function() {
    console.log(this.name); // this 指向 obj，輸出 "Andy"
  },
  arrowFunc: () => {
    console.log(this.name); // this 來自定義時的環境（全域），通常為 undefined
  }
};

obj.normalFunc(); // Andy
obj.arrowFunc();  // undefined （箭頭函式的 this 不是 obj，而是 window / global）
```

**重點**：箭頭函式的 this 來自詞法環境，因此不會因為函式的執行方式而改變。

**4. eval() 和 with 影響 Lexical Context**

• **eval()** 會動態執行程式碼，可能影響詞法環境。

• **with** 會改變變數的解析方式，導致作用域混亂，因此不建議使用。

```js
let x = 1;
eval("let x = 2; console.log(x);"); // 2，eval 產生了新的 lexical context
console.log(x); // 1，原本的 lexical context 沒有被修改
```

```js
let obj = { y: 10 };

with (obj) {
  console.log(y); // 10，`y` 變成 `obj.y`，影響 lexical context
}
```

**結論**

  

JavaScript 的 Lexical Context 是指 **變數與函式定義時的作用域**，並影響：

1. **函式作用域（Function Scope）**

2. **區塊作用域（Block Scope）**

3. **箭頭函式的 this**

4. **eval() 和 with 影響變數解析**

  

你在特定場景中遇到 Lexical Context 的問題嗎？