#react 
## Core API
### 取得元素
Core API 提供多種方式取得元件內指定元素值，例如：

1. `getByTestId`：透過手動幫元素加上 `data-testid` 作為識別索取內容
2. `getByText`：檢查元件內是否有特定文字內容
3. `getByRole`：根據元素類型搜尋，例如 `<button>`、`<span>` 
4. `getByLabelText`：透過檢索 `<label>` 標籤來取得表單元素

> 自己理解是每個框架測試都可以取得上述的方法，以 React 框架測試來說，當你使用 `render`方法渲染元件後，即可搭配上述方法取得內部的元素值

### 模擬用戶行為

1. `fireEvent`：用來模擬用戶操作觸發事件的功能
2. `fake timer`


## Testing library/React

是一個專注於 React 元件測試的工具，隸屬於 Testing Library 系列。它的設計理念是模仿使用者與應用程式互動的方式，從而確保元件的行為符合預期。它的核心特性是專注於**可用性**，而非技術實現細節。

它還具有以下幾個特色：

1. 支援 Hooks 
2. 每次測試完畢會自動清除此次模擬結果

### `render` 

渲染元件到虛擬 DOM 的方法
```jsx
import {render,fireEvent} from '@testing-library/react'
import Component from "/component"


test('是否渲染正確元件',()=>{
	render(<Component/>) // 渲染 Component 元件
})
```

### `container`

container 是一個 DOM 元素，用於指定測試中渲染的範圍或上下文。container 的主要用途是讓查找方法（如 getByText 等）限定查找範圍，避免不必要的全局查找。

假設今天你的元件架構為

```jsx
//component.jsx
export default function Component(){
	return (
		<section>
			<p>123</p>
		</section>
	)
}
```

當你透過 `container` 去執行元素搜尋方式，它會在元件最外層包覆一個 `div` 以此往下查找。
```jsx
// container 架構下的元素架構
<div>
	<Component/> 
</div>
```

可以搭配如 `querySelector` 等方式搜尋。

## 搭配 Core API 實作

```jsx
import {render,fireEvent} from '@testing-library/react'
import Component from "/component"


test('props 傳入的事件是否被觸發一次',()=>{
	const { getByText,getByTestId } = render(<Component onClick={onClick}/>) // 渲染元件
	const targetElement = getByText('標題') //此元件內應有 '標題' 的元素

	fireEvent.click(targetElement)

	expect(onClick).toHaveBeenCalledTimes(1)
})
```


