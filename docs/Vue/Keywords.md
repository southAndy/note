# Vue keywords

:::info
這邊以 Vue 3 為主， Vue 2 的寫法會有不同，請參考 Vue 2 的文件。
:::

### 關於 computed

**computed vs methods**

假設今天有兩個 state `firstName` 和 `lastName`，想計算出 `fullName`，以這個情境來說，不論是 `computed` 或是 `methods` 都可以實作，那麼要怎麼決定使用哪個？

```js
const firstName = ref('John');
const lastName = ref('Doe');

// 使用 computed
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

// 使用 methods
function getFullName() {
    return `${firstName.value} ${lastName.value}`;
}
```
`computed` 內建 cache 功能，如果與它相關的 dependencies 沒有改變，不會重新執行，`methods` 則是不論相關的 dependencies 有沒有改變，每次都會重新執行，**基於效能考量，此情境使用 `computed` 會比使用 `methods` 更好**。

那麼在什麼情境下不該使用 `computed` 呢？這時候就可以提及 `computed` 的限制。根據文件說明你不可在 `computed` 內：

1. 操作 DOM
2. 進行非同步(async)操作

所以簡單來說，你的功能會牽涉到上述的內容，就不該使用 `computed`。


**writable computed**

`computed` 預設是唯讀的


### v-bind

如果今天元素有很多屬性要綁定，官方有提及以下更簡潔的寫法

```js
// before
<template>
  <div>
    <img src="https://example.com/image.jpg" alt="Example Image" class="w-20 h-20" />
  </div>
</template>

// after
<template>
  <div>
    <img v-bind="imageAttrs" />
  </div>
</template>

<script setup>
const imageProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Example Image',
    class: 'w-20 h-20'
}
</script>
```
除此之外，它也能被用來動態調整 class 的內容

### watch

若你希望在特定 dependencies 改變時，自動執行非同步請求/ DOM 操作這類行為，這時就可以使用 `watch`

**監聽資料類型**

**基本用法**

```js
const count = ref(0);

// 監聽單一 dependencies
watch(count, (newVal, oldVal) => {
    console.log(`count changed from ${oldVal} to ${newVal}`);
});

// 同時監聽多個 dependencies
watch([count, doubleCount], (oldCount,newCount) => {
    console.log(`count changed from ${oldCount} to ${newCount}`);
});
```
**配置**

在 `watch` 的第三個參數，可以傳入一個物件，這個物件內可以決定以下幾件事：

1. `immediate: true`：是否要立即執行（預設是 false）
2. `deep: true`：是否要監聽深層的 reactive 物件
3. `flush: 'post'`：是否要監聽多個 dependencies
4. `once:true` :此 watch 是否只執行一次 (v3.4 以上)

```js
watch(count, (newVal, oldVal) => {
    console.log(`count changed from ${oldVal} to ${newVal}`);
}, { immediate: true, deep: true });
```

這邊想特別討論的是 `deep:true` 的使用時機，它看似很方便，但會導致效能問題，**因為它運作原理是遞迴遍歷物件的所有屬性**，所以會消耗大量記憶體。

1. 避免在大型資料結構中使用，若真的需要監測每個屬性改變，考慮使用 `watchEffect`
2. 若是只有部分屬性需要，同樣可以考慮使用 `watchEffect` 或是拆出個別屬性監聽


### watchEffect

它跟 `watch` 有兩個很主要的差異：

1. `watchEffect` 會立刻執行，而 `watch` 不會
2. `watchEffect` 內部每個 dependencies 改變時都會觸發 callback，而 `watch` 僅有指定的 dependencies 改變時才會觸發


```js
const x = ref(0);
const y = ref(0);


watchEffect(() => {
    // 只要 x 或 y 改變，都會重新執行
    console.log(x.value);
    console.log(y.value);
});

// 等同於
watch(x, (newVal, oldVal) => {
    console.log(`x changed from ${oldVal} to ${newVal}`);
});

watch(y, (newVal, oldVal) => {
    console.log(`y changed from ${oldVal} to ${newVal}`);
});
```

**適用情境**

1. 需要監聽多個 dependencies，且需要立即執行
2. 初次載入畫面所需資料


---

### 參考資料

[computed](https://vuejs.org/guide/essentials/computed.html#best-practices)
[watch](https://vuejs.org/guide/essentials/watchers.html#watchers)

