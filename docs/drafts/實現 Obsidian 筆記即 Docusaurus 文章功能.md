
#ai 

### 實作動機

工程師技術學不完，所以相信每個工程師都有不同的記錄方法，以我自己來說就是使用 Obsidian 做筆記，不定期的將所學內容更新到個人部落格上，一直以來我都是手動做這事，直到最近看了一篇[文章](https://alex-flow-state.netlify.app/pkm/obs-docusau-cowork#%E7%B7%A3%E7%94%B1)，開始回想自己每次發表新的文章要經過的步驟：

1. 打開 obsidian 並複製要發布文章
2. 打開 docusarus 專案，在 /docs 內新增對應的 `.md` 
3. 把該文章的圖片手動複製到 docusarus 專案內的 `/static/` 路徑下
4. 修改 obsidian 專屬的連結用法 `[[]]` 、修改圖片連結 `![]()` ，手動調整成 docusarus 支援的格式
5. 手動調整文章新增 docusaurus 支援文章資訊格式

```
---
title: xxx
describition: sdad123xfad01 ...
---
```

6. 執行部署新增此次變更

人家說工程師時間很寶貴（也可說很懶），像是 **這種重複性很高的事情**，不就很適合寫程式自動化？ **我的目標是流程全自動化、或是不用為了例行事項打開部落格專案**。


### 可透過 Obsidian 解決的部分

#### 1.將 Docusaurus 專案設為 Obsidian 筆記的 valut 

讓部落格專案能直接以 Obsidian 開啟，直接將技術筆記、想法寫在專案中，**省去後續在筆記軟體（例如 Obsidian） 內容搬遷步驟。** 我是這樣調整專案架構的


本來預設 Docusarus 的專案文章打包架構

```js
| - docs //打包、呈現這個架構下的 .md 內容
```

調整後

```js
| - docs
	- published //要發布上部落格的文章內容，可以需求再開子層資料夾
	- drafts //靈感、想到想研究的事情
	- notes //以卡片盒整理的筆記，但是還沒要發布
	- resource //我有興趣的外部資源存放處
```

記得去調整一下 Docusaurus 的配置檔案

```js
//docusaurus.config.js
docs: {
	path: "docs/published", // 只打包 published 資料夾
},
```

這樣我就能維持本來寫筆記的方式與習慣，

#### 2.解決手動搬移對應筆記所需圖片問題

在 Obsidian 調整圖片存放預設路徑，配合 Docusarus 的特性，預設為存放 `/static` 內，這樣不但不再需要手動搬遷圖片，甚至筆記的圖片能直接被打包。

![[Pasted image 20250815133123.png]]

#### 3.調整筆記超連結設定

在 Obsidian 可以透過 `[[]]`  快速連結不同篇的文章，但是 Docusaurus 預設無法編譯這個連結格式，它支援的常見的 markdown 格式

```
[linkName](path)
```

所以我們可透過設定調整 Obsidian 超連結格式

### 實現自動化部署

我的部落格是部署於 Github Page 上，能透過在專案新增 `.github/workflow` 新增 Github Action **設定當特定分支有新的變更時要觸發的行為**。

我設定簡單的執行內容：當 main 分支有新的變更時，執行專案部署指令 ([參考原始碼]())，這樣就只剩下自動推送變更的部分了。這部分你可以透過搭配 Obsidian plugins Git 來實現。



### 目前的限制跟一些 QA的部分

- 目前設計會讓許多未上傳的筆記圖片一同被打包上傳
- 沒辦法針對不同文章客製化調整 git commit 內容
- 產生的 `.obsidian` 內容可以根據自己考量決定要不要上傳，我是覺得沒差所以有上傳
- 

