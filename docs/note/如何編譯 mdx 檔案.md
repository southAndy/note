#blog


常見的 mdx 檔案會包括兩個部分:
1. font-matter(註解1)
2. 由 markdown 語法撰寫的內容區域


```
//1.font-matter
---
title:'test'
---

//2.markdown
# title
this is a content.
```


### 編譯步驟

1.將 mdx 資料透過套件分別拆分：[[gray-matter]]
2.（非必須）將 markdown 內容中的程式碼部分加上高光效果：[[rehype-prism-plus]]
3.將 markdown 部分透過套件轉換為 JSX：[[next-remote]]

以下是詳細的流程

![[Next.js 13 MDX Flow with gray-matter & next-mdx-remote:rsc.png]]

### 註解
1. [[Front-matter]]