# [book] 前端測試策略與實踐


## 前端測試種類

說明了四種常見的前端測試，分別是

1. UI Tests
2. End to End Tests
3. Integration Tests
4. Unit Tests

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNVMz7lonY17EZnE25M69CiuC-tGYL-BjI_5WWw5e9JRU9iskZ-G677Idyo_MaRUvVexyglwBgId_NTDzjQ0c2sS2QKlrKVQFSNQ4tBToMpukWhpFkVbbZ0zhPB5xQ8nv7L02xey5bglq2TbFxa2A73llWphH0xwg-WEnlZiCeQZUuCAe4wgDZhhV0aw/s1600/testing.png)

> 圖片來源：https://www.simform.com/blog/microservice-testing-strategies/

這些類型測試可以 **驗證的範圍** 作為主要區分方式，由下至上的驗證範圍是由小到大，越下層的測試範圍是最小的，通常所需時間也最少，可以在功能開發前期多進行，為功能運行品質打好底子。


## 認識測試技術

除了開發人員透過測試驗證功能品質，部門組織也有方法達到類似的目的：

1. Agile：自己理解是將功能拆小，能交付給團隊成員同時進行，避免互相等待，且每個開發週期縮短，增加應變需求改變的時間。
2. Scrum：基於 Agile 底子發展的開發流程，同樣將功能拆小分發，但每個開發週期都會有個明確的文件，它還會透過每日站會即時追蹤開發進度。
3. TDD：它是一種開發流程設計，這個開發風格的特色是在正式進入開發前，可以根據 PRD 等功能需求先進行測試撰寫，確保功能沒問題後，再進入開發。
4. BDD：類似於 TDD ，不同的是它是以 **使用者角度設計測試規格**
5. Devops


## 將測試應用在 UI 開發的注意事項

作者建議著重在**功能串接是否正確**、**功能怎麼呈現**、**使用者可能會如何操作這個功能**，因為這些部分通常不受畫面改變所影響，畫面細節測試應等到確定不會變動時，以視覺測試協助測試．

## 介紹測試命名模式

1. GWT
2. it Should
3. 3A Parttern

### GWT 
進一步解釋 GWT 分別是：
1. G (Given)：執行測試前的初始狀態，這是準備 test case 的階段
2. W (When)： 描述要測試的行為、操作，屬於觸發測試的階段
3. T (Then)：檢驗執行結果是否如預期

#### GWT 測試格式
這個風格是利用 `describe` 區分並描述不同階段要實現的功能，並在 `test` 內描述預期結果

```js
describe('G',()=>{
	describe('W',()=>{
		test('T',()=>{
			expected().toBe()
		})
	})
})
```

假設今天有一個按鈕功能，初始值為 0 ，當觸發函式 `sum` 時，它的值應該要變為 `3`

```js
//sum.test.js
describe('declare init value',()=>{
	let number = 0
	describe('call sum will change number',()=>{
		test('number should equal 3',()=>{
			expect(number).toEqual(3)
		})
	})
})
```

測試的顯示訊息就會如下圖，我自己理解是能只從測試訊息就看出：**檢測目標、功能執行順序**

![[Pasted image 20241122220741.png]]

> 延伸思考：如果今天你 When 階段要測試的事情很多，該如何解決？


### It Should

以一句話描述 **被測試對象**、**具體的預期結果**：

1. should: 描述預期得到的結果
2. when: 描述觸發的條件

```js
describe(when,()=>{
	it(should,()=>{
		expect(addNumber(1,2)).toBe(3)
	})
})
```

### 3A Pattern
稱為 3A Pattern ，分別指的是 **Arrange** , **Act**, **Assert** 

###  小結

不論選擇使用何者，最終的目的都是為了 **清楚描述測試目的、行為、結果**。


## Unit Test
### 概念
它的目標是 **確保單一功能** 能 **獨立運作** ，要注意符合兩個原則
1. 拆解包山包海的函式：確認此次測試的函式是否 **只完成一件任務**
2. 隔絕外部依賴的影響

#### 隔絕依賴
以書本的例子來說，假設今天有一個函式它的功能是判斷日期是否為情人節，解析功能如下：
	1. 首先要取得當前的日期
	2. 接著根據這個日期去判斷是否為情人節
```js
function testValentenceDay(){
	let today = getToday();
	return today === 'valentence'
}
```

以這個例子來說 `getToday` 就是外部依賴，作者建議使用測試套件的模擬功能來取代它，降低未知影響，並維持單一功能測試的原則。


### 元件如何測試
可以分為**測試實作** 與 **測試行為**兩種，所謂的測試

#### 邏輯與畫面拆分

## Snapshot test
被稱為所謂的「快照測試」是前端測試的一種，**常用於檢查元件或是畫面渲染是否如預期**。
它的測試方式是會將渲染結果輸出為一份快照文件，作為與後續測試結果進行比對的參考。

### 適用情境
元素根據特殊條件決定顯示與否


### 不適用情境

1. 資料變動快速的架構，例如渲染 `new Date()`
2. 檢查畫面細節


## Integration Test

整合元件、套件庫，以及接收到 API 後的畫面炫染

1. 以使用者視角進行測試
2. 盡量擬真



### 狀態管理測試


## 名詞筆記

```
black box testing (黑盒測試)：指不關注內在實作細節，只測試外部行為
white box testing (白盒測試)：
```