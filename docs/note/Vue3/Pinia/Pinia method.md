#pinia 
## state

存放於內部的全域狀態值，它具有以下特性與限制

1. 可以直接更新 state (devtol 可以追蹤到更新)
2. 可以一次更新 store 內全部 state（透過 `$dispatch`)
3. 不可動態新增 state
4. 不能直接解構使用

```js
import {useStore} from "@/store/..."

const store = useStore();
store.count++

//動態新增 state
store.newState = 1 //x

```

若要解構需要搭配 `storeToRefs` 去解構，它會回傳全新物件，內部包含所有狀態

```ts
const store = useStore();

const {number} = storeToRefs(store)

//會將 number 轉為 ref 物件以維持響應式
// number = {age:ref(1),nmuber:ref(1)}
```