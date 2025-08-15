在 Typescript 中， `interface` , `type` 都會被用來定義物件架構，但是它們還是有各自適合的使用情境。

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

它具有以下特性：
1. 可使用 `extend` 去繼承不同 `interface` 的定義，實現所謂的繼承
2. 它會合併多次屬性宣告
3. **無法用於 聯合型別、 交叉型別 的型別情境**

如果你定義了兩個相同名字的 `interface`，編譯器會自動將它們合併成一個接口



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
	age:28
}
interface Andy {
	height:164
}
const pepole: Andy = {
	// age
	// height
}
```

### 適合的情境

• 定義物件結構時（尤其是類別和物件之間的契約）。

• 需要支援宣告合併的情境（如第三方庫的型別擴充）。

## Type
```ts
// 使用聯合型別、交叉型別的情況
type Animal = {
    species: string;
};
type Weight = {
	breed:string
}
// & 是交叉型別符號，表示合併兩個型別定義，表示要同時符合
type Dog = Animal & Weight

// | 是聯合型別，表示要符合其中之一即可
type Cat = Animal | Weight
```

### 適合的情境

• 需要使用聯合型別、交叉型別的情況。

• 定義函式型別或元組等複雜型別。

• 簡單的型別別名（如：type ID = string | number）。