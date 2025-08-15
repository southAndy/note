


### 有無使用 setup 的差異
當你有只需要執行一次的邏輯時，就不該使用 setup 的方式撰寫，而要改成下面這樣的寫法
```js
<script>
	function excuteOnce(){
		return 1
	}
</script>

<script>
	export default = {
		setup(){
			//...
		}
	}
</script>
```
因為 setup 編譯方式，會在每次呼叫元件的時後都被打包一次，會消耗較多的效能

https://ithelp.ithome.com.tw/articles/10295418


### 直接加在元件上的 css 樣式去哪？

會加在元件的根元素上，並且不會覆蓋本來的樣式如下
```html
//child component
<div class='test'/>
```

這時我們在父層直接在元件上加樣式

```html
<MyComponent class="1"/>
```
渲染結果：
```html
<div class="test 1" />
```


### Transition

1. 是內建的**全域元件**，所以使用上不需額外 import 
2. 內部只能是單一節點或元件（這樣 vue 才能判斷要把動畫 css 掛載哪個元素上）
```html

//correct
<Transition>
	<Component/>
</Transition>

//wrong
<Transition>
	<Component/>
	<Component/>
</Transition>
```



### v-if, v-show 差異
1. 前者可用於 `<template>`  上，後者不能
2. 若初始是 falsy 值， 由 v-if 控制顯示的元件並不會進行渲染，但 v-show 則是必定渲染。

> 當 v-if 跟 v-show 同時使用， v-if 執行順序比較優先



### toValue()
在 vue3.3之後出現的功能，用於取出 ref 物件內的 value 值
```js
import {ref,toValue} from "vue"
let x = ref(2)

//一般使用 x 的值
x.value

//可以使用 toValue取出 .value 的值
let y = toValue(x);//2
```
>取出後仍保有響應式的特性



