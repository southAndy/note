
1. 程式化管理：將 SQL DDL（CREATE/ALTER/DROP TABLE…）封裝成程式碼（migration 檔），由後端程式執行，不必手動在資料庫執行 SQL。
2. 版本控制變更歷史：每一次對 schema 的修改都對應到一個獨立的 migration 檔案，檔名通常帶有版本編號或時間戳，並存放在 Git




----

在 express 可以透過 [[Sequelize]] 來實現