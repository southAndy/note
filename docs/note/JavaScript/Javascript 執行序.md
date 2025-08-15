#javascript 


當瀏覽器讀取下方程式碼內容時，它會做的事情包括：

1. 由上而下掃描所有內容
2. 給予變數 `count` 一個記憶體位置
3. 發現要執行 `increase` 函式，將它放上 event loop 的堆疊上，開始執行

```js
const count = 0;

function increase(){
	count++
}

increase()
```
