#js 

### 使用 set

當今天有一個物件架構如下
```js
let obj = {
	adress:'台北市八里區',
}
```
透過 set 可以實現：對某個 key 值的 value 進行更動後會觸發的行為。

例如：今天你修改地址後，希望能跳出已修改提醒，就可以透過 set 來實現。
```js
let obj = {
	set adress(value){
		adress = value
		console.log('地址已修改')
	}
}
```


### get

