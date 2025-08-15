只想取出特定的幾個型別進行使用
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Andy"
  // email: "andy@example.com" ❌ 錯誤：不包含 email
};
```