#reactivity #vue3 
## ref

Ref 監聽 **會根據存入的變數型別有所不同**，當你存入的

1. `object`, `array` 等 call by reference  型別：透過 Proxy 進行監測
2. 其他 call by value 的型別：則是透過 get, set 實現監控

### call by value

透過 [[getter,setter]] 的方式來實現響應式監控
```js
// 產生一個 call by value 的值
const state = ref(2);

//背後實際是
const state = {
	get:(){
		return _value_ //回傳目前的狀態值
	},
	set:(newValue){
		_value_ = newValue //更新狀態值
		reRender() //觸發重新渲染
	},
}
```

所以當你想讀取狀態或是重新賦予 `.value` 時，背後實際上都是在觸發 `get` , `set` 。

### call by reference
而如果是 object , array ，在 vue3 則是透過在外層包覆 [[proxy]] 來監聽
```js
const objState = ref({name:'andy'})

//背後
const objState = new Proxy({

})
```

### reactive

只能存入 call by reference 型別的值，


### 比較優缺點


----



### 註解
1. [[Javascript variable type]]