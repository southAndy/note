
## 設定檔案

```js
columnName:{
	label //表單名稱
	sortEnabled //此欄位是否能被排序
	isFilterable //此欄位是否能被作篩選
	type 
	position //表單內容的位置
	**** unit //想在表單內容添加的文字
	width
	widthPx
	rowNumber
}

```


### 實際案例
#### 何時會用到 unit 欄位 ？
今天有一個需求是：**要對表單的數字內容進行加工** （結果如下）
![[Pasted image 20230213113810.png]]

資料的狀態
```js
//origin data
row.age=28;
//processed data
row.age=28+'歲'
```

接著，資料的傳遞方向會如下（以競賽業績查詢頁面為例）：
```js
//進
customerTable (在這對內容加工) > Table(接收) > SortModal 
//出
Table(進行排序) < sortModal(告訴Table是否要做排序這件事)
```

排序功能（目前只做遞增、遞減）
```js
Array.sorted((a,b)=>{
	//數字比數字
	//文字比文字
})
```

這樣會產生的問題就是：因為你在**讓排序功能壞掉**，因為排序功能的設計不能比混合內容。



**透過設定檔案新增是如何克服這個問題？**
目前能確定，它不會對原始資料產生影響（例如


---

>欲知更多各個頁面的架構，可看筆記 [[bms 的功能]] 


