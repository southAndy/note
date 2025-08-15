---
title: TypeScript 泛型基礎與工具型別
description: 介紹 TypeScript 泛型的基本概念，包含與 any 的差異、多個泛型參數的定義方式，泛型約束的使用，以及常用的工具型別如 Partial、Required、Pick、Omit 等實用應用
---

# TypeScript 泛型基礎與工具型別

如果有個情境：

> 不預先指定具體的型別，在使用的時候動態決定型別的一種特性。

直覺想到 `any`，但這樣的寫法並不能限制回傳值的型別，不具備保護功能。

```ts
function createArray(arg: any): any {
    return arg;
}
createArray(true); // ok
createArray(''); // ok
```

若是搭配泛型，能進一步約束回傳值型別：

```ts
function createArray<T>(arg: T): T {
    return arg + 1; // error
}
```

因為你傳入什麼，就要回傳什麼。

> 泛型跟 any 差別在於 **泛型可更精確的定義回傳值的型別**

## 可定義多個泛型

當函式有多個參數時，怎麼定義多個泛型？

```ts
function multiple<T, A>(arg1: T, arg2: A): T {
    return arg1;
}
```

## 泛型約束

所謂的「泛型約束」指的就是根據需求，限縮泛型可傳入值的型別，例如我們今天希望傳入的值必須要有 `length` 這個屬性才能。

我們可以透過 `extends` 這個方法來實現泛型約束，以下為例：

約束傳入的值必須要包含 `length` 這個屬性，這個行為就被稱為 **泛型約束**（稍微限縮可傳入的類型）。

```ts
interface IncludeLength {
    length: number;
}

function logMessage<T extends IncludeLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

## 常用工具型別

TypeScript 內建了許多實用的工具型別（Utility Types），它們都是基於泛型實現的，可以幫助我們更方便地操作型別。

### Partial&lt;T&gt;

產生一個全新的型別，把參照的所有屬性轉為**可選**。

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

const updateUser = (user: Partial<User>) => {
    // 可以只更新部分屬性
    console.log(user);
};

updateUser({ name: "Andy" }); // ✅ 正確，只更新 name
updateUser({});              // ✅ 也可以是空物件
```

### Required&lt;T&gt;

與 Partial 相反，讓所有屬性變成**必填**。

```ts
interface OptionalUser {
    id?: number;
    name?: string;
    email?: string;
}

const createUser = (user: Required<OptionalUser>) => {
    // 現在所有屬性都是必填
    console.log(user.id, user.name, user.email); // 不會有 undefined 的問題
};
```

### Pick&lt;T, K&gt;

從型別 T 中**挑選**特定的屬性 K。

```ts
type UserProfile = Pick<User, 'name' | 'email'>;
// 等同於：{ name: string; email: string; }

const showProfile = (profile: UserProfile) => {
    console.log(profile.name, profile.email);
    // profile.id // ❌ 錯誤，id 不存在
};
```

### Omit&lt;T, K&gt;

從型別 T 中**排除**特定的屬性 K。

```ts
type CreateUserData = Omit<User, 'id'>;
// 等同於：{ name: string; email: string; }

const createNewUser = (userData: CreateUserData) => {
    // 新增使用者時不需要提供 id（通常由系統生成）
    return { id: Date.now(), ...userData };
};
```

### Record&lt;K, T&gt;

建立一個鍵為 K、值為 T 的**鍵值對型別**。

```ts
type UserRoles = Record<string, boolean>;
// 等同於：{ [key: string]: boolean; }

const permissions: UserRoles = {
    read: true,
    write: false,
    delete: true
};

// 或者更具體的鍵
type Status = 'pending' | 'approved' | 'rejected';
type StatusConfig = Record<Status, string>;

const statusMessages: StatusConfig = {
    pending: '審核中',
    approved: '已通過',
    rejected: '已拒絕'
};
```