#typescript 

個人目前撰寫的心得：以 typescript 開發，有可讀性好的程式碼（較容易維護），怎麼說？

當你今天以 javascript 撰寫一個函式 plusNumber
```js
//js
function plusNumber(num){
	return 1 + num
}
plusNumber('1') //怎麼是得到"11"?
```

>這裡會產生問題有兩個原因：
>1. 開發者習慣不好/不細心，傳入錯誤的值
>2. javascript 是弱型別語言，對於==非預期傳入型別== 不會報錯，甚至可能會自動幫忙轉型

這兩個問題改為 typescript 都能解決

```ts
function plusNumber(num:number){
	return 1 + num
}
plusNumber("1") 
```

增加了型別系統的檢測，當你試圖傳入**非預期型別**的參數時，就會跳出**錯誤型別提示**（如下圖），並終止後續內容的執行

![[Pasted image 20230222150821.png]]
這樣的做法就能一舉解決上述兩個問題。

keyof
```ts
type User = {
	name:string,
	age:number
}

//只想要 User 的 key 
let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
```


as 
用來說明某個值的型別
```ts
let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
//以上面為例 criteriaKeys 就是一個 Person 的陣列
```
