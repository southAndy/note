#unit-test


下面是 vitest 主打的特色

1. 預設支援 ESM
2. HMR 功能，當你修改文件後會立刻更新
3. 支援 Vue, React 等框架的**元件測試**
4. 支援 Typescript, JSX 編譯
5. 快照測試、Mock 測試
6. 包含 *Jest* 多數的功能



### 專案風格選擇

有兩種配置檔案的撰寫方式

1. 統一撰寫於 `vite.config.js`
2. 額外撰寫一個 `vitest.config.js`

```js
//1.vite.config.js
export default {
	test:{
		//vitest 的配置寫在這		
	}
}
```

> 官方是推薦統一撰寫在 `vite.config.js` 內，原因是 **降低維護文件成本**
> 
> 因為假設你額外撰寫一份 vitest.config.js，你無法在配置檔案內同步確認其他配置內容，例如：
> 在 vite 有設定 css 要如何被編譯，但在 vitest 並不會知道這個設定，在測試時可能會因為兩邊配置不同步而衍生的問題。



### mode
預設是 `watch mode` ，當你變更文件時會立刻觸發改變


## test API

### `it`, `test` 比較

 以 `it` , `test` 兩者進行測試結果上沒有差異，只是測試程式碼風格上的差別，自己的理解如下：
 
 1. 用 `it` 撰寫在閱讀程式碼更有 **情境** 的感覺，可想像為 `it` 是主詞
 2. `test` 就是單純描述這個功能怎麼運作

舉例來說，今天要測試一個按鈕點擊後的功能
```js
it('should become 3, when user clicks this button',()=>{
	expect(wrapper.trigger('button')).toBe(3)
})

test('should become 3, when user clicks this button',()=>{
	expect(wrapper.trigger('button')).toBe(3)
})
```

### 加入時間
default: 5000 ms

你可以在測試方法的第三個參數加入時間長度，也可以透過調整配置 `testTimeout` 修改預設值

```js
test('test with time',()=>{
	console.log('call test when time is out.')
},1000)
```

https://vitest.dev/config/#testtimeout

### 跳過特定測試

加入 `skip()` 可實現
1. 單一測試情境跳過
2. 系列測試情境跳過

```js
//跳過單一測試
describe('many test',()=>{
	//this test will be skiped
	it.skip('',()=>{
		
	})
})
//跳過整個系列測試
describe.skip('many test is skiped',()=>{
	test('test1',()=>{})

	test('test2',()=>{})
})
```

### 只執行單一測試

```js
describe('many test is skiped',()=>{
	//只執行這個測試
	test.only('test1',()=>{})
	test('test2',()=>{})
	test('test3',()=>{})
})
```

### 測試失敗也會繼續進行

```js
it("should failure, but test contiued",()=>{
	const x = 1
	expect.soft(x).toBe(3) // failure ,but test will be continued
	expect(x).toBe(2) //failure
})
```

## expect API

### 比較兩者是否相等

#### toBe
主要是比較 *Primitive type* 的變數值，或是同址物件

```js
//primitive type
const a = 2
expect(a).toBe(2)

//reference type
const x = {name:1}
let y = x 

expect(x).toBe(y)
```

請不要使用它測試浮點數相加，請改用 `toBeCloseTo` 進行測試。

```js
test("two number plus",()=>{
	expect(0.1+0.2).toBe(0.3) // error 0.300000000004
})
```

類似功能方法

```js
expect(x).toBeNull() //equal .toBe(null) 
expect(x).toBeNaN() // equal .toBe(NaN)

```

#### toEqual
與 `toBe` 功能類似，主要用於比較物件型別變數，**這個方法只比較物件內架構，不比較記憶體指向**，飲用官方文件範例，這個兩個相同架構的物件，分別使用 `toBe` , `toEqual` 測試是否相等。

```js
import { expect, test } from 'vitest'

const stockBill = {
  type: 'apples',
  count: 13,
}

const stockMary = {
  type: 'apples',
  count: 13,
}

test('stocks have the same properties', () => {
  expect(stockBill).toEqual(stockMary)
})

test('stocks are not the same', () => {
  expect(stockBill).not.toBe(stockMary)
})
```

#### toStrictEqual
類似前者，差別在於



### 測試畫面元素

#### toMatchSnapShot

以快照方式檢查元素是否存在






1.`toBeNull` => 


### 比較變數型別

#### toBeTypeof

物件型別：`[]`,`{}` ,`new Map()`


### 比較變數大小

#### toBeGreaterThan

#### toBeGreaterThanOrEqual

#### toBeLessThan
#### toBeLessThanOrEqual

### 測試函式是否有回傳值

#### toBeDefined
常用於確認函式是否有 `undefined` 以外的回傳值
```js
function returnUndefined(){
	console.log('123')
	return 3
}

test("test function's return",()=>{
	expect(returnUndefined()).toBeDefined()
})
```

### 字串內容
是否包含被測試的字串內容


## 描述

使用 `.concurrent()` 讓兩個非同步行為同時觸發
```js
import { describe, it } from 'vitest'

// All tests within this suite will be started in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', async ({ expect }) => { /* ... */ })
  it('concurrent test 2', async ({ expect }) => { /* ... */ })
  it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ })
})
```


## mock
用來模擬非同步行為、回傳值
```js
import {vi} from "vitest"

vi.fn().mockResolvedValue() //產生非同步操作回傳值
vi.fn().mockRejectedValue() //產生非同步操作失敗的回傳值
```

vitest 內建 `vi` 的韓式，建立模擬的函式

```js
import {vi} from "vitest"

let mock = vi.fn()
```

### 設定 mock 函式回傳值
透過 `mockReturnValue` 設定

例如，你希望每次觸發 mock 函式都會回傳 42 
```js
import {vi} from "vitest"

let mock = vi.fn().mockReturnValue(42)
```

### 劫持模組內容
透過 `vi.mock` 自定義模組內行為及回傳值


當你引入特定模組功能，例如假設你今天引入 api 模組
```js
import axios from "axios";
//創立一個axios的實例，統一提供app使用

const touristAPI = axios.create({
//baseURL:要一直被呼叫的API
baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
headers: {
Accept: "application/json",
},});

//它輸出的呼叫方法
export default {
	getApidata:touristAPI.get('/path')
}
```
上述的 `getApiData` 方法呼叫是會真的發出請求的，然而單元測試的其中一個重要原則 **隔絕依賴** ，因為真實發出請求會有幾個問題：
1. 網路狀況影響
2. 對資料庫產生副作用
3. 測試應聚焦於行為驗證，而非依賴外部資源。

為了避免上述問題，透過 `vi.mock` 劫持並設定模組的行為與回傳值

```js
import {vi,test} from "vitest"
import api from "/service/api"

//設定模組回傳值
vi.mock("/service/api",()=>{
	//設定 getApiData 要回傳的內容
	getApiData:vi.fn.mockReturnValue(42)
})

test("",async()=>{
	const data = await api.getApiData()
	expected(data).toBe(42)
})
```


## 報告
### 不適用情境


---


## 延伸閱讀

[[vitest and vue utils test]]