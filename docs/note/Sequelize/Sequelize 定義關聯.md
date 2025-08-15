
## 語法格式

```js
Table.關聯方法(要關聯的表,{
	foreignKey:'', //外鍵欄位
	as: '' //
})
```

例如，一個商品可以對應多個瑕疵品紀錄，可以想像是商品在不同批匯入的品質都不同。

```js
class Order extends Model {
	static associate(models) {
	// 定義關聯：一個訂單可以有多個瑕疵記錄
	Prodcut.hasMany(models.DefectRecord, {
		foreignKey: 'order_id',
		as: 'defectRecords'
	});
}
```


## 定義關聯層級


要在 `/models` 層級定義表的關聯而不能在 migrate 定義，原因是責任分工：
1. migrate：只負責定義表的架構以及更動表會觸發的行為
2. models：**ORM（Sequelize）要在程式碼裡理解「A 表和 B 表之間的關係」**、生成 JOIN、提供 `.getXxx()` / `.setXxx()` / `.createXxx()` 等 helper 方法