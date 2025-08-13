
---
title: Styled-Components 完整使用指南
description: Styled-Components 的功能特色與使用方法，包含基本語法、props 應用、樣式繼承、效能優化以及專案架構設計的最佳實踐
---

# styled-component

## 功能說明

它具有以下的特色

1. 支援巢狀架構、偽元素寫法
2. 相似於 react component ，同樣能使用 `props` 
3. 產生的元件可以彼此繼承
4. 自動添加瀏覽器前綴：簡化兼容處理
5. 支援 SSR 渲染，需搭配工具（例如：Babel）


## 基本使用

### 添加靜態 css 樣式

假設我們需要一個黃底黑字的 `<button>`

```jsx
import styled from "styled-components";

const yellowButton = styled.button`
	background:yellow;
	color:black;
`
```



### 元件加入 props 

#### 根據 props 值決定樣式
```jsx
//代表這個樣式會根據 props 的值進行設定
cssName: ${props=>props.name}

//ex: 顏色設定
color:${props=>props.color}
```
#### 以 props 作為條件，決定要加入什麼樣式

```jsx
//如果沒有 props 則預設顏色為黑色
color:${props=>props.color? props.color:'black'}
```


### 樣式繼承功能

這個功能用來實現**在某個元件基礎上，延展、客製化新的元件**。

```js
//基礎元件
const YellowText = styled.p`
	color:yellow;
`

//今天想要產生文字為黃色，再加上 font-weight
const YellowWeightText = styled(YellowText)`
	font-weight:700
`
```


### attrs 添加靜態屬性

像是 `<input />` ,`<button>` 這類的元素，就會有屬性可以設定，例如 `type`  `placeholder`  `checked` 等。
```jsx
import styled from "styled-components";

let yellowButton = styled.input.attrs({
	type:`password`,
	// 加入自定義的屬性
	foo: 'custom'
})`
	background:yellow;
	color:black;
`
```


## 效能考量
###  注意 styled 元件撰寫位置
基於效能考量，文件通常建議將 styled 產生的元件，定義於渲染元件之外，**避免每次重新渲染都會重新創造元件**。

```jsx
import styled from 'styled-component'

//不會重複執行元件創建
const StyledDiv = styled.div`
	color:red;
`

const WrapperPage = ({props})=>{

	//每次渲染都會重複創建
	const StyledP = styled.p`
		color:black;
	`
	return 
	<>
		<StyledDiv>
			<StyledP></StyledP>
		<StyledDiv>
	</>
}
```

### 搭配 Babel

 1. 更具可讀性的類名
 2. 伺服器端渲染 (SSR) 支持
 3. 去除未使用的樣式( 更小的打包體積)



## 情境題

### 解決 css 編譯後亂碼問題

將 css 直接定義在 styled-component 內經過編譯後，會以亂碼方式顯示在網頁上，造成後續維運不便，解決方法：改在元件內部定義 className 

```jsx
import styled from "styled-components";

const StyledSample = styled.div`
	.test{
		display:flex;
	}

```

## 實際運用 - 專案架構設計

```
src/
  └── styles/
      ├── base/
      │   ├── BaseButton.js
      │   ├── BaseContainer.js
      │   ├── BaseInput.js
      │   └── index.js
      ├── theme/
      │   ├── theme.js
      │   └── GlobalStyle.js
      ├── utils/
      │   ├── flexCenter.js
      │   ├── typography.js
      │   └── index.js
      └── index.js
```

###  base/資料夾
用來存放基礎樣式元件（Base Components），主要是封裝 HTML 元素，提供基本樣式設定，這些元件沒有特定的業務邏輯，可以在多處重複使用。

### theme/資料夾
可以用來存放全域顏色、間距(margin,padding)，以我的專案作法是會統一定義於 `theme.js`（如下圖）

```js
//theme.js
export const theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#F8F9FA',
    text: '#212529',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '4px',
};
```

透過 `ThemeProvider` 提供的 Context API 將內容給所有子元件

```jsx
import {theme} from "/theme.js"

//將定義內容傳入
<ThemeProvider theme={theme}>
	//...
</ThemeProvider>
```
### utils/資料夾
通常用來存放工具樣式，例如常用的排版方式、對齊方式、字體樣式，例如你可以將 `flex` 置中的排版組裝為一個元件，輸出重複使用。 

```jsx
// flexCenter.js
import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
```

下面是引入元件使用的情境
```jsx
// 在组件中使用
import styled from 'styled-components';
import { flexCenter, heading1 } from './styles/utils';

const Card = styled.div`
  ${flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const Title = styled.h1`
  ${heading1};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;
```
