---
title: 比較 merge , rebase 兩種合併方式
description: 合併分支幾乎是團隊開發上，必定會用到的指令，尤其在現在常見的 scrum 開發流
tags:
  - git
---
最近久違地面試被問了這個經典的 Git 問題，發現自己沒有那麼熟悉，所以就來複習一下。


## 語法介紹

假設今天的情境是

```
從 develop 分支開出功能分支 feature/user-auth 開發功能
```

當你完成功能要合併回 develop 時，你可以決定使用 merge / rebase 完成這件事：

```
| * commit def456 Add login validation
| * commit ghi789 Implement user registration  
|/
* commit jkl012 Fix database connection issue
```
### merge

使用 merge 合併：

**合併的分支會產生一個 commit 記錄合併**，從線圖上看會明確留下功能合併軌跡（如下圖）

```
* commit abc123 (develop) Merge pull request #42 from feature/user-auth
|\  
| * commit def456 Add login validation
| * commit ghi789 Implement user registration  
|/
* commit jkl012 Fix database connection issue
```

### rebase

先來熟悉一下 rebase 的機制，以下是基本語法

```shell
git rebase [target-branch]
```

當你執行之後：

1. 比對當前分支與目標分支的 commit 差異
2. 找到 [target_branch] 分支最新的 commit 作為接點 
3. **在接點之後創造相同內容的新 commit，原來的 commit 失去引用並等待清理**


```
* commit def456 Add login validation 
* commit ghi789 Implement user registration 
* commit jkl012 Fix database connection issue
```

特別注意第 3 點，新的 commit 是逐一創造的，舉例來說

```
複製 ghi789 的內容，在 main 產生新的 commit
|(沒衝突完成)
複製 def456 的內容，在 main 產生新的 commit
```

所以合併的過程 commit 有衝突，開發者也會需要逐一的去解決後才能繼續進行合併。


## 小結

使用 rebase 或是 merge 研究下來，對我來說沒有絕對的好壞，更多是看團隊的共識。

假設團隊的想法是：

```
不擔心線圖直觀性變差，想要留下明確的合併軌跡、時間點
```


就可以使用 merge ，再加上 merge 學習門檻也比較低。

那使用 rebase 的團隊可能會有哪些考量，以下是我研究起來的結果：

1. 有設計 CICD
2. 喜歡維持線圖簡潔直觀（因為 commit 會維持一條直線）

## 延伸討論

跟友人討論得到了兩個可討論的使用情況

- 當你需要從他人分支取得所需內容（如共用元件），要怎麼做？
- 團隊希望 develop 分支線圖維持簡潔直觀









