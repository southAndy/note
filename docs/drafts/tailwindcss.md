#tailwindcss

### Start to use TailwindCSS

官方文件提供了四種方式，以下會搭配 postCSS 來運行

1.下載 tailwindCSS 
```shell
pnpm install tailwind
```

2.透過以下指令可以產生最基本的

1. tailwind 設定檔
2. postCSS 設定檔

```shell
npx tailwind init -p
```

透過 postCSS 處理 tailwindCSS 樣式有以下幾個好處：
- 透過 postCSS 集中編譯（**編譯功能**）
- 可以透過 PurgeCSS 自動刪除未使用的 css ，減少樣式檔體積、提升效能
- 可搭配 autoprefixer 自動添加跨瀏覽器的前綴（**處理跨瀏覽器問題**）


### basic of tailwindCSS config

以下是最本的配置檔案架構

```js
module.exports = {
 content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
 theme: {
	 extend: {},
 },
 plugins: [],
};
```
1. `content`：指定 tailwindCSS 掃描的路徑，哪些檔案可使用其樣式設定
2. `theme`：要引入的 tailwind 主題

> ** 跟 * 都是所謂的「匹配符」
> 1. `**`  指的是其層級及子層級內的所有內容，以上面為例就是 src 內的所有文件
> 2. `*` 指的是單一或多字符


---
## Use utilities

> 注意：權重小於一般的 class 設定

### Colors

### Hover , Focus

eg:
```HTML
<div class="hover:bg-red-600">
```
> attention: you cant write mutiple css like  this 

```html
<div class="hover:bg-red-500 text-red-200">
```

only `bg-red-500` is work


### Position
type: sticky, fixed, absolute
offset: top / bottom / right / left (rem)

eg:
```html
<div class="relative">
	<div class="absolute top-0"></div>
</div>
```
### Border

1. radius
2. width
3. colors

syntax
```html
<div class="border border-gray-500 border-[]"
```
> className border is required, you can't ignore it


#### custom color

If you need to add `borderColor` setting in  `tailwind.config.js`
```js
module.exports = {
 content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
 theme: {
	 extend: {},
	 borderColor:{
		 '[colorName]':'[colorName]'
	 }
 },
 plugins: [],
};
```

### Add breakpoint
https://tailwindcss.com/docs/screens

#### Using custom breakpoint
https://tailwindcss.com/docs/screens#using-custom-screen-names

### Sizing

---
## Reusing Styles

https://tailwindcss.com/docs/reusing-styles


### @apply

### @tailwind

### @layer
