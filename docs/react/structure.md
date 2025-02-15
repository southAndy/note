# React - 專案架構 

## 動機

最近在檢視自己的 React 專案架構，並且將專案架構餵給 GPT ，得到了一些回饋：

```shell
/src
│── /assets       # 靜態資源（圖像、SVG、字型等）
│── /components   # 共用元件（可在多個頁面使用的 UI 元件）
│── /container    # ❓（待確認用途，可能是頁面容器？）
│── /pages        # 各個頁面組件
│── /plugins      # 外部插件（可能是第三方工具的封裝）
│── /routes       # 路由設定
│── /store        # 狀態管理（如 Redux、Zustand）
│── /styles       # 全局樣式（SCSS / Tailwind / CSS Modules）
│── main.jsx      # 應用入口
```

在 React 專案中， **/container 層級的內容，通常被期待作為 取得 API 資料、 跟 Redux 互動
等**，但是以我的專案情境來說， container 層級內目前放置的多是 **全站共用的排版區域（如 Footer）**，並沒有牽涉上述功能。

因此，我想試著理解 React 專案的不同架構與設計考量，讓自己能試著根據不同規模、需求的案子時，決定要採用的專案架構。

## 頁面導向架構

```shell
/src
│── /assets       # 靜態資源（圖像、SVG、字型等）
│── /components   # 共用元件（可在多個頁面使用的 UI 元件）
│── /pages        # 各個頁面組件
│── /plugins      # 外部插件（可能是第三方工具的封裝）
│── /routes       # 路由設定
│── /store        # 狀態管理（如 Redux、Zustand）
│── /styles       # 全局樣式（SCSS / Tailwind / CSS Modules）
│── main.jsx      # 應用入口
```

### 專案架構清晰、易拓展

這邊同樣以我的專案為例，當檢視頁面導向的專案架構：

1. 能很清晰理解這個專案有 **哪些頁面**
2. 方便以 **頁面為單位** 進行多人團隊分工，彼此不會產生衝突
3.  **以頁面為單位** 進行功能拓展容易

```shell
/src
│── /pages
	- /Home #首頁
	- /Detail #展覽詳細內容頁面
	- /Backstage #會員後台
	- /Result #展覽搜尋結果頁面
	- /Regsiter #會員註冊頁面
	- /Map #地圖搜尋頁面
```

### 適合搭配 React router
當你的頁面與路由設計得宜，開發者能直覺理解

```shell
route => page #路由對應頁面
```

### 需要明定元件的使用規範

元件會建議要分為 **僅限該頁面使用**、 **跨頁面使用（也就是共用元件）**，並且要團隊嚴格落實這個原則，以我自己來說 **橫跨三個頁面使用的元件** ，就會該它寫成共用元件，降低要維護多個類似元件的成本。

```shell
/src
│── /pages
	- /Home #首頁
		- components #限定該頁面使用的元件
			- HomeButton.jsx
-  /components #跨頁面使用的元件
	- Button.jsx
```

### 引入全域管理的重要性
有些資料在不同頁面都會被操作，為了避免不同頁面資料狀態不同步，建議要加入全域管理萊解決這個問題。

### 適用的專案類型

1. 中小企業管理後台
2. 小型電子商務網站



