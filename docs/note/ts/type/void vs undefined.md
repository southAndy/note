### void vs undefined

`void` 通常用於函式沒有回傳值的情境

```ts
function log():void{
	console.log('hellow')
}
```


## 概念題

```ts
function test(): void {
  return undefined;
}
console.log(test());
```

void 代表函數**沒有返回值**，但實際上 void 函數默認會返回 undefined。