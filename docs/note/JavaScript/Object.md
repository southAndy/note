#javascript 


### 產生物件方式

```js
// 使用字面實值
const obj = {}
```

## 物件原型
```js
//增加一個沒有屬性的物件
const x = {};

//卻有toString可以用
x.toString()
```
這是因為每個物件都有對其原型保有參照,利用物件實例`{}`創建的也是

![](https://i.imgur.com/ForS6r0.png)
`x > Object`,這樣一層找過一層,形成所謂的(prototype-chain).

---

### 修改物件原型鏈

 `Object.setPrototypeOf()`
 
```js
const origin = {};
const beAdded = {name:"andy",age:26};
Object.setPrototypeOf(origin,beAdded)
```

![](https://i.imgur.com/lvTiw8J.png)

### 判斷物件是否有此方法

可使用 `in`  方法確認特定方法是否存在，但無法判斷方法是原型鍊提供還是物件本身的

```js
const origin = {};
const beAdded = {name:"andy",age:26};
Object.setPrototypeOf(origin,beAdded)
console.log("name" in origin);//true
```
2. `new` + 建構函式
```js
function Ninja(){}
//在其原型增加屬性
Ninja.prototype.add = "sucessful added"
const inherit = Ninja();
inherit.add; //error

//VM2003:1 Uncaught TypeError: Cannot read properties of undefined (reading 'add')
//at <anonymous>:1:9
```

透過`new`+建構函式,就能達成
```js
function Ninja(){}
//在其原型增加屬性
Ninja.prototype.add = "sucessful added"
const inherit = new Ninja();
inherit.add;//"sucessful added"
```

**reference**
1. ninja7-1 ~2


```js
function Ninja(){
    this.swing=false;
}
let ninja1 = new Ninja()

//在原型增加新的方法
Ninja.prototype.swingSword= function(){
    return this.swing=true;
}
//因為JS動態的特性,讓ninja1能透過參照取得新的方法
"swingSword" in ninja1;//true
```
如果修改原型,卻會保留舊的原型方法參照
```js
Ninja.prototype = {
    newMethod:console.log("hi"),
}
```
因為保留舊的原型方法參照,所以我們還是能使用`swingSword()`
```js
ninja1.swingSword();
```
**因為參照是在初始化物件建立的**

**判斷型別**
```js
//1
typeof 
//2
instanceof
//3
x.constructor()
```
![](https://i.imgur.com/AUFwOD6.png)

**物件繼承**
透過原型實現物件繼承
讓一個普通人學習忍者的技能XD

**設定屬性**
每個屬性都有屬性描述子(property descriptor)
```js
configurable:true/false,
//true:描述子可以被修改,且屬性可以被刪除
//false:則都不行

enumerable:true/false,
//true:屬性可以透過for-in操作

value:any
//設定屬性的值

writable:true
//可以透過設值敘述

get:取值函式
//可以用來取得屬性值(value),不能跟value,writable一起設定

set:設值函式
//可以用來設定屬性值(value),不能跟value,writable一起設定
```
用途:解決複寫constructor的問題
(ninja7-3)

**instanceof**
`instanceof`運算子運作在物件的原型鏈上面