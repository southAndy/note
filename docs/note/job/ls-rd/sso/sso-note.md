

### 如何運行專案

下載完專案後，要在本地端新增兩個檔案（如截圖）

![[Pasted image 20230303122558.png]]
>跟同事、主管詢問取得

接著執行以下程式碼來運行專案，會透過 [[gulp]] 去執行多項任務。

```terminal
npm start
```

---

## 架構

使用 koa.js 作為伺服器，搭配 oidc-provider 身份驗證套件，達到**不同的註冊流程可各自產生的觸發事件**

```js
var provider = require('odic-provider');
var Router = require('koa-router')


provider.initilize().then(()=>{
	router.get('/interaction/:grant',()=>{
		//...
	})
	router.post('/login',()=>{
		//登錄步驟會觸發的事件
	})
})
```

****
### 設定通過名單 

```js
client.js
```

設定哪些要求可以通過的

---

### 功能

作為各專案的**驗證身份中樞**，提供的服務包括：

1. 登入
2. 重設密碼
3. 修改信箱



