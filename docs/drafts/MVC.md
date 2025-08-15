#degsin-partern 
### 概念介紹

其中 MVC 分別代表 M(Model)、V(View)、C(Controller) 。

![mvc](https://i0.wp.com/tw.alphacamp.co/wp-content/uploads/2022/12/60d29cc33f302e939d1d0380______2017-11-28_17.00.25.png?w=800&ssl=1)

1.model：負責處理數據、業務邏輯，通常是跟資料庫交互的主要介面
2.view：負責將從 Model 取得的數據、邏輯，或是動態畫面回傳並顯示
3.controller: 控制器是模型和視圖之間的中介，負責接收用戶的輸入並相應地更新 model 或 view，通常會是處理 http 請求的部分。






### 使用情境

#### 前後端專案拆分情境：
因為畫面是由前端，這時 V 只需將 model 層取得的資料（以各類型的資料格式）回傳，供前端畫面根據資料來進行更新，而不是需要回傳整個動態畫面。

#### 沒分離情境：

可以理解為 SSR 概念，但其實在 CSR 跟 SPA 概念出現前，網站還沒有前後端分離的概念，都是透過 server 回傳去更新畫面。

#### Express 使用 MVC 情境

在 Express 的架構下，  controller 和 model 的功能都被包含在 router 下。

> 若是單純透過撈取 DB 產生 API ，會跳過下方步驟四（透過 model 資料產生對應的畫面）。

![express-mvc](https://i.imgur.com/OuisPl0.png)
> 圖片來源：https://ithelp.ithome.com.tw/articles/10194968


#### 搭配前端 SPA（不建議）

gpt 不建議這麼搭配，原因如下：

1.`SPA 路由設計`：SPA 網站路由是由前端控制，這樣會路由控制如何協調很難，若全部由前端處理，後端的 controller 則顯得沒有功能。
2.`model 功能失效`： MVC 架構的專案，網站邏輯跟資料都是由後端 model 統一管理、操作，但在 SPA 網站前端也有全域資料管理、操作（如 redux,Pinia 等)，這樣會資料存放如何協調可能會更加困難。


### MVC 架構的優點

1.功能切分明確： MVC 架構明確拆分出畫面、邏輯、控制，以 Express 專案架構為例（如下）

![](https://i0.wp.com/tw.alphacamp.co/wp-content/uploads/2022/12/61c2f1c1dd7635143846228b_ia_300000008.png?w=800&ssl=1)

2.程式碼具複用性：在 model 的邏輯可以套用到多個不同的 view。


快速講完了優點，那缺點呢？

### MVC 架構的缺點

1.資料難以追蹤：當專案變大後，主要的功能可能會觸發多個 controller & model ，中間的資料較難追蹤。
2.==可能會有耦合發生==：

---
### 參考資料：

1. [Node.js-Backend見聞錄(10)：關於後端觀念(六)-關於MVC](https://ithelp.ithome.com.tw/articles/10194968)
2. [MVC 架構是什麼？](https://tw.alphacamp.co/blog/mvc-model-view-controller)
