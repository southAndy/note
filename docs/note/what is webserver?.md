#webserver 
### 什麼是 [[web-server]]?
常見的像是 **Nginx**,**Apache**，能讓本地端產生一個 port ，讓別人可以透過IP建立連線（發請求）。

### web-server / application-server?
*Nodejs* 像是 [[Express]], *Golang*, *python* 都能在本地端產生一個 [[port]]，讓客戶端(ex:browser)可以透過發 **request** 向伺服器拿資源，以上說明感覺不就是產生一個 web-server？
這樣產生的 server 細分起來，其實是所謂的 [[application-server]]，那兩者差異在哪？

| 類型 | web-server                | application-server |
|:----:| ------------------------- |:------------------:|
| 特色 | 1.處理靜態資源 / 2.**負載平衡 (load-balance)**（動態資源需要透過Application-server來處理，再回傳給web-server） | 靜態/動態解析皆可  |
| 特色 | Text                      |        Text        |

