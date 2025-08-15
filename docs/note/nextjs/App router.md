#nextjs

這是 Nextjs13 之後提供的路由選項，以下介紹

### 預設使用元件

預設使用 [[React Server Component (RSC)]] 


## 路由

概念上使用 [[file-base-routing]] 方式建立，在 App router 路由模式下規範開發者要在 `/app` 內建立路由

```
src
	- /app
		- /route
```

### 架構

每個路由可以依照需求添加以下檔案

```ts
/folder
	- page.tsx
	- layout.tsx
	- loading.tsx
	- error.tsx
```

page：用來設計這個頁面的架構與邏輯
layout：用來建立共用的模板
loading：設計在特定條件下要顯示的畫面架構
error：報錯時的畫面架構

> 這裡的檔案預設都是 [[React Server Component (RSC)]] 

### 動態路由

透過將資料夾名稱加上 `[]` 來產生動態路由，例如設定多國語系的路由時

```
/app
	-/[locale]
```

並且會在載入這個路由時進行切分載入必要的資源


### 路由導向

如果是 `<Link>` 元件下的路由，Next 內建 [[prefetch]] 的機制，以下說明

```tsx
<Link href="" prefetch={option}>blog</Link>
```

**`prefetch={null}`（預設）**：依路由型態自動決定

- 靜態路由：完全預取
- 動態路由：**預取到最近有 `loading.js` 的 segment** ，並且會在進入 viewport 時預取；如果該資源過期（TTL 到期），使用者 hover 時也會再次嘗試預取。
**`prefetch={true}`**：強制完全預取（viewport + hover）
**`prefetch={false}`**：完全停用所有預取（不論 viewport 還是 hover)

> 注意：在 App router / Page router 下 prefetch 機制不同

#### 手動設計 hover 觸發 prefetch 機制

將 `prefetch={false}` 與 `onMouseEnter` 搭配 `router.prefetch()`
```ts
"use client"
import Link from 'next/link'
import { useRouter } from 'next/router'

function MyLink({ href, children }) {
  const router = useRouter()
  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={() => router.prefetch(href)}
    >
      {children}
    </Link>
  )
}

```


### streaming



