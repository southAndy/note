

### 用途

將陣列、物件內的值另存於新的變數，這樣的方法在實際工作上蠻能運用：因為 api 資料多為陣列、物件，當你只想取出特定值時，就可以使用。

### 範例

取出陣列值

```js
const list = [1,2,3]
const [a,b,c] = list //取出 list 中的 1,2,3 

console.log(a,b,c) //1,2,3
```


忽略特定值

```js
const list = [1,2,3]
const [a, ,c] = list //取出 list 中的 1,3 

console.log(a,c) //1,3
```

可以設定預設值

```js
const list = [1,2,3]
const [a=1, ,c=3] = list 

console.log(a,c) //1,3
```

當解構的值是 `undefined`, 則會套用預設值，但如果是 `null` 則不會

```js
const list = [1,null,undefined]
const [,b=2,c=3] = list  

console.log(b,c) //null,3
```

---

### 參考資料

1. [Mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#try_it)
2. []()