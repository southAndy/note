#express 


## 建立 API

標準流程如下：
1. 決定架構風格（例如：[[RESTFUL]] ）
2. 製作 models 層級
3. 製作 controller 層級

### models 層級

定義資料架構，避免傳入錯誤格式的資料進資料庫，以下是架構


```js
import { Models } from 'Squelize'

module.export = {
	// 繼承 Squlize 類別方法，讓你可操作資料庫
	class Product extends Models{
		//配置
	}
	// 定義資料層級格式	
	Product.init({
		// data
	})
}
```

我一開始想到的問題是 **為何在 migration 定義過資料架構，這邊還要做一次**
### controller

設計該路由會有哪些行為，例如：
1. 查詢邏輯
2. 新增邏輯