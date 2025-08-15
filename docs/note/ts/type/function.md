### 可選填參數

在目標參數加上 `?` 即可，這樣編譯器檢查沒有傳入該參數的函式就不會報錯
```ts
function Add(item:ItemType,index?:number){
	return item
}
```