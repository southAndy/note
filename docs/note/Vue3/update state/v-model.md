### 特性與限制

1.只能用在 `input` ,`select`,`textarea` 等元素上
2.當你使用 `v-model` 監控 `input` 時，定義於 value 屬性上的值**優先度低**於 v-model 綁定的

```js
// modelValue work!
<input v-model='modelValue' value='vanillaValue'/>
```

3.使用於不同元素時，預設事件皆不同：

![[Pasted image 20250729150137.png]]


### 加入修飾符

.lazy / .number / .trim



### 自定義 輸入框回傳值

值可以透過 `true-value` / `false-value` 自定義兩種情況的回傳值，或是**加上 `v-bind` 產生動態的自定義內容**
```js
<template>
	<input true-value='customize' type='checkbox'  v-model='detect'/>
	<input :true-value='dynamicCustomize' type='checkbox'  v-model='detect'/>
</template>
<script>
	export default {
		name:'sample',
		data(){return{
			detect:'',
			dynamicCustomize:'anyThing'
		}}
	}
</script>
```

當你綁定一個`[]`
1. 使用單一變數作為多個輸入欄位的監測變數如下：
2. modelValue的原始型別為 `[]` 
3. 回傳值不再是 `true/false`
```js
<template>

	<input type='checkbox' value='andy' v-model='detect'/>
	<input type='checkbox' value='rex'  v-model='detect'/>
	<input type='checkbox' value='angela' v-model='detect'/>
	<input type='checkbox' value='wendy' v-model='detect'/>
</template>
<script>
	export default {
		name:'sample',
		data(){return{
			detect:[],//當你全選時會是：['andy','rex'..etc]
		}}
	}
</script>
```


### 監聽元件
https://ithelp.ithome.com.tw/articles/10268187

v-model + computed(get + set)
今天我們希望對 `v-model` 監聽的值多做一些處理，你可能會想到，把它拆分成兩個部分
```js
	<InputElement :modelValue='selected' @update:modelValue=handler />
```

但這樣有兩個可改進的部分：
1. 可讀性
2. 要多寫一個`methods`


---

### reference

- https://vuejs.org/guide/essentials/forms.html