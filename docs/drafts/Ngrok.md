#devtool
### 動機

最近專案在開發 Liff ，在本地開發時，實在不想要每次都要經過 Line 驗證登入步驟，所以決定用 ngrok 來另外開一個 for 開發。

### 開始使用

前面步驟很簡單，去官網完成註冊成為會員後，你有兩種選擇來安裝 ngrok：
1. 指令下載（在這邊官網是使用 homebrew 進行安裝）
```terminal
brew install ngrok/ngrok/ngrok
```

2. 下載壓縮檔案(zip)


新增你的驗證 token


完成上述步驟後，執行

#### 開啟渠道 (tunnel)

官網預設是起一個 port: 80 的渠道
```terminal
ngrok http [your port]
```


