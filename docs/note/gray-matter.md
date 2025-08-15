是用來讀取 YAML, TOML 格式內容的套件，使用方式如下

```ts
import {matter} from 'gray-matter'

const mdFileContent = path //檔案路徑
const {data,content} = matter(mdFileContent)

```

通常 .mdx , .md 檔案不只會包含 YAML 的資料，也會包含 markdown 語法寫成的內容，但是這個套件只能做到 **初步將 markdown 部分拆分出來，並且轉為 string**。