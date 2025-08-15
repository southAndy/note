#vuex 

### mutation
1. 只能處理同步內容
2.  vue devtol (timeline) 可追蹤觸發後狀態的改變
3. 如果要呼叫多個 `mutations` ，要搭配 `actions` 觸發
```js
//在元件使用方式

//1.一般寫法
this.$store.commit('name',payload)
//2.物件寫法(payload 是物件架構)
this.$store.commit({
	type:'name',
	// payload 內容
	amount:10
})

//在 vuex 內
mutations:{
	handler(state,payload){
		//state 是讀取 vuex 內狀態
	}
}
```

### getters

vue3 後 getters 沒有暫存功能


