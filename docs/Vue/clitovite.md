---
title: Vue 專案從 CLI 遷移到 Vite
description: Vue CLI 專案遷移到 Vite 的完整實作過程，包含依賴移除、配置調整、Sass 兼容性處理以及模組引入方式的更新
---

# Vue CLI to Vite


#vue3 #refactor


## 動機

Vue CLI 背後是使用 webpack 進行專案打包，在比較了 [[Vite  & webpack]] 後，自己覺得此專案具備轉為 vite 打包的主要條件：

>此網站皆會以現代化瀏覽器開啟，那使用 vite 作為打包工具能獲得更好的開發體驗

以及一些個人實作計畫上的考量：
1. 計畫為這個專案引入測試，根據官方文件推薦 vue3 開發最推薦使用 vitest，而 vitest 與 vite 有很好的配合。
2. 想練習調整專案打包配置

## 實作記錄

### 移除 CLI 相關依賴

先來檢視 CLI 在 `package.json` 加入哪些依賴

```json
"@vue/cli-plugin-babel": "~4.5.0",
"@vue/cli-plugin-eslint": "~4.5.0",
	|"eslint-plugin-vue": "^7.0.0",
"@vue/cli-plugin-router": "~4.5.0",
"@vue/cli-plugin-vuex": "~4.5.0",
"@vue/cli-service": "~4.5.0",
```
#### @vue/cli-plugin-vuex
會預先自動建立好 /store 下的架構，並且自動引入實例，省下手動建置 Vuex 功能的時間
```js
//store/index.js
import {createStore} from "vuex"

const store = createStore({})
export default store
//main.js
import store from "/store/index.js"

App.use(store)
```

除此之外，它也會確保跟 Vue CLI 的整合沒問題。

#### @vue/cli-plugin-babel
它的目標是 **確保專案對舊版本的間容性**，首先會產生 `.browserslist` 文件，並加入以下設定，這個是預設的配置，能讓兼容多數的瀏覽器。

```json
> 1%
last 2 versions
not dead
```

接著引入 babel ，babel 會根據 `.browserslist` 去決定程式碼編譯策略

```json
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', // 使用 Vue CLI 提供的 Babel 預設配置
  ],
};
```

這份預設配置包含：

1. JavaScript 的轉譯功能（與舊版瀏覽器兼容考量）。
2. Polyfill 的按需加載（通過 core-js）。
3. 支持 Vue 特定語法的轉譯。
#### @vue/cli-plugin-eslint
除了引入 eslint 通用的檢查規範外，自己覺得比較值得注意的是：這個依賴會透過搭配 `eslint-plugin-vue` 實現對於 `.vue` 檔案的各項樣式檢查。

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential', // Vue 文件的基本檢查
    'eslint:recommended',   // 通用的 JavaScript 規範
  ],
  parserOptions: {
    ecmaVersion: 2020,       // 支持 ES2020 語法
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
```
#### @vue/cli-service

是專案建構的核心，它會建立以下服務：
1. **開發環境支持**：提供開發伺服器、文件監視和即時熱更新（HMR）功能。
2. **構建工具整合**：封裝了 Webpack 和相關套件，簡化構建配置。
3. **命令**：支持執行如 serve、build、lint 等命令。
4. **插件系統支持**：允許通過 Vue CLI 套件（如 Babel、ESLint）擴展功能。
5. **零配置默認值**：提供開箱即用的默認配置，對於常見場景無需手動配置。

#### @vue/cli-plugin-router
會預先幫你產生以下內容
```
src/
  router/
    index.js  # 路由配置文件
  views/       # 預設的頁面文件夾
    Home.vue   # 預設的 Home 頁面
    About.vue  # 預設的 About 頁面
```
並且同樣會自動綁定到實例上
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

### 移除 webpack 相關依賴
因為此專案樣式是使用 `scss` 進行編寫，但 webpack 本身並不支援編譯 `.scss` 內容，要透過它的套件 `sass-loader` 來編譯樣式。
```json
"sass-loader": "^8.0.2"
```
但改用 vite 打包後則要另外安裝編譯套件，因此要把這個移除


### 引入 vite 

#### 安裝

```shell
npm i vite / npm i @vitejs/plugin-vue
```

#### 解決 Sass legacy API 問題

因為 vite 是使用 node18，因此需要更新專案的 sass 版本，Dart Sass 從 1.45.0 開始引入了現代 API，並計劃在 2.0.0 中完全移除舊版 JS API。這些更改主要影響了項目如何調用 Dart Sass 進行樣式處理。

需要在 vite 配置加入這段因為 vite 目前預設仍會使用 legacy API 

```js
css: {

preprocessorOptions: {

scss: {api: 'modern', // 指定使用 Modern API
	  },
	},
},
```

接著就跟著終端機提示，調整報錯的樣式。

#### 檢查是否有以 require 方式引入

將專案內剩餘以 `require` 方式引入的內容，以 `import` 方式引入。

![](/img/cli/cli.png)

大功告成！不過現在回首來看當初做的作品真是小巧，非常適合練習呢。

> 如果對於過程有興趣，附上[原始碼連結](https://github.com/southAndy/F2E--week1/commit/810c3c3180109325306b6970efe58ff993f83960)


