當你要明確定義資料型別，但是他初始資料不會是

```ts
import UserType from "/type/user.ts"
async function getUserData(){
	try{
		const userData = axios.get(path) as UserType
	}catch(e){
		
	}
}
```

透過 `as` 實現型別斷言明確定義變數型別