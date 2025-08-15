#vue3 

## 操作 `slot` 插槽

在開始之前，先來回顧一下上面已知道的
>因為編譯作用域的關係，父元件無法影響子元件的內容

`slot` 在官方文件稱為『插槽』，**讓你可以在元件內產生一個空間**，它有以下特色：

1. 內容是透過父元件傳入子元件內。
2. **傳入內容優先度大於 `slot` 的預設內容**

### 具名插槽
你有想過，當今天元件內插槽數量超過一個時如何正確插入嗎？這時候就需要幫插槽命名來產生所謂的**具名插槽**。例如你今天分別想將不同內容插入header / main / footer 三個不同內的slot

**命名方式**：
在 slot 標籤內加上 `name` 的屬性
```html
	//子元件結構
	<template>
		<header>
			<slot name="header">i am default header</slot>
		</header>
		<main>
			<slot name="main">'i am default main'</slot>
		</main>
	</template>
```

**傳入方式** ： 
在父層透過 `v-slot:[name]` 來指定要傳入的插槽位置，例如想隨意加入內容到 header 的 slot內：
```html
	<custom-component>
		<template v-slot:'header'>
		... 你想加入的內容
		</template>
	</custom-component>
```
>注意： 
>1. **具名插槽 `v-slot`  一定要搭配 `<template>` 使用**
>2. `v-slot:["name"]` 可以簡寫為`#[name]`
>3. 如果 `slot` 沒有命名，預設會將它名稱為 `default` 


<br>

#### 新增並取得子元件屬性

除了`name` 以外， `slot` 元件上還能加上其他自定義屬性，可以提供給父元件取用
```js
<slot name="son" forFather="87" :forTest="testText"></slot>
```
取用的方法就是在 `v-slot` 後面加上  `={[屬性名稱]}`
```js
<template #son={[屬性名稱1,屬性名稱2]}> 
	{{屬性名稱}} //87
</template>
```



### $slots
在子元件，可以透過
```js
console.log(this.$slots['name']);//印出父元件透過slot傳來的資訊
```





### 動態切換插槽

`v-slot:[variabel]`

透過變換 `variable` 來調整顯示內容
