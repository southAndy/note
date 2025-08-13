---
title: HTTP Request 完整解析
description: HTTP 請求的基本概念與架構解析，包含 Client-Server 模型、HTTP 方法、請求結構（start-line、headers、body）以及常見的請求目的
---

# HTTP Request

## 認識 HTTP Request

這邊要初略認識兩個主要的概念，分別是：

1. 什麼是 HTTP?
2. 它的請求又是什麼

HTTP 全名是 *Hypertext Transfer Protocol* 是所謂 **網頁通訊協定**，用來規範網頁跟伺服器的基本互動規則，它遵循 [Client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) 架構，在這個架構下客戶端（client）跟伺服器（server）互動的模式，固定是由 client 發送請求給 server ，再由 server 回傳回應給 client，**其中由客戶端發出的請求，就是所謂的 HTTP Request。**

![](https://miro.medium.com/v2/resize:fit:1266/format:webp/1*VGO2Stzs2rzpEDX7aHlkrQ.png)

> 圖片來源：https://medium.com/@lokeshchinni123/django-request-and-response-lifecycle-fae8f6467e3d

:::tip
client 不限於瀏覽器，其他像是 postman 等可以發送 request 的工具都可以是 client 。
:::

## 請求要請求什麼？

以作者的自身經驗來說，最常見的請求目的有：

1. 取得資源
2. 提交/修改刪除數據
3. 驗證身份


### 取得資源

用日常生活的例子來說：安迪最近想出國，他習慣坐某一家航空公司的飛機，決定上網查詢這家航空公司的航班資訊，從點擊連結進入航空公司官網到後續取得航班資訊的過程，都是取得資源的操作。

### 提交 / 修改刪除數據

最簡單的例子就是會員資料，當你要註冊某網站會員時，通常會有一個表單要你填寫基本資料，按下送出時就會執行「提交」。而成功註冊為某網站會員後，當你想要修改你的基本資料，例如信箱手機等等，這時就會進行「修改刪除」的操作。

<br/>


看到這邊，不知道你會不會好奇一件事：

:::tip
那伺服器如何知道每次的請求是為了哪個目的？
:::


## 請求的架構

每次發出請求時，都需要提供幾項必要資訊，讓伺服器了解要如何進行回應，我自己會理解為「請求的基本架構」，主要會具備以下幾個部分：

1. start-line
2. http-headers
3. http body (非必需)

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/httpmsgstructure2.png)

> 圖片來源: MDN 

### Start-line

上面圖片紅框的值，分別傳達三個重要的訊息：

1. **POST -> Http method**: 用來告知伺服器這次的行為，如 `GET`(取得資源) , `POST`(提交數據) , `DELETE`(刪除數據) 等等
2. **HTTP -> Target URL**: 向誰發出此次請求，以上面為例就是星宇航空網站的路由
3. **1.1 -> Http version**：上面提過 HTTP 是一個傳輸協定，但隨著網路越複雜與發達，它的傳輸設計也有持續優化

### Http headers

上面了解了 Start-line 的內容後，現在進到 http headers 的部分，

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/http_request_headers3.png)

> 圖片來源: MDN 

1. 


### Http body 

當你要攜帶較為敏感的資料（例如使用者資訊、信用卡資料等）時，就應該要把資料存在 Http body 內，這是為什麼呢？因為




