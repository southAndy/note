#webserver 

### 認識 nginx

nginx 是常見的 [[web-server]] ，讓開發者能在本地端（local）啟動一個臨時伺服器，去實現一些行為跟保護。

> 什麼是 web-server?

---
### 配置

下面是常見的設定內容：

```nginx
server{
    listen
    server_name 
    client_max_body_size
    location
}
```

1. listen ：設定被監測的號碼 ，當 port 跟 server_name 都符合時，會執行配置檔的內容。
2. server_name： 設定可執行 server 內容的  [[domain]] 來源（`request`）名稱，其他都會被擋掉。
3. location：設定遇到指定的 path 要觸發的行為，內部可以加的選項有：
	1.proxy_pass ：proxy 翻譯為中文是指「代理」，這邊的代理行為就是替伺服器帶資料給客戶端(client-side)，**隱藏真正伺服器位置**，避免被攻擊。假設今天你的設定如下：
	```nginx
	location /api/ {
		proxy_pass http://localhost:3001
	}
	```
	當你今天發出的請求如下
	```
	/api/
	```
	通過 Nginx 代理會幫你轉換為
	```
	//localhost:3001
	```

	2.add_header：加入對這個 response 的描述（常見如 `Access-Control-Allow-Origin` etc..)

```nginx
location / path {
    return 200;
    proxy_pass [path];
    add_header Access-Control-Allow-Origin *;
}
```
4. client_max_body_size：設定傳給後端的資料大小 **單位 m -> mb**
5. proxy_read_timeout：設定等待後端伺服器回應的時間長度（超過就會強制終止）

---
## 指令 

### 檢測配置是否更新成功
當你在 nginx 內加入新的設定後，可以透過下方指令檢查新的設定是否順利運行
```shell
nginx -t
```

如果沒問題會顯示下方訊息

### 檢視當前版本

```shell
nginx -V
```



## 專案加入本地配置

找到本機 hosts file

> 路徑通常為 `private/etc/`


加入配置

```shell
127.0.0.1 [nginx config]
```

撰寫你的 ngnix 配置，配置內容參考文件


---

## 參考資料

>https://ithelp.ithome.com.tw/articles/10280441
>https://zh.wikipedia.org/zh-tw/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86
>https://shubo.io/what-is-cors/#access-control-allow-origin