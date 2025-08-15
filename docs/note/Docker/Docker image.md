#docker 

既然 docker 主打容器化技術，那容器要怎麼產生？**答案就是透過讀取映像檔**


### Docker image 的構成

以下使用 GPT 產生的表格簡單說明

![[Pasted image 20250514150307.png]]

#### Base image

base image 指的就是執行環境，所謂的執行環境就是代表 **後續的動作都建構在這個架構上去執行**，以前端來說不論是原生 Javascript 或是前端框架的專案，都需要基於 Node 這個編譯下。

所以可以說 **base image 是建立 docker image 的基底。**


> 以下是 GPT 整理常見的 base image 類型

![[Pasted image 20250514151106.png]]

#### 建構語法

有了基礎環境後，以下圖為例就是 node stable version 的執行環境

```dockerfile
FROM node:lts
```

接著可以根據專案的需求開始追加功能，例如：這是一個前端專案，需要在容器內下載前端開發所需的套件。docker 提供建構語法，用來告知 docker 當創建 image 過程，有看到這些操作語法就要去執行

例如：我們需要複製專案的 package.json ，並且執行 `npm install` 去安裝所需的套件

```dockerfile
COPY package.json
RUN npm install
```

到目前為止，你就已經產生一個最基本的前端專案 docker image 。
