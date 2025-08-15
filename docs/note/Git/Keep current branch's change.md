#git 


總有緊急任務需要你暫停本來手上的任務去執行，這時若要保留當前進度能怎麼做？

**方法一**： `commit` + `reset`

```shell
git commit  //先儲存當前分支進度
git reset <暫存commit的上一個 commit 編號> //其他分支任務結束再退回前一個commit
```
2. `git stash`

會將當前的進度存入一個暫時創造的 commit 內

```shell
git stash 
```

>注意：==Untracked 狀態的檔案預設沒辦法被暫存 ==，需要額外使用 `-u` 參數才能存入。


```shell
git stash -u //連同 untracked 檔案一起暫存
git stash -- file's path //暫存單一檔案
```