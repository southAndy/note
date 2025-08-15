#typescript 


如果有個情境：

> 不預先指定具體的型別，在使用的時候動態決定型別的一種特性。

直覺想到 `any` ，但這樣的寫法並不能限制回傳值的型別，不具備保護功能

```ts
function createArray(arg:any):any{
	return arg
}
createArray(true) //ok
createArray('') //ok
```

若是搭配泛型，能進一步約束回傳值型別
```ts
function createArray <T> (arg:T):<T>{
	return arg + 1 // error
}
```

因為你傳入什麼，就要回傳什麼。

> 泛型跟  any 差別在於 **泛型可更精確的定義回傳值的型別**


#### 可定義多個泛型
當函式有多個參數時，怎麼定義多個泛型？

```ts
function mutiple <T,A> (arg1:T,arg2:A):<T>{
	retun arg
}
```

#### 泛型約束

所謂的「泛型約束」指的就是根據需求，限縮泛型可傳入值的型別，例如我們今天希望傳入的值必須要有 `length` 這個屬性才能。



我們可以透過 `entends` 這個方法來實現泛型約束，以下為例：

約束傳入的值必須要包含 `length` 這個屬性，這個行為就被稱為 **泛型約束** （稍微限縮可傳入的類型）。
```ts
interface includeLength{
	length:number
}
function logMessage <T extends includeLength>(arg:T):T {
	console.log(arg.length);
}
```

