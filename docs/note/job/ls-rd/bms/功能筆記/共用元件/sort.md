

### 功能畫面
![[Pasted image 20230209122042.png]]

### 可傳入參數
此元件可使用的 `props` 選項
```
columns:表頭的設定檔
sort:排列的方法（遞增，遞減）
sortBy:套用排列方法的欄位
disabled:判斷是否能點擊此功能
```

### 元件功能
```js
dropdownSortByOptions()
**** 若傳入設定檔欄位的sortEnabled為true > 將欄位格式調整為 dropdown元件可用的樣子

---

sortByValue:回傳使用者輸入值
sortValue:回傳使用者輸入值

```


### 排列篩選發生的位置
排列表單內容順序的行為是在Table元件內處理
```js
showTableData(){
 ///....
 if(sortValue!=='normal'){
	 getSortedData()
 }
}
```
