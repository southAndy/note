
#webpack 

### 預期學習內容
- [x] Webpack 用來做什麼？
- [x] 配置檔內常見屬性的意義

---

## Webpack 做什麼？

webpack 是一個靜態模組打包工具，它的功用是把前端開發時用到的諸多靜態資源（如JavaScript、CSS 和圖片等檔案）進行**打包**。


### 為何要做打包這件事？



## 核心名詞
*webpack* 要知道的幾個概念(*core-concept*)：

1. `entry`
2. `output`
3. `loaders`
4. `plugins`
5. `mode`
6. `browser-compatibility`



### Entry

引入自[官方文件](https://webpack.js.org/concepts)
>An **entry point** indicates which module webpack should use to begin building out its internal [dependency graph](https://webpack.js.org/concepts/dependency-graph/).

入口點(*entry point*) 指示 *webpack* 以哪個檔案作為打包( *bundle* )的位置。你可以透過 `entry` 這個屬性去自定義打包路徑。它分為*單一路徑* 跟*多路徑*

### 單一路徑設定：
1. `string`
2. `array`
3. `object` (**也能設定多路徑**)

```js
module.exports = {
  //obj
  entry: { main: './path/to/my/entry/file.js',},
  //string
  entry:'/src/index.js',
  //array
  entry:['./src/index.js',]
};
```
>**注意**：當你沒有設定時，預設產生的打包路徑為：`./src/index.js`

**想知道嗎？**
什麼情境適用單一路徑、什麼情境適用多路徑




###  Output

**決定打包(bundle)內容的輸出位置**，以及如何命名被打包的檔案們，你可以透過 `output` 屬性去客製化內容。

`webpack.config.js`

```js
const path = require('path');

module.export = {
	entry:'',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'',
	}
}
```
>**注意**：
>1. 當你沒有設定時，預設輸出路徑為：`/dist/main.js`

---
## Loader
要知道 #webpack 本身只能編譯 JavaScript 跟 JSON 檔案類型，但在後面的筆記你會發現：連 *css* , *png/jpg* 等等都被打包，這就是透過 *loader* 來達成。

*loader* 會把這些檔案轉換為**有效的模組檔案** 以方便被裝入打包，你可透過 `loader` 去自定義，它內部包含兩種屬性：
1. `test` ：符合 `test` 內容的檔案會被丟入轉換的 *loader*
2. `use`：實際轉換的 *loader* ，常見的有*babel-loader* , *sass-loader*

```js
const path = require('path');

module.export = {
	entry:'',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'',
	},
	loader:[
	{
	test:/\$/g,
	use:'babel-loader'
		}
	]
}
```
>**注意**
>
> #webpack 的其中一個特色能將任何透過 `import` 方式傳入的內容打包，但其他打包工具不一定做得到。

---

## Plugins
https://webpack.js.org/concepts

---

## Mode
透過`mode`參數去使用 *webpack* 內建的==環境參數==，有 `production`,`development`,`none`

> **production / development / none** 代表意思：
> 

```js
const path = require('path');

module.export = {
	entry:'',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'',
	},
	loader:[
	{
	test:/\$/g,
	use:'babel-loader'
		}
	],
	mode:'development',
}
```
>預設值為 `production`
---

### 參考資料:

1. [淺談  Bundle、與Vue-CLI](https://medium.com/the-messiah-code-%E7%A5%9E%E7%A2%BC%E6%8A%80%E8%A1%93%E5%85%B1%E7%AD%86/%E6%B7%BA%E8%AB%87-bundle-webpack%E8%88%87vue-cli-c2eda4a3cda3)
