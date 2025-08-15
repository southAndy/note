union 又稱為聯合型別，當你希望變數可以有**多種型別可能**，可以使用 `|` 區隔不同型別讓它成為聯合型別

範例：當一個變數可以是 `string` **或是** `number` 型別時：

```ts
let x:string | number
```

### 使用限制
但要注意**當要取用方法時，需為兩個型別共有的方法**，否則要設定更明確的型別條件才能呼叫

```ts
function store(value:string | number):number{
	console.log(value.length) // 回報 error，因為 number 沒有這個方法

	//1.透過條件確定型別
	if(typeof value === 'string'){
		console.log(value.length) //因為確定是 string
	}
	//2.使用兩個型別皆存在的方法
}