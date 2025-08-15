
#vue2 

## 區域 mixin
### 基本使用
可以把它想像成一個元件，元件內可以定義的屬性，它都能定義

```js
const mixin = {
	data:function(){
		return {
			test:1,
		}
	},
	//也能加入生命週期
	created:function(){
		console.log('mixin created')
	}
}
export mixin
```

在元件內有一個 `mixin` 屬性，因為是陣列所以你可以同時引入多個自定義的 mixin，而它們會依序執行

```js
import {mixin} from "mixin.js"


export default {
	name:"component",
	mixin:[mixin,]
}
```


### 與元件的執行順序

渲染元件時，會先觸發 mixin 內的生命週期，然後才是元件的

```js
import {mixin} from "mixin.js"


export default {
	name:"component",
	mixin:[mixin,],
	created:function(){
		console.log('component created')
	}
}
```

### 合併策略

若跟元件內有相同名稱屬性，元件的會覆蓋 mixin 定義的


#### 客製化合併策略