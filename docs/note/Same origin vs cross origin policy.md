#browser

### 前言

最近自己在透過 express 進行後端開發，寫好第一隻簡易的 API 後，迫不及待想使用前端去進行串接，來玩個前後端拋接球XD ，但串接後 devtool 出現的不是資料，而是那熟悉的報錯、熟悉的錯誤訊息，因此讓我決定好好的再理解一次同源非同源、CORS 相關及衍生問題。

```
Access to XMLHttpRequest at 'htts://*&*!@&*#&!*&#.com/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```


### 同源政策影響什麼？

所謂同源政策，全名為 Same Origin Policy ，是瀏覽器用來規範以程式語言索取資源（`response`）的規則，要符合規則的情況下才能取回資源（`response`），而要符合同源政策必須同時滿足以下三個條件才符合：

![[Pasted image 20221122210415.png]]

1. scheme ：是通訊協定：`http / https`，指被請求來源（`response`）與請求來源（`request`）需使用相同的通訊協定 
2. host：則是網域，指被請求來源（`response`）與請求來源（`request`）的網域相同 
3. port：是通訊埠，指被請求來源（`response`）與請求來源（`request`）相同

> 通訊埠（port）的部分，若沒有額外設定， http 預設是 80 ， https 預設是 443


一起來簡單測試一下自己的同源觀念，假設今天我發出請求（`request`）為: `https://sample.com` ，跟下方哪個是符合同源政策：

```shell
1. http://sample.com
2. https://sameple.com.api
3. https://sample.com:444
```

在公布答案之前讓我們先繼續往下探討。

### 為何不能跨來源呼叫 API 

為何不能跨來源呼叫 API ？在繼續往這個方向深入思考前，我更喜歡 huli 大文章內提到的反向思考：

> 那如果可以跨來源自由呼叫 API 會怎樣？



### 實現跨源請求

如果需要在不同源之間傳輸資料，你應該怎麼做，這套規範就叫做 CORS



### 解決跨源限制

使用 JSONP
設定 CORS 白名單



---

### 參考資料

[# CORS 完全手冊（一）：為什麼會發生 CORS 錯誤？](https://blog.huli.tw/2021/02/19/cors-guide-1/)