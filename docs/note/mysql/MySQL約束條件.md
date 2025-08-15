#mysql 

## 可添加約束條件

1. 欄位設為主/副/外鍵
2. 不可為空白
3. 唯一性
4. 預設值
5. 自定義檢查 `CHECK`（MySQL 8.0 up）
6. 自動遞增



## 寫法

有兩種寫法分別是：

### 欄位層級約束

```sql
`product_id`   INT            NOT NULL AUTO_INCREMENT,
`sku`          VARCHAR(50)    NOT NULL UNIQUE,
`price`        DECIMAL(10,2)  NOT NULL DEFAULT 0.00,
```

### 表層級約束

```sql
PRIMARY KEY (`product_id`),
UNIQUE KEY `uk_sku` (`sku`),
FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`customer_id`)
```

