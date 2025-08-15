
## 基本概念

如同 webpack ，gulp 同樣也是前端自動化工具 ，它能省去你處理許多事情的步驟，如：
1. 將sass檔編譯為css檔
2. 將圖片檔轉換為可讀取格式

---
## 操作

需要產生一個定義檔案 `gulpfile.js`，內部的程式碼就是你想透過 gulp 去自動化執行的各種行為

```js
//1.you need to import/require gulp instance
const gulp = require('gulp');
```

### 產生一個任務
```js
//after you import gulp instance
const gulp = require('gulp');

//create a task
gulp.task('[task-name]',function(){
	//when you call this task, it will excute following process
})
```
 
#### 實際案例：執行編譯 sass 檔為 css 檔
```js
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compile-sass',function(){
	gulp.src('src/assets/styles/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/'))
})
```

當遇到 gulp 本身無法處理的編譯檔案，就需要透過它提供的plugins來協助

在上面有用到幾個gulp的方法，以下詳細說明：

1. gulp.src("path"): 定義要處理的檔案來源，可接受單一、多個檔案來源
2. gulp.pipe("method"):是用於串連不同方法
3. gulp.dest('path'): 選擇處理過後的最後輸出位置

以上面程式碼為例：定義完檔案來源後 > 進行sass編譯 > 選擇編譯結果輸出位置

### 執行任務

執行特定任務
```
gulp <task-name>
```


#### 預設執行任務：`default`
```js
gulp.task('default',['compile-sass','compile-image','start'])
```

>注意：陣列內的任務存放位置，影響其執行順序，從index[0] 開始執行