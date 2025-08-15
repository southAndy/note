
#bms 

## 基本介紹

### bms 系統的用戶類型
提供磊山簽約的業務員一套操作系統，可以做的事情如：
1. 查詢自身及旗下的業績狀態（透過檢視保單）
2. 客戶資訊查詢（看看客戶簽的保單、最近是否要生日）


##  bms 專案中的 GA 應用

在此以 GA4 建置為例

### 引入專案

在 Vue 要引入在全域引入各種套件，都是透過 `.use` 進行掛載，VueGtag 也是相同的做法

```js
createApp(App).use(VueGtag,config)
```

那 `config` 要做哪些設定？

```js
{
	property:[{id:'專案 GA 追蹤代碼'}]
}
```

> 追蹤代碼在哪？ 
> 管理 > 資料串流 > 評估 ID （就是你要添加入專案內的GA 代碼


完成了上述的步驟，VueGtag 就會開始自動追蹤頁面，你可以透過 GA 控制台來查看追蹤數據。

<br>

### 操作事件

vuegtag 套件有提供很多的方法可以使用

```js
this.$gtag.set() //設置用戶的身份訊息
this.$gtag.event() //執行自定義的事件監測
```

在我們的專案使用的是 `this.$gtag.event()` 來監測自定義的行為（事件），主要做的事情是：
> 透過 `this.$route` 紀錄當前為哪個頁面，再為不同的功能加上標籤，並紀錄會產生的行為

例如像是下面的頁面：
![[Pasted image 20230529151207.png]]

寫法架構就是：
```js
this.$gtag.event(action,{
	event_category:'',
	event_label:'',
})
```