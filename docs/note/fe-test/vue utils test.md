#test


## 模擬元件掛載

```js
import { shallowMount,mount } from '@vue/test-utils';
```

這兩種分別是 **淺層渲染** 及 **完全渲染** ，淺層渲染是指這次渲染行為 **只會針對元件根部內容**，而完全渲染則是會將 **所有子元件內容都渲染**，舉例來說假設今天有一個元件架構如下：

```js
//components/MyComponent.vue

<template>
	<div>
		<ChildComponent/>
		<p>cool</p>
	</div>
</template>

//components/ChildComponent.vue
<template>
	<div>
		<SonComponent/>
	</div>
</template>

//components/SonComponent.vue
<template>
	<div class="only-son"></div>
</template>
```

如果我們今天要測試這個元件內是否包含 `only-son` 這個 `className` 

```js

```

> 注意：使用上述兩個方法後，vue 元件預設的生命週期都會依序正常觸發，除了 `beforeDestory`, `destory` 這兩個生命週期要手動設定 `Wrapper.destory()`


## 添加測試使用的狀態值與 `props` 值

```js
it('manipulates state', async () => {
  //設定 state
  await wrapper.setData({ count: 10 })
  //設定 props
  await wrapper.setProps({ foo: 'bar' })
})
```

## 檢查DOM 架構

## 測試元件 $props & $emits