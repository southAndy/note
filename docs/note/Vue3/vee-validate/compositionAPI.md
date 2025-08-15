
## useForm

### 在元件上使用


### 觸發驗證的行為

驗證的行為預設是被動 *lazy-validation* ，但你可以透過新增配置，來將驗證行為轉變為積極
*aggressive*
```ts
const email = defineInputBinds('email',{validateOnInput:true})
```

> 兩者差異在哪？
> 


useForm 內建一個方法 defineInputBinds ，提供你將驗證綁定到 input 元素上

```js
<script>
const { defineInputBinds } = useForm()

//根據欄位名稱宣告
const email = defineInputBinds('email')
</script>
<template>
//綁定到 input 上
   <input v-bind:email type="text"/>	  
</template>
```

> 因為綁在 input 上，所以 email 的值改變時會自動更新

### 客製化錯誤訊息

客製化錯誤訊息的函式可透過[[解構賦值]]  useForm 來取得分為：
1. 單一輸入匡添加 (setFiledError)
2. 多輸入匡 (setErrors)

```js
const {setFiledError,setErrors} = useForm()
```

syntax
```js
setFiledError('fieldName','error-message')
```