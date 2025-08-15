#webpack 

## 預設模式
它預設的拆分行為有以下：
1. 新的模塊**可被共享** 或是 它是 node_module 內的模組
2. 新的模塊本來打包的體積會大於 30 kb (在使用壓縮前的尺寸)
3. 最多可並行加載 5 個模塊


### 配置設定
預設模式下的配置檔案如下：
```js
```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

下面來簡單講解一下：

#### chunks: 決定模塊是否會被獨立打包
有三種參數分別是：
1. 'all'：不論同步、非同步的資源都會獨立被打包
2. 'async'：需要**非同步**載入的資源，會被獨立分出來打包
```js
```
1. 'inital'

#### min/max Size: 每個模塊的最小及最大的尺寸設定
#### cacheGroups: 

---
ref:
https://awdr74100.github.io/2020-04-06-webpack-splitchunksplugin/

https://ithelp.ithome.com.tw/articles/10251621
https://v4.webpack.js.org/plugins/split-chunks-plugin/