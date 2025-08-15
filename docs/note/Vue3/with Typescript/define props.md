
可以分為 *runtime declaration* , *type-based declaration* ，這幾項定義方法不能混用

一般來說，為了避免錯誤的資料內容傳入子層，會透過 typescript 近一步明確定義型別，常見如使用 [[泛型約束]] 來實現。

```ts
// runtime
const props = defineProps({
	name:{type:String,required:true} 
})
//type-based
const props = defineProps<{name:string}>()

//type-based
type Props{
	name:string
}

const props = defineProps<Props>()

```

兩種定義方式最大的差異在於 **型別是由誰檢查？** 
1. runtime ：將型別檢查交給 Vue 進行檢查，所以在 `name` 實際上仍會是 `any` 型別，除非手動追加型別定義
2. type-based：將型別檢查交給 typescript 進行

如果兩邊都檢查怎麼辦？使用 `PropType` 來解決，若今天單純採用 runtime 定義方式，當遇到資料結構較為複雜的情境，例如 **泛型、陣列、自訂物件等複雜型別**時，Typescript 無法進一步的準確規範內部的資料型別：

```ts
const props = defineProps({
	dataArray:{ type:Array,required:true }, //type = > any[]
	dataObj:{ type:bject,required:true }, //type => any{}
})

// 但是你希望限制陣列內的資料型別限制為 string
const props = defineProps({
	data:{ type: Array as PropType<string[]>,required:true}
})
```

> reference: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

### 增加預設值

如果是使用 type-based 的定義方法，要幫 `props`  新增預設值方法如下：

```ts
type Props{
	name:string
}

//v3.4 ^ 
const { name='andy' } = defineProps<Props>()

//v.34 below
const props = withDefault(defineProps<Props>(),{
	name:'andy'
})
```

## 定義 emits 
在 `setup` 下同樣分為 *runtime declaration* , *type-based declaration* 定義方式

```ts
//runtime
const emits = defineEmits(['update','delete'])
})
//type-based
const emits = defineEmits({

})


```