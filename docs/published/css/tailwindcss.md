---
title: Tailwind CSS 入門指南
description: Tailwind CSS 的安裝與配置教學，包含與 PostCSS 整合、配置文件設定、基本用法介紹以及常用樣式類別的使用方式
---

# Tailwind CSS

### 新增 tailwindcss 至專案內

官方文件提供了四種方式，以下會搭配 postCSS 來運行

1.下載 tailwindCSS (在這以 pnpm 方式下載)
```shell
pnpm install tailwind
```

2.透過以下指令可以產生基本的 1. tailwind 設定檔 2. postCSS 設定檔

```shell
npx tailwind init -p
```

:::tip

透過 postCSS 處理 tailwindCSS 樣式有以下幾個好處：
- 透過 postCSS 集中編譯（**編譯功能**）
- 可以透過 PurgeCSS ，會自動刪除未使用的 css ，減少樣式檔體積、提升效能
- 可搭配 autoprefixer 自動添加跨瀏覽器的前綴（**處理跨瀏覽器問題**）
:::

### tailwindcss 初始配置


```js title="tailwindcss.config.js"
module.exports = {
 content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
 theme: {
	 extend: {},
 },
 plugins: [],
};
```
1. `content`：掃描哪些路徑下的檔案可使用 tailwindcss 樣式設定
2. `theme`：可於此引入的其他 tailwind 主題

:::tip
** 跟 * 都是所謂的「匹配符」
1. `**` 指的是其層級及子層級內的所有內容，以上面範例，指的就是 src 內的所有 .vue, .jsx, .tsx的文件
2. `*` 指的是單一或多字符
:::




---
### 基本用法

不同於傳統 css 要將樣式另外寫， tailwindcss 可直接將樣式寫於 html 元素上，需要注意的是：**其權重小於一般的 class 設定**，以下是一些常見簡單用法筆記

```HTML
<!-- 設定元素 hover 效果 -->
<div class="hover:bg-red-600">

<!-- 設定元素定位 -->
<div class="relative">
	<div class="absolute top-0"></div>
</div>

<!-- border -->
<div class="border"></div>

<!-- border-radious -->
<div class="rounded" ></div>
```

---

### 參考資料

1. [tailwindcss docs](https://tailwindcss.com/docs/installation)