#degsin-partern
### 基本概念
所謂的 MVVM 是一個分離架構，將頁面區分為幾個部分：
![[Pasted image 20241106150050.png]]

1. Model（資料）：例如畫面後面的資料庫（以 Vue 來說，可以是元件內的 `ref` 值（更新畫面狀態）、前端狀態管理 vuex,pinia 內的值等）
2. View（視圖）：就是顯示的畫面
3. View-Model（）：負責管理數據跟將 Model, View 兩者雙向綁定

好處是將視圖與數據及商業邏輯拆分，提高程式碼可複用、可維護、測試性。

### 沒有拆分的架構範例


先來看看視圖跟數據邏輯沒拆分的範例，我們寫一個簡單的待辦清單
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>未分離的任務清單範例</title>
</head>
<body>
  <h1>任務清單</h1>
  <ul id="taskList"></ul>
  <input id="taskInput" placeholder="新增任務">
  <button id="addTaskBtn">新增任務</button>

  <script>
    // 數據
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');

    const tasks = [];

	// 業務邏輯
    function addTask() {
      const taskName = taskInput.value;
      if (taskName) {
        tasks.push(taskName);
        const listItem = document.createElement('li');
        listItem.textContent = taskName;
        listItem.addEventListener('click', () => removeTask(taskName, listItem));
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    }

    function removeTask(taskName, listItem) {
      const index = tasks.indexOf(taskName);
      if (index > -1) {
        tasks.splice(index, 1);
        taskList.removeChild(listItem);
      }
    }

    addTaskBtn.addEventListener('click', addTask);
  </script>
</body>
</html>
```
這個架構下數據跟視圖掛鉤、業務邏輯再跟數據掛鉤，三個區域耦合在一起（如圖）

![[Pasted image 20241106151855.png]]

說當你想要把 `addTask` 這個業務邏輯搬出去共用時
```js
function addTask() {
      const taskName = taskInput.value;
      if (taskName) {
        tasks.push(taskName);
        const listItem = document.createElement('li');
        listItem.textContent = taskName;
        listItem.addEventListener('click', () => removeTask(taskName, listItem));
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    }
```

因為函式的業務邏輯跟數據綁定，數據又同時跟視圖架構綁定，在其他架構下根本無法重複使用。

```js
//使用數據作為判斷
const taskName = taskInput.value;
if(taskName)

// 但數據又跟當前架構綁定
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
```

又或者是當今天要調整視圖(View)架構時，可能也會破壞業務邏輯功能

```html
<body>
	<h1>任務清單</h1>
	<ul id="taskList"></ul>
	<input id="taskInput" placeholder="新增任務">
	<button id="addTaskBtn">新增任務</button>
</body>

//假設移除掉某元素
<body>
	<h1>任務清單</h1>
	<ul id="taskList"></ul>
	<button id="addTaskBtn">新增任務</button>
</body>
```


所以沒有拆分的架構會造成的問題是：
1. **業務邏輯無法單獨測試**：因為內部數據跟DOM架構綁定
2. **無法重複使用**：因為跟當前DOM架構綁定
3. **需要手動操作 DOM**，當架構擴增時發生錯誤的機率上升。 


### MVVM 如何解決這件事
最上面有提及它將數據及業務邏輯跟視圖分離，那我們以 vue 重構上述例子：

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>未分離的任務清單範例</title>
</head>
<body>
  <div id="app">
	  <h1>任務清單</h1>
	  <ul v-for="task,index" :key="index">{{task.name}}</ul>
	  <input id="taskInput" placeholder="新增任務">
	  <button @click="addTask">新增任務</button>
  </div>
  <script>
	// Model 
    const model = {
	  //數據
      tasks: [
        { name: '學習 Vue.js' },
        { name: '閱讀前端文章' }
      ],
      //業務邏輯
      addTask(task) {
        this.tasks.push({ name: task });
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    };
    // Vue 實例作為 ViewModel，負責將數據和業務邏輯綁定到視圖
    new Vue({
      el: '#app',
      data() {
        return {
          tasks: model.tasks, // 將 Model 的數據綁定到 Vue 的 data 中
          newTask: '' // 用於綁定輸入框的值
        };
      },
      methods: {
        addTask() {
          if (this.newTask.trim()) {
            model.addTask(this.newTask); // 通過 Model 添加任務
            this.newTask = ''; // 清空輸入框
          }
        },
        removeTask(index) {
          model.removeTask(index); // 通過 Model 刪除任務
        }
      }
    });
	
  </script>
</body>
</html>
```

 View 與 Model 之間的互動，會改成透過 Vue 這個 view-model 來控制，vue 是透過聲明式宣告來控制渲染機制，當狀態改變時觸發畫面改變，背後原理是：

1. 產生 virtual DOM，裡面會包含`ref`,  `method` 
2. 當點擊 view 觸發事件使狀態發生變化時，會觸發 virtual DOM 比對，然後重新渲染

### Vue 的 MVVM 小困惑

1. 自己覺得 Vue 同時肩負 Model 的角色，因為元件內也會存有各種業務邏輯、數據
2. 資料雙向綁定的定義？

### MVVM vs MVC 


### 實作雙向綁定



----

### 參考
1. https://book.vue.tw/CH1/1-1-introduction.html
2. https://www.explainthis.io/zh-hant/swe/mvvm
3. https://v2.vuejs.org/v2/guide/instance#Creating-a-Vue-Instance