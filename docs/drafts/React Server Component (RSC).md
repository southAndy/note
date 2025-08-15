#nextjs 

> 開始前，以下 client-side 會稱為客戶端， server-side 則稱為伺服器端



所謂的 RSC 我會翻譯為伺服器端元件，代表這個元件渲染時機發生在伺服器端。在 App router 路由模式下，所有元件預設都是 React Server Component (RSC) ，接著我們來看看這個元件具有什麼優缺點：
### 優點

1. 商業邏輯處理在伺服器端就能完成，像是呼叫 API 、操作資料庫等
2. 減少客戶端接收到的 JS  bundle size，只將必要的放在客戶端渲染操作

### 缺點

1. 不能使用 React hooks 
2. 不能使用瀏覽器API
3. 不能使用瀏覽器事件跟使用者進行互動


前面有提到預設元件都是 React Server Component (RSC) ，但是總有需要與使用者互動的情境，因此，Nextjs 提供渲染選項，只需要在元件開頭加上 `use client`  字元就能轉換為客戶端渲染，。但也是因為具有如此高的自由度，會很考驗開發者本身的經驗，增加 React Server Component (RSC) 在我自己看來又是一個讓網站 **提高效能上限及下限** 的設計，這也很 React(X)。 



