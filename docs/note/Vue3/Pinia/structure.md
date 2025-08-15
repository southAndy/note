#pinia

可以以物件 / 函式(setup store) 建立 store
```js
import { defineStore } from 'pinia'

//object
const store = defineStore('name',{
	state:()=>{
		return{
			state:1,
		}
	},
	getters:{},
	actions:{}
})

//function
const store = defineStore('name',()=>{
	//state
	const state = ref(1)

	//getter = computed
	const getter = computed(()=>{})

	//action = function
	async function getApi(){}

	return {
		
	}
})
```