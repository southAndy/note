### 產生陣列的方式

```js
//1.Array(number)
let x = Array(9);
//2.字面實值創立
let x = [];
//3.Array.of(arg...)
let x = Array.of(arg...)
```

1. 以Array()創建的陣列無法迭代

![](https://i.imgur.com/8CaCXhx.png)

原因是因為這個方法實際上是**產生了9個無值空格(null)**，在迭代時並找不到這些空格。

2. Array.from()幫你轉換 *iterable*/*Array-like*

![](https://i.imgur.com/VpGbmaF.png)

>*Iterable*:
它其實是一個協議，會在可迭代物件內加上@@iterable的key值，透過`console.dir([])`可以看見下面的屬性：![](https://i.imgur.com/NzXYQqK.png)
常見具有此屬性的:String,Array,Map,Set
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols


3. Array.of()可以加多個參數(選擇性)

![](https://i.imgur.com/jzbwhJu.png)



## Array.methods
### array.methods串接能串幾個？
只要那個方法有回傳值(`return`)，就能不斷透過`.`串接不同的方法（**執行順序由左而右執行**）。
### `array.prototype.reduce`
### knowledge of `reduce` 

syntax:`array,prototype.reduce(callbackFn(previousValue,currentValue,currentIndex)=>{},initialValue)`

1. **previousValue:** 實際上應被視為**迭代值的累加器**，舉例來說當你賦予`initialValue=1`時，所以進行`1+0`，而結果就是回傳給`previousValue`。
2. **currentValue:** 當前陣列的值
3. **currentIndex:** 當前陣列的索引值
4. **initialValue:**`reduce`**累加器**的初始值

**沒有 `inititalValue` 時**
陣列的`[0]`被作為`initialValue`當作初次呼叫的值
```javascript=
let x = [1,2,3,4,5];
let totall = x.reduce((previousValue,currentValue,index)=>previousValue+currentValue);
console.log(totall);
//acc:1 /1+2 = 3
//acc:3 /3+3 = 6
//acc:6 /5+4 = 10
//acc:10 /10+5 = 15
```

**有設定`initialValue`的時候**
第一次呼叫就會是`initialValue`+`currentValue`
```javascript=
let x = [1,2,3,4,5];
let totall = x.reduce((acc,currentValue,index)=>acc+currentValue,2);
console.log(totall);
//acc:2 /2+1 = 3
//acc:3 /3+2 = 5
//acc:5 / 5+3 = 8
//acc:8 /8+4 = 12
//acc:12 /12+5 = 17
```