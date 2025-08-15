產生一個全新的型別，把參照的所有屬性轉為 **可選**

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