#git 

配置層級可以分為：系統層級、使用者層級、專案層級三種

### 檢視配置設定內容

```shell
git config --[層級] --list
```

### 設定指令縮寫

以常用的指令  `git status`  為例，你希望 `status -> st` ，就可以透過此指令調整：

```shell
git config --global alias.[縮寫名稱] ["本來的指令名稱"]
```

以上述的例子來說就是
```shell
git config --global alias.st status
```