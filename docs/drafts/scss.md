#css 
### 使用 scss 的優點

目前筆者整理自己覺得 *scss* 好用在於：
1. 透過*scss-nesting* 的樣式設計，讓你的css樣式能夠以巢狀結構，顯示元素(*html*)階層關係
2. 透過*scss-variable* 減少重複 css 語法書寫(原生 css 也有巢狀功能)


### 如何將 scss 引入專案

這邊可分為：
1. 非框架專案
2. 框架專案

### 非框架專案使用 scss

**如何編譯 .scss 檔案**

在終端機輸入:
```
sass --watch "[被轉譯scss名] [轉譯後的css檔案]"
```
會根據scss內編輯的內容進行轉譯成一般所知的css檔案


### 框架的專案


引入 `.scss` 檔案

 `.scss` 需要透過**預處理器**編譯才能轉換為 .css 檔案，以下是幾種使用方法：



使用方法：
1. `@use folder/file.scss`
    使用方法：file.變數名（參數內也要）
2. `@use folder/file.scss as [自定義讀取名稱]`
     使用方法:讀取名稱.變數名（參數內也要）
3. `@use folder/file.scss as *`
     適用在單人專案，可省略指定scss檔引入名稱，直接引用檔案內的內容


`@use` 與 `@import` 的差異

先說結論：
>使用 `@use` 的方式引入 `.scss` 的內容，可以避免編譯器誤判 sccs 檔案位置的問題


==可避免不同檔同變數名的讀取錯誤==，例如當你今天有A.scss,B.scss,C.scss三檔，裡面同時存有三個同名變數
若你使用@import取用時，因沒有指名scss名稱設定，編譯器無法判斷檔案來源。


### scss 語法
#### extend 

使用`.css` 時，會遇到相同的樣式需要被複寫好幾次，你可以使用  `extend`  來解決這個問題
```css
.sample{
	color:red;
	text-align:center;
	font-size:25px;
}
.paper{
	color:red;
	text-align:center;
	font-size:25px;
}
.third{
	color:red;
	text-align:center;
	font-size:25px;
}
```
改以 `extend`的用法，就會如下：

```scss
%test{
	color:red;
	text-align:center;
	font-size:25px;
}
```

套用方式，就是透過 `extend 名稱` 來使用

```scss
.sample{
	@extend %test;
}
.paper{
	@extend %test;
}
.third{
	@extend %test;
}
```

#### 動態插值

syntax:
```scss
#{[scss-variable]}{
	 
}
```

```scss
$name:'.button-container'
#{$name}{
	color:red;
	...
}
```
樣式設定是根據上面的變數 `$name` 來決定，除此之外也可以將插值應用在樣式內
```scss
$name:'16px'

.container{
	color:#{$name}
}
```


---

## 參考

如何引入 scss 檔案
https://stackoverflow.com/questions/62757419/whats-the-difference-between-import-and-use-scss-rules

