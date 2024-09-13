:::warning
這邊是以 webpack4 為主的筆記
:::

### 前言

 webpack 每個部分內容如何打包都是需要在 `webpack.config.js` 中設定，雖然到了 webpack4 後則非必要（原因如下），但難保出現一些情境是需要透過手動調整配置去解決，這時還是要回頭去理解它的配置內容。

:::tip
Webpack4 內建了預設的打包設定，讓你可以不需要手動撰寫 `webpack.config.js` 也可以進行打包。
:::

在這邊會透過 `webpack.config.js` 去打包一個基本架構的 vue 專案（下方），在實踐過程順便介紹各個配置及功能
```
- public
  - index.html
- src
| main.js
| App.vue
```

### 實作 vue 打包

首先我們要將 webpack 安裝進專案內

```shell
npm i webpack webpack-cli
```
直接執行打包的指令
```shell
npx webpack
```
迎來第一個錯誤（如下圖）

![](/img/webpack/webpack-entry.png)

這邊可以簡單區分有一個 warn, error 層級的訊息，先說 warn 的部分：

**是 webpack 提示開發者應於配置檔案新增 `mode` 值**，原因是不同 `mode` 會對應不同的打包設定，詳細差異可看[官網](https://v4.webpack.js.org/configuration/mode/)。

所以我們建立一個 `webpack.config.js`
```js
module.exports = {
  mode:"production", //還有 'development' , 'none' 可以選擇
}
```

接著進到 error 的部分：

這是 webpack 找不到所謂的進入點，更白話文一點就是：不知道從哪個檔案開始打包，上面有說過 webpack4 是有預設設定的，這邊仍然報錯是因為沒偵測到預設的進入點 (`./src/index.js`)，但 vue 架構下初始進入點是 `main.js`，我們可以透過手動調整 `entry` 去改變進入點。

```js
//webpack.config.js

module.exports = {
  mode:"production",
  entry:"./src/main.js"
}
```
重新執行打包，接著再次出現報錯

![](/img/webpack/webpack-loader.png)

仔細檢視訊息，這次的問題是出在打包 `App.vue` ，原因是 webpack 本身只具備編譯打包 js 功能，並不知道如何編譯 `.vue` 檔案，或是其餘像是 css,assets內的內容。這時候就是 webpack 另一個重要配置 `loader` 的使用時機，它的功能就是：設定打包檔案符合條件時要被怎麼處理，vue 官方提供 vue-loader 掃描 `.vue` 檔案(SFC)。

```js
module.exports = {
  mode:"production",
  entry:"./src/main.js",
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  }
}
```
但這樣還是無法成功編譯，因為 `.vue` 檔案內有三個區域定義不同內容，若是全部都使用相同 loader 處理肯定會出錯。根據 vue-loader 文件內容，這個問題可透過在 webpack 的 `plugins` 配置中加入 `VueLoaderPlugin`，它的功能就是告訴 webpack 不同區域使用哪個 loader（如下圖）

![](/img/webpack/webpack-plugins.png)



所以我們調整後的配置檔案如下：

```js
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode:"production",
  entry:"./src/main.js",
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      // 處理專案內的 js 內容，透過 VueLoaderPlugin 協助，它也會處理 .vue 內 script 的內容
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/ //不去影響第三方內部的程式碼
      },
      // 處理專案內的 .css 內容，透過 VueLoaderPlugin 協助，它也會處理 .vue 內 style 的內容
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[new VueLoaderPlugin()]
}
```
最後，不論你要在本地端透過 webpack-dev-server 運行，或是真正的打包，都需要將掛載 vue 的 html 架構打包起來，否則畫面會是一片空白。在 webpack 通常會使用 `html-webpack-plugin` 來自動產生。

```js
const { VueLoaderPlugin } = require("vue-loader");
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"production",
  entry:"./src/main.js",
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      // 處理專案內的 js 內容，透過 VueLoaderPlugin 協助，它也會處理 .vue 內 script 的內容
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/ //不去影響第三方內部的程式碼
      },
      // 處理專案內的 .css 內容，透過 VueLoaderPlugin 協助，它也會處理 .vue 內 style 的內容
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[new VueLoaderPlugin()]
}
```
這樣就大功告成了！

### 小結

讓我們來複習上面提到的打包配置概念

1. `entry`: 設定 webpack 從哪個檔案開始打包（必須為 `.js` ）
2. `module`:設定不同檔案類型要如何被編譯
3. `plugins`:功能類似 `module`，但不限於編譯打包功能，還有更多（會在下篇介紹）
4. `mode`: 讓 webpack 可以根據不同模式載入一些初始內容

---

### 參考資料

1. [Webpack 4.x 常用匯總配置](https://github.com/wangfupeng1988/read-notes/blob/master/video/webpack4.md)
2. [Mode](https://v4.webpack.js.org/configuration/mode/)
3. [Vue-loader](https://vue-loader.vuejs.org/guide/#manual-setup)