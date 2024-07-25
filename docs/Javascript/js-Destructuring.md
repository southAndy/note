
### 前言

解構賦值是在 es6 之後推出的語法糖，用更簡單的方式將陣列、物件內的值單獨取出另存於新的變數。我自己的理解可以初略分為：

1. 陣列解構
2. 物件解構

兩者差異與限制會於下方說明

---

### 陣列解構

只要符合 [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) 的內容，都可以使用陣列解構

string

```js
const x = 'string'
let [s,t,r,i,n,g] = x

console.log(s,t,r) //s,t,r
```

Map

```js
const x = new Map([1,2])
const [a,b] = x

console.log(a,b) //1,2
```



除了基本的取值之外，還可以根據情境需求做以下的事情：

1. 忽略陣列內特定 index 內的值
2. 設定預設值
3. 搭配離散使用

```js

// 忽略特定 index
const list = [1,2,3]
const [a, ,c] = list //取出 list 中的 1,3
console.log(a,c) //1,3


//增加預設值
const list = [1,2,3]
const [a=1, ,c=3] = list
console.log(a,c) //1,3

//搭配離散
const [a,...b] = [1,2,3,4,5,6]
console.log(a,b)
```

---

### 物件解構

最基本可以理解是取出物件 key 的值，但解構名稱要與 key 相同 

```js
const obj = {a:1,b:2}
const {a,b} = obj
console.log(a,b) //1,2
```

重新為解構命名

```js
const obj = {a:1,b:2}
let {a:newA,b:newB} = obj

console.log(newA,newB) //1,2
```

單獨提取物件 key 值作為函式參數

```js
const x = {userName:2}

function getName({userName}){
	return userName
}
console.log(getName(x)); //2


//要另外為參數命名作法就類似上面
function getNewName({userName:newName}){
	return newName
}
```
---

### 不可解構型別與用法

```js
const {a} = 1 //undefined
const {a} = undefined // error
const {a} = null //error

const [a] = {a:1} //error 
```

---

### 實際應用

#### 1. react 元件 props 數值提取

react 的 props 實際上是一個物件，若沒有透過解構，實際上取值會是

```js
const reactComponent = (name)=>{
	return '
		<div>{props.name}</div>
	'
}
```

若是透過解構則可改寫為

```js
const reactComponent = ({name})=>{
	return '
		<div>{name}</div>
	'
}
```
  
#### 2. 取出 API 中特定的資料

通常 api 都是複合的資料結構，假設今天我們拿到的回傳資料如下：

```js
const api = {
	user:[{name:"andy"},{name:"leo"}],
	status:200
}
```

假設今天只想取出其中 user 中第一個物件的值，透過解構

```js
const {user:[firstUser]} = api
```


---
### 參考資料

1. [Mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#try_it)
2. [[筆記] ES6 的解構賦值(Destructuring Assignment)](https://medium.com/@leo122196/%E7%AD%86%E8%A8%98-es6-%E7%9A%84%E8%A7%A3%E6%A7%8B%E8%B3%A6%E5%80%BC-destructuring-assignment-8a1df9eddbd7)