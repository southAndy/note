#express 

## 如何建表

產生 migration 表的初始架構檔案

```shell
npx sequelize-cli migration:generate --name table_name
```

> 除了 `--name` 以外還有其他選項可使用，這邊不做描述

接著根據你設計的資料表架構（ ERD, DDL) 填入 migration 檔案內

```js
'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

async up (queryInterface, Sequelize) {	
	//表的欄位架構
},


async down (queryInterface, Sequelize) {
	//表回滾的行為
}

};
```

為了讓這個 migration 實際被執行，我們要再下

```shell
npx sequelize-cli db:migrate
```

執行這個指令會運行：

1. 檢查哪些 migration 檔案尚未被執行過
2. 根據檔案時間戳記依序（**由舊到新**）執行 migration 內部的 `up` 方法把表併入目標資料庫


## 回滾

當你發現表的欄位設計有所調整，但是你已經 migration 舊版的表，就可以使用回滾

```shell
npx sequelize-cli db:migrate:undo --to "migration_file"
```

使用回滾的好處是

### 回滾當前的 migration

```shell
npx sequelize-cli db:migrate:undo --name "fileNmae"
```

這樣不會影響其他沒問題的表

## 操作資料庫


## 測試資料

先使用指令產生

```shell
```