#vuex

### 前言

因為 vuex 的單一資料樹(single source tree) 設計概念，是**整個網站的所有狀態與邏輯都存放於相同位置**。但隨著網站規模擴大，狀態與邏輯越多，維護性難度也隨之上升，所以 vuex 提供了 `modules` 的設定，讓你可以根據資料層級去拆分管理全域狀態與邏輯。

## 模組 modules

在模組內，可以操作的狀態有：
1. 區域狀態：定義在這個模組內的狀態
2. 全域狀態：

```js
// store/child/index.js
export default {
	state:{},
	getters:{}
}

// store/index.js
import child from "./child/index.js"

export default store = new Vuex.Store({
	state:{},
	modules:{
		child
	}
})
```

### getters
它有四個參數：

1. `state`
2. `getters`
3. `rootState`
4. `rootGetters`

```js
// store/index.js
import child from "/store/child/index.js"

export default store = new Vuex({
	state:{
		number:1
	},
	getters:{
		calState(state)=>state.number
	}
	modules:{
		child
	}
})
//store/child/index.js
export default {
	state:{
		number:2
	},
	getters:{
	calTotal(state,getters,rootState,rootGetters){
		// 2 + 1
		return state.number + rootState.number
		//讀取根層 getters
		rootGetters.calState
	}
}
```

### actions
它有三個參數：

1. `state`：讀取區域狀態
2. `commit`：指定要觸發的 `mutations`
3. `rootState`：可讀取全域狀態

你可透過 `actions` 的第三個參數 `rootState` ，在子層模組內取得根層資料

```js
actions:{
	childActions({state,commit,rootState}){
		//印出根層的狀態
		console.log(rootState)
	}
}
```

## Namespacing 
**即便拆分出子層模組，Vuex 預設會把在子層定義的 `actions` , `mutations` 存放於根層級。**

這樣好處是每個模組都能直接讀取，但因為都能直接讀取，所以 vuex 無法區分要讀取哪個模組的方法

### 沒有設定的情境
#### actions 
根實例與子層實例的 `actions` 會一起呼叫
#### state
不會被影響，不會有覆蓋問題
#### getters
直接報錯，造成後續渲染壞掉

#### mutations
根實例與子層實例的 `mutations` 會一起呼叫



為了解決上述問題，需要在每個模組加入 `namespaced` 屬性
```js
export default{
	namespaced:true,
}
```

當你想要呼叫 `test` 方法時只會觸發全域的，要呼叫模組的要明確指定模組名稱：
```js
//例如要呼叫 child 模組內的 actions
this.$store.dispatch('child/test')
```




