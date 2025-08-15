新建立的型別會 **忽略** 被選取到的屬性，可忽略多個屬性
```ts
type T = {
  name: string;
  age: number;
};

type MyOmit = Omit<T, 'age'>;
// MyOmit 等同於 { name:string }

```

要忽略多個屬性要傳入 [[union]]

```ts
type MyOmit = Omit(T,'age' | 'name')
```