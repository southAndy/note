---
title: Interface vs Type 使用時機與差異
description: 深入比較 TypeScript 中 interface 和 type 的特性差異，包含繼承、宣告合併、聯合型別等使用情境，並提供實際程式碼範例說明何時使用哪種定義方式
---

# Interface vs Type 使用時機與差異

在 TypeScript 中，`interface` 和 `type` 都會被用來定義物件架構，但是它們還是有各自適合的使用情境。

```ts
interface PersonInterface {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
};

const person1: PersonInterface = { name: "Alice", age: 25 };
const person2: PersonType = { name: "Bob", age: 30 };
```

## Interface

常用於定義 `Object`、`Class` 這類巢狀資料，更清楚的描述架構內型別：

```ts
interface Name {
    key: type;
}
```

### 屬性設定

架構內的屬性，可以根據需求調整：

```ts
interface Person {
    name: string;           // 必填屬性
    age?: number;          // 可選屬性 (?)
    readonly id: string;   // 唯讀屬性
    [key: string]: any;    // 任意屬性 (索引簽名)
}

const andy: Person = {
    id: "001",
    name: "Andy",
    // age 可選，可以不填
    hobby: "programming"   // 任意屬性，可自由填入
};

// andy.id = "002";  // ❌ 錯誤：無法修改 readonly 屬性
```

### Interface 特性

1. 可使用 `extend` 去繼承不同 `interface` 的定義，實現所謂的繼承
2. 它會合併多次屬性宣告
3. **無法用於聯合型別、交叉型別的型別情境**
4. 一旦定義後，架構是靜態的，無法在執行時動態添加新屬性

如果你定義了兩個相同名字的 `interface`，編譯器會自動將它們合併成一個接口。

```ts
// 用 extend 繼承擴充
interface Animal {
    species: string;
}
interface Dog extends Animal {
    breed: string;
}

// 合併多次宣告
interface Andy {
    age: 28;
}
interface Andy {
    height: 164;
}
const people: Andy = {
    age: 28,
    height: 164
};
```

### Interface 限制

Interface 是靜態定義架構，也就是被讀取後是不能調整的，所以假設你今天定義了一個 `Person` 型別，並且將它應用於變數上，那這個變數會有以下的限制：

```ts
interface Person {
    name: string;
    age: number;
}

// ❌ 錯誤：缺少必填屬性 'age'
let andy: Person = {
    name: 'andy',
};

// ❌ 錯誤：無法在執行時動態添加新屬性
andy.interested = [1, 2];

// ✅ 正確：符合 interface 定義
let bob: Person = {
    name: 'bob',
    age: 25
};
```

### 適合的情境

- 定義物件結構時（尤其是類別和物件之間的契約）
- 需要支援宣告合併的情境（如第三方庫的型別擴充）
- 需要繼承和擴充的物件型別定義

## Type

```ts
// 使用聯合型別、交叉型別的情況
type Animal = {
    species: string;
};

type Weight = {
    breed: string;
};

// & 是交叉型別符號，表示合併兩個型別定義，表示要同時符合
type Dog = Animal & Weight;

// | 是聯合型別，表示要符合其中之一即可
type Cat = Animal | Weight;
```

### 適合的情境

- 需要使用聯合型別、交叉型別的情況
- 定義函式型別或元組等複雜型別
- 簡單的型別別名（如：`type ID = string | number`）
- 需要更靈活的型別操作和組合

## 總結

| 特性 | Interface | Type |
|------|-----------|------|
| 物件結構定義 | ✅ | ✅ |
| 繼承/擴充 | ✅ (`extends`) | ✅ (`&`) |
| 宣告合併 | ✅ | ❌ |
| 聯合型別 | ❌ | ✅ |
| 交叉型別 | ❌ | ✅ |
| 函式型別 | ✅ | ✅ |
| 元組型別 | ❌ | ✅ |
| 型別別名 | ❌ | ✅ |

**建議使用原則：**
- 定義物件結構時優先使用 `interface`
- 需要聯合型別、交叉型別時使用 `type`
- 需要宣告合併功能時使用 `interface`
- 簡單型別別名使用 `type`