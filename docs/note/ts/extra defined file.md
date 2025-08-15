#typescript 


### 為何需要宣告檔案？


### 注意事項

1. 宣告檔案僅用於編譯判斷，編譯時不會產生程式碼。


### 全域模組定義

聲明模組 (declare module) 是為了描述外部引入 JavaScript 模組的結構和型別，幫助編譯器了解如何正確使用該模組，例如我今天有一個統一定義 api 的模組要引入各個元件內使用

**syntax**
```ts
declare module "moduleName":
```

#### 宣告 vue SFC 檔案

SFC 檔案內包含 `template`, `script`, `style` ， typescript 預設是不支援這種類型檔案編譯，所以你直接引入時，會報錯

![[Pasted image 20241204140049.png]]

我們需要透過 [[#全域模組定義]] 來定義元件的型別

```ts
// shim-vue.d.ts
declare module '*.vue' {
import { DefineComponent } from 'vue';
const component: DefineComponent<{}, {}, any>;
export default component;

}
```

#### option / vue2 寫法
要以 `defineComponent` 去製作元件

```vue
<script lang="ts">
	import {defineComponent} from "vue"

	export default defineComponent({
		name:""
	})
</script>
```


### 全域變數定義

```ts
declare const x:string
```

### 全域函式定義

```ts
declare function test(a:string):string;

//在專案內讀取時， typescript 就能辨識

test() // ok
```