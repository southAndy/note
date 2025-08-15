
## props 

### 定義方式
```javascript
//可以是array,obj
props:{title:String,}
props:['title']
```
#### prop casing
HTML 屬性名稱不區分大小寫，在script中用小駝峰命名法引入的props，在HTML template上需要使用kebab-cased的寫法
```javascript=
// camelCase in JavaScript
  props: ['postTitle'],
  
 <!-- kebab-case in HTML -->
<blog-post post-title="hello!"></blog-post>
```

### 單向資料流
* 資料一般定義在父元件，子元件只做接收和顯示資料
* 父元件的資料一更新，子元件內所有使用的 props 會自動更新
* 不在子元件內修改props ( console 會出現警告)


## emit
```js
import {defineEmit} from "vue"

const emit = defineEmit(['update:modelValue'])


//這個 emit 是一個函式

emit('update:modelValue',true)
```



