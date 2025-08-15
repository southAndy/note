#ls 


## 目錄架構

```
- config（各頁面的配置）
- api（專案使用的 ＡＰＩ 列表）
- controllers
- generator
- public 
	- images (放置圖檔)
- routes（撰寫對應路由處理）
- utils（專案共用方法）
```

## 環境

1. prettier 控制排版
2. .nvmrc 控制 node 版本，目前是用 v18.12.1
3. .env 儲存重要的資訊，如

## 路由

目前僅有 `'/menu'`  以及 `/message` 兩條路由，功能會於下文細部講解


## 功能 ＆ 筆記
### 關於 public 內的 images

會發現內部的檔案**都無法直接開啟**，因為這些都是二進位格式的圖檔

![[Pasted image 20240104170229.png]]

因為 line bot 需要轉換 **二進位格式的圖檔**，而那些不同數值則是代表各尺寸，也同樣是 line-bot 硬性需要的。

---

> 備註：此文為 2024 年 1 月版本的筆記



