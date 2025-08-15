#ls #km





### 配置架構

```js
env
head
- title
- meta
- link
- script
laoding
css
plugins
mode
build
- babel
- vender
- plugins
- extend


```


1.`env` : 專案環境變數

> `env` 在built-time(打包)專案時會被讀取，如果希望在 run-time 讀取可以選擇設定在 `runTime.config.js`



2.`head` : 通常是紀錄關於這個網站的各種資訊

`meta`
1. 設定網站名稱
2. 以各種方式撰寫網站介紹（SEO優化）

`link`
網站 logo 及外部引入資源（ google 字體）在此設定

> `head` 是這個網站的說明，若將外部資源也在此設定，自己理解對提升 SEO 都有幫助 。


`script`
1. 引入 `Polyfill.io` 提供的 cdn：用於支援舊版瀏覽器，以專案內來說，有到使用`Promise`的功能，當使用者使用舊版瀏覽器開啟時，Polyfill 偵測到就會自動轉換 `Promise` 部分的程式碼成舊版瀏覽器可支援的程式碼。
2. 引入谷歌地圖ＡＰＩ

3.`loading` : 客製化 nuxt 內建的 loading 元件樣式
4.`css` : 定義想要全域引用的 css 檔案
5.`build` : 專案打包的設定區域
1. `babel`: 引入 @unisharp 套件使用
2. `plugins`: 使用 `new Webpack.ProvidePlugin` 引入的套件能被全域使用不需額外以`import`,`require`引入，專案引入了： jquery,popper
3. `extend`：針對 webpack 的client,server 手動擴充設定區域，可以以函式或是物件形式撰寫，以下是所做設定：
	1. 在開發模式下(`isDev`)且是 `client-side` 時，使用 pug 的規則去檢查。
	2. 加入 eslint, stylelint 的樣式檢查
