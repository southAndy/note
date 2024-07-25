:::info
在這一篇會介紹：

1. <a href="#pug-是什麼">pug 是什麼？</a>
2. <a href="#html-層級怎麼撰寫">幾種使用方式</a>
3. <a href="#react-中最基本的單位---元件">如何在專案引入</a>

:::

### 前言

最近要跟同事一起調整一個舊專案的版面架構，打開專案第一個元件 `template` 馬上迎面而來的是

<!-- ![sample-code](https://imgur.com/J2ID7e1) -->

```pug
  ul.categories-list.nav.flex-column li.nav-item(v-for="category in categories")
      h4.font-weight-normal(v-if="category.id === 0"):
  a.nav-link(@click="redirectHome(category)", :class="{ 'active':
  isActive(category) }") 首頁 h5(v-else) a.nav-link(v-if="category.sub_types &&
  category.sub_types.length > 0", data-toggle="collapse",
  :data-target="`#${type}CategoryCollapse${category.id}`",
  :aria-expanded="parentCategoryShouldExpand(category) ? 'true' : 'false'",
  :class="{ 'active': isRootActive(category) }") {{ category.name }}
  a.nav-link(v-else, @click="switchCategory(category)", :class="{ 'active':
  isActive(category) }") {{ category.name }}
  ul.collapse.list-unstyled(v-if="category.sub_types &&
  category.sub_types.length > 0", :id="`${type}CategoryCollapse${category.id}`",
  :class="{ show: parentCategoryShouldExpand(category) }") li.nav-item h5:
  a.nav-link(@click="switchCategory(category)", :class="{ 'active':
  isActive(category) }") 全部 li.nav-item(v-for="subCategory in
  category.sub_types") h5: a.nav-link(@click="switchCategory(subCategory)",
  :class="{ 'active': isActive(subCategory) }") {{ subCategory.name }}
```

哇，~這什麼看不懂的外星語言~，只好將關鍵 `pug` 字丟給 gpt 快速理解一下 ，並做個筆記供以後的自己參考。

### pug 是什麼？

pug（前身是 Jade） 是一個模板引擎，常見是 `Nodejs` 透過這個模板引擎來產生前端畫面，它具有以下幾個特色：

1. 使用更簡化的方式來標示 html 架構
2. 模板可以透過條件判斷、`@mixin`、繼承等方式來決定產生內容
3. 支持 Javascript 表達式使用

### 架構怎麼撰寫？

在 pug 透過**縮排**來表示 html 層級關係，所以一個架構 `body` 要包含名為「標題」的 `h1` 可以這樣寫：

```pug
html
    head
    body
        h1 標題
```

### 條件式渲染

目前理解的兩種寫法：

1. 條件句獨立一行撰寫
2. 用 `()` 包覆條件

```pug
//1
if [conditional]
    h2 顯示 if
else [conditional]
    h2 顯示 else

//2
h2(if) a 顯示 if 連結
h2(else) a 顯示 else 連結

```

### mixin 的使用

透過 `mixin` 作為宣告來產生特定架構，以 `+` 使用 `mixin` 模板內容

```pug
mixin List
    ul
        li
        li
        li

+List
+List
```

產生的架構就是

```html
<ul>
  <li></li>
  <li>23</li>
  <li></li>
</ul>
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

---

### 引入專案

#### 後端專案引入 - express

在這邊以 `express` 為例，當你使用 `yarn` , `npm` 等方式下載完後：

```js
app.set("view engine", "pug");
```

就可以開始在 express 專案內使用，其他設定 express 都在內部幫忙處理完成。

---

### 參考資料

1. [Pug document](https://pugjs.org/api/getting-started.html)
2. [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)
