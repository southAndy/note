
#bms
# 設定檔

### 理解欄位設定檔的key值

```jsx
// /performance/setting

columnName: {
        label: 'xxxx', （欄位名稱）
        sortEnabled: true, （能否拖拉）
        isFilterable: true, （能否過濾）
        type: 'string', //這個部分代表什麼呢？向下看
        position: 'center', （欄位位置）
        width: 11, （欄位尺寸）
        widthPx: 100 （最大尺寸）
    },
```

### **解析type**

1.  **架構**

```
Table
    -TableFilter
        -TableFilterModal
            -Modal
                -CheckboxDropDown  （在這邊判斷添加什麼樣式的 Textbox)
                    -Textbox （本身也會判斷）
```

1.  **值域跟顯示**：如 `string`, `number`, `date` ..etc，以下以 `string` 為例：
    
    1.  `string`
        
        ![https://i.imgur.com/boqBGnr.png](https://i.imgur.com/boqBGnr.png)
        
    2.  `date`
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/acd96954-15f8-467a-8355-3ff5aff4cf4e/Untitled.png)
        
    3.  `number`
        
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e20619a7-cd9a-4ced-838b-bf9c08fc888b/Untitled.png)
    
    **QA**
    
    1.  原則上 `type` 有預設值，**當沒有資料傳入時，它會回傳預設型別 `text`**
    2.  傳入`null` 前端會有壞掉問題嗎？ 上面有提到當沒有資料傳入時，它會顯示預設樣式，假設今天是傳入 `null` 也不會壞掉，因為還有一層`v-if` 把關渲染內容，所以頂多會造成畫面空白。
2.  **背後的意義 / 功能**：**type** 指的是 在快速搜尋欄位要添加的 Textbox.vue 的類型