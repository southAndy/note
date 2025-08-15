#vue2 

使用 `Vuex` 提供的 `Store` 方法來產生全域管理實例，並使用 `Vue` 提供的 `use` 方法將這個管理實例註冊。

```js
//store/index.js
import {Vuex} from "vuex"
import {Vue} from "vue"

//註冊 Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
	//vuex 各項設定
	state:{},
	getters:{}
})

//輸出這個實例
export default store
```
在渲染點引入這個全域管理器

```js
//main.js (預設進入點)
import store from "./store/index.js"

const vm = new Vue({
	store,
	render:(h)=>h(App)
}).$mount(app)
```

> 為何 `Vue.use(Vuex)` 要寫在 store 內？
> 
> 因為在 vue2 ，Vue 的各項配置要在創建 Vue 實例前完成，不像 vue3 
