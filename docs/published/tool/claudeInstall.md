---
title: Claude Code 原生安裝 vs NPM 全域安裝
description: 解析為何 Claude Code 官方推薦原生安裝方式，比較 NPM 全域下載機制的優缺點，以及原生安裝如何解決版本耦合問題
---

# 為何 Claude 官方推薦以原生方式安裝？ 



最初我是以 npm 全域下載方式安裝 claude code

```shell
npm install -g @anthropic-ai/claude-code
```

某天我要開發的時候，發現指令突然失效，經過一番排查得知：**原來是官方逐步推行的「原生安裝/本機安裝」遷移**。

部分用戶的 Claude code 套件位置自動被遷移了，但套件 PATH （腳本讀取路徑）還是指向舊的路徑，因此指令才會失效。


那為何官方推薦以原生方式下載，我也很好奇，所以讓我試著分別介紹

1. NPM 下載機制及其優缺點
2. 原生下載機制


### NPM 全域下載套件機制

**「全域」其實指的是「橫跨不同檔案夾」，而不是「橫跨不同版本」**，意思就是在假設你在 Node v18 安裝了 Typescript 套件，當你同樣以 Node v18 開啟 A,B,C 專案，都能使用這個套件，因為這個套件安裝在 v18 的路徑下。

為了驗證這個機制，我在 v18.20.4 (預設 Node 版本)以全域方式安裝 Typescript 後，切換到 v20.x 後會發現這個套件不存在

![](/img/claudeinstall/ts.png)

因為這個套件的安裝路徑是在 v18.20.4 下底下，以圖示來解釋這個概念就是如下圖

![](/img/claudeinstall/npm-nvm-global-diagram-en.png)

> 圖片繪製 by GPT

#### 好處

**版本隔離**：不同 Node 版本各自有一份全域套件，避免 CLI 與相依版本衝突。

**升級/切換安全**：切到別板的 Node 不會破壞原本版本下的全域工具，若要把舊版的全域套件搬到新版本可用：

```shell
//1
nvm install --reinstall-packages-from=<old> 

//2
nvm reinstall-packages <old>
```

#### 壞處

**重複安裝**：每個 Node 版本都要各自安裝同一批全域 CLI，佔空間又要記得搬。

**指令跟著版本走**：換到另一個 Node 版本後，先前 -g 裝的指令可能「消失」，因為 $PATH 指到另一個 `{prefix}/bin`。

### 改以原生方式下載

透過原生方式下載的套件，位置預設都是

```
/.local/bin/@PKG
```

所以改成以原生方式下載有以下的好處：

- 統一套件讀取路徑、不會跟 Node 版本耦合（在某個 Node 版本沒裝 Claude )
- 解決不同版本重複下載的問題 

但是要記得在終端機設定中將這個路徑加入 $PATH 配置內，之後才掃描得到

```shell
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```