#typescript 

常用於定義 `Object`, `Class` 這類巢狀資料，更清楚的描述架構內型別

```ts
interface Name{
	key:type;
}
```

### 屬性設定

架構內的屬性，可以根據需求調整：

1. 設定為可選屬性 `?`：表示此屬性非必填的
2. 任意屬性 `any`：可自由填入任意名稱 key 值
3. 唯讀屬性 `readonly`：初始定義數值後，就不可再更改

## 特性
`interface`  是靜態定義架構，也就是被讀取後是不能調整的，所以假設你今天定義了一個 `Person` 型別，並且將它應用於變數上，那這個變數會有以下的限制

```ts
interface Person{
	name:string,
	age:number
}

//x
let andy:Person = {
	name:'andy',
}

//x:can't add new attribute into this interface
andy.interested = [1,2]

```



---




