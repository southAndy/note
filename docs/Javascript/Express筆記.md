# [Nodejs] Expressjs basic


### 自動讀取靜態資源

```js
app.use(express.static("public"));
```


### 建立伺服器

要建立一個伺服器，最基本要給予一個 _PORT_ ，_讓人可以透過這個_ PORT 來訪問

```js
//app.js
const express = require("express");
const app = express();
const PORT = 8000;
app.listen(port);
```

> PORT 的值也有限制，像是
>
> 1.  0 - 1023 是所謂的 _well-known-ports_ ，已經分配給特定的大眾服務
> 2.  1024 - 49151 則是 _register-ports_ ，通常用於軟體應用程式使用

### 建立路由

假設今天網站想新增一個：關於我們頁面，我們為這個頁面取名為: `/about`

```js
app.get("/about");
```

#### 動態路由

在路由加入`:` 來產生動態參數

```javascript!
app.get("/:product",(req,res)=>{})
```

參數值可以透過 reqeust 物件中取得

```js
app.get("/:product", (req, res) => {
  //取得動態參數product
  let { product } = req.params;
  res.send("string" + product);
});
```

HTTP 實例有提供多種的方法，最常見的像是 CRUD：get, post, delete, update 等方法，express 可以讓你針對不同類型的請求去設定不同的響應行為。

先知道這邊指的 request , response 分別代表客戶端的請求及伺服器端的回應

```javascript!
app.get("routeName",(request,response)=>{

})
```

### 路由處理器(routing handler)

用來定義觸發路由的對應行為，例如：向 `https://test/user/andy` 發出請求

```js
app.use("/user", (req, res, next) => {
  //做一些事情
});
```

但假設處理器不只一個，例如：一般來說，使用者登入流程假設分別要經過：

1. 檢查是否有此人存在
2. 密碼是否過期
3. 取得驗證碼

這時就可以以陣列的方式來裝多個處理器

```js
app.use("/user", [checkPerson, checkPassword, getID]);
```

> 注意：會依照陣列索引值順序來執行

---

### 參考資料：

1. https://expressjs.com/zh-tw/api.html
