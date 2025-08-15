### any vs unknow

兩者同樣都可以接收任何類型的值，但是 `unknow` 不能直接使用，必須先做類型檢查，固安全性較高

```ts
let a: any = "hello";
let b: unknown = "hello"; 

console.log(a.toUpperCase());
console.log(b.toUpperCase()); //error
```

`unknow` 要先經過類型檢查才能使用

```ts
if(tyeof b === 'string') b.toUpperCase()
```

因此像是 API 回傳資料，若是無法給予回傳值明確的型別定義，至少要選擇用 `unknow` 去定義比較安全，避免產生錯誤型別的操作

```ts
axios.get(url).then((res)=>{
	return res.data as unknow //because not sure response data type
})
