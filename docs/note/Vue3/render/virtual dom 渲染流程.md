 #virtual-dom #vue3

### 我的理解

有三個主要的步驟：

![](https://vuejs.org/assets/render-pipeline.CwxnH_lZ.png)

1.**compile**
在這個步驟會將元件架構（ `template`）編譯為 dom-tree 架構的 Javascript 物件

2.**mount**
根據 virtual DOM 架構去渲染實際的 DOM 架構

3.**path** (當 [[響應式狀態]] 更新時)
比對新舊的 virtual DOM ，將差異更新