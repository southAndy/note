#km 

啟動指令

```shell
pm2 start [application name]
```

### pm2 的功能


### 配置檔案

每個應用程式的配置基本架構如下

```js
{
	name:'application-name',
	script:"/path",
	args:"your-arg"
}
```


啟用配置

```shell
pm2 start config.js
```

加入參數

```shell
pm2 start config.js -- arg1 arg2
```

啟動後會有以下的介面顯示

![[Pasted image 20240417110304.png]]


### 刪除運作程式

```shell
pm2 delete [application-index]
```


### pm2 跟 webpack 的差異？

pm2 常用於監控 nodejs 的運行狀態（像是 CPU、記憶體使用狀況等），而 webpack 比較偏向是處理前端的程式檔案及靜態資源的打包、壓縮這類。