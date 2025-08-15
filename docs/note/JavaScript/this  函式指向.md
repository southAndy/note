
[this決策演算法](https://hackmd.io/@Chris/HkE0zq2uI)

### 什麼是 `this`

綁定`this`指向的方式分為：
1. 執行時，像是`func.apply()`,`func.call()`
2. 宣告時，像是`func.bind()`


### `this`指向哪

情境：今天你想透過`this`來指向btn，當點擊時會調整按鈕顏色
1. 綁定事件預設`this`指向
```js
var btn = document.querySelector("button");
      btn.addEventListener("click", function (e) {
        //1. 事件綁定中this預設會指向event自己(e)
        //將它存入變數，避免因呼叫方式改變this
        const self = this;
        const obj = {
          Fn: function () {
            self.style.color = "red";
          },
        };
        obj.Fn();
      });
```
2. 透過`bind()`在宣告時綁定`this`指向
```js
var btn = document.querySelector("button");
      btn.addEventListener("click", function (e) {
        
        const obj = {
          //強制它在宣告時就跟btn綁定，避免因不同呼叫方式指向不同人
          Fn: function () {
            self.style.color = "red";
          }.bind(btn/e.currentTarget),
        };
        obj.Fn();
      });
```
3. 利用arrow function的特性，綁定`this`
```js
var btn = document.querySelector("button");
      btn.addEventListener("click", function (e) {
        
        const obj = {
          //強制它在宣告時就跟btn綁定，避免因不同呼叫方式指向不同人
          Fn:()=>this.style.color="red",
        };
        obj.Fn();
      });
```
實作：https://codepen.io/andyz9506/pen/XWpGxar


### 原型鍊真的存在！
因為`Array`,`function`都是`Object`的子物件（透過原型鍊繼承）
所以Object呼叫property的方式，在 `function` 也能用`['property']`的方式呼叫
```js
function apple(){
    console.log('hi');
}
console.log(apple['bind'])
apple.bind()
```