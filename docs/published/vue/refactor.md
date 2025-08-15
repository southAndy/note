---
title: Vue 專案重構實戰筆記
description: 完整的 Vue 專案重構經驗分享，包含重構動機、測試策略（單元測試、快照測試、整合測試）、Option API 轉 Composition API 的過程與心得
---

# [筆記] 重構 vue project 

## 為何要重構？

閱讀完 explain this 的[重構文章](https://www.explainthis.io/zh-hant/swe/how-to-refactor)後，我自己決定練習重構專案的原因：

1. 檢視自己的程式碼進步狀況
2. 試著以提高**可讀性**、**好維護**、**更好的效能** 的視角來優化
3. 這個專案很小，很適合入門練習


### 重構方式

我會附上重構前後程式碼進行比對，在重構的過程若有遇到值得複習、不清楚的概念會記錄下來，以下是主要步驟：

1. [圖解架構及各個架構的功能](/docs/vue/refactor#圖解專案架構)
2. [更新專案打包工具 webpack -> vite](/docs/vue/clitovite)
3. [為重要功能加入測試 (Vitest)](/docs/vue/refactor#測試方法)
4. 以頁面為單位去針對程式碼進行重構（並且記錄下程式碼重構的原因）
5. 以 Typescript 進行編寫


## 為何要撰寫測試

重構最簡單可以理解是「**不影響功能運行下調整優化程式碼**」的行為，透過撰寫測試我們可以更加確保功能運作正常，但每個專案內都有許多功能，如何選擇測試功能也是一門學問。

以下是我得出需要測試的重要功能：

1. **高頻率使用/核心功能**：所謂的核心功能可以是指「攸關網站營收」、「現在未來主要發展」的功能，像是以後台系統來說，排除 API 不正常的情境，搜尋、圖表顯示功能都是非常重要的，常見識別核心功能的方法可透過 Google Analysis, Meta Pixiel 埋點，來統計、追蹤使用者使用行為。
2. **異常狀態處理**：像是在 API 資料回來前要顯示的載入效果、或是載入失敗的錯誤畫面顯示，都可以算在這類。

## 測試方法

主要會以 **單元** **快照** **整合** 三種測試為主，其中單元測試會分別進行元件測試、功能測試。

### 單元測試

#### [功能] actions 模擬

以下述 `actions` 來說，執行功能後會觸發兩個行為：

1. 打 api 發出請求索取資料 
2. 成功後，呼叫 `mutations` 去更新 `state`

```js
actions:{
	async getApi({commit}){
		const data = await callApi();
		commit("storeData",data)
	}
}
```

回顧單元測試的兩個核心原則，分別是
1. 測試單一任務
2. 隔絕依賴

檢視 `getApi` 這個方法來說，它的功能就是負責完成上述兩件事，這時重新檢視單元測試「單一功能能運作」的概念，產生了疑惑「但這個函式做了不只一件事情」，所謂的單一功能，並不代表只做一件事？

自己後來是用料理來思考，假設今天功能是要燉牛肉，過程你要先經過切肉、切菜、炒料等步驟，每個步驟都有確實完成，最後才能順利完成「燉牛肉」這個事情，把這個思考套用反推回去 `getApi`這個功能，呼叫 api 跟觸發 mutation 就像是這個功能的切菜、炒料，這些步驟沒確實完成，這個功能就無法順利執行。

而「隔絕依賴」的部分，以這個案例來說就是與外部有依賴的是「真實 API 請求及真實的 vuex」：
1. 避免請求真實 API : 因為牽涉到網路環境、以及資料庫等不可控因素
2. 避免操作真實 vuex：可以避免副作用的產生，例如測試過程改到真正的狀態

#### mock API

透過 vitest 提供的 `vi` 可以實現模擬 API 後續行為，它可劫持透定路徑檔案內的函式，並可自定義回傳值、錯誤內容，以這個專案來說 API 呼叫的設定是統一放在 `/service/getApi.js` 

```js
//service/getApi.js

//創立一個axios的實例，統一提供app使用
const touristAPI = axios.create({
//baseURL:要一直被呼叫的API
baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
headers: {
Accept: "application/json",

//加密函式
...getAuthorizationHeader(),},
});
export default {
	getScenicSpotAPI() {
	return touristAPI.get("/ScenicSpot?%24top=500&%24format=JSON");},
}
```
我們在測試檔案引入這個模組後，使用 `vi.mock()` 進行劫持 ,所謂的劫持是 **呼叫目標函式時，會觸發設定好的行為**，可以用 `Proxy` 的概念去理解。

```js
//action.unit.test.js
import {vi} from "vitest"
import API from "/service/getApi.js"

//使用 mock 進行劫持
vi.mock('/service/getApi.js',()=>{
	default{
	// 自定義回傳值
	getScenicSpotAPI:vi.fn().mockResolvedValue({data:12})
	}
})
```
#### mock mutation

單元測試專注於 單一功能的運行狀態，要盡量縮小測試範圍、隔絕外部依賴產生的影響，以這個案例來說，我們只關注「actions 的功能」，在這邊之所以要產生模擬的 vuex，是避免操作真實 vuex 對真實的 `state`產生影響，也就是避免測試產生的副作用。

```js
// 創建模擬的 Vuex Store
const createMockStore = () => ({
    state: {},
    mutations: {
        updateData: vi.fn(), // 模擬 mutation 函數
    },
    actions: {
        async getScenicSpotAPI({ commit }) {
            const response = await API.getScenicSpotAPI();
            commit("updateData", response.data); // 正常 Vuex 內部邏輯
        },
    },
});

describe("When dispatching actions: getScenicSpotAPI", () => {
    it("Should call API function and then trigger mutations", async () => {
        const mockStore = createMockStore();

        // 為 commit 函數建立監控點
        const commitMock = vi.fn();
        const spyCommit = vi.spyOn({ commit: commitMock }, "commit");

        // 調用 action
        await mockStore.actions.getScenicSpotAPI({ commit: spyCommit });

        // 驗證 API 是否被調用
        expect(API.getScenicSpotAPI).toHaveBeenCalled();

        // 驗證 commit 是否被正確觸發
        expect(spyCommit).toHaveBeenCalledWith("updateData", 12);
    });
});
```

#### [元件] Button


### 快照測試

這是前端特有的測試方式，透過比較前後的畫面架構改變來進行，主要用來確認渲染狀態。要進行快照測試需要額外引入可以模擬 DOM 架構以及模擬 vue 元件渲染的套件，這邊我是使用 *jsdom* 搭配 *vue utlis tests* 來實現測試。

```js
//vite.config.js
export default {
	test:{
		enviroment:jsdom
	}
}
```
#### 畫面載入顯示與狀態綁定

網站有載入效果（如下圖），等待 API 資料回傳才顯示畫面，載入樣式 `.skeleton` 添加與否是跟 `isLoading` 狀態綁定的，這個測試的目的是為了確認狀態與樣式確實綁定。

![](/refactor-vue/loading.png)

在這個測試案例，我是使用 `shallowMount` 進行元件渲染，因為我的目標是 Card 元件根層架構是否會根據狀態顯示對應樣式，不需要連同子層架構完整渲染，以下是我寫的配置。

```js
import Card from "@/components/Card.vue"


//mock Card 元件
const wrapper = shallowMount(Card, {
      props: { activitiesData },
      global: {
        mocks: {
          $store: mockStore, // 模擬 Vuex
        },
        stubs: {
          'router-link': true, // 模擬 router-link
        },
      },
    });
```
我設計的測試案例分別是 當 `isLoading` 為 `true` 時，元件架構應包含 `skeleton` 樣式，反之則否。

```js
import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  
  // 模擬類似真實 api 回傳的假資料
  const activitiesData = {
    StartTime: '2024-11-28T12:00:00Z',
    EndTime: '2024-11-29T12:00:00Z',
    City: 'Taipei',
    ActivityID: '12345',
    ActivityName: 'Sample Activity',
    Picture: { PictureUrl1: 'https://example.com/sample.jpg' },
  };

  // 模擬的 vuex
  const mockStore = {
    state: {
      isLoading: false,
    },
  };

  it('renders correctly when not loading', () => {
    const wrapper = shallowMount(Card, {
      props: { activitiesData },
      global: {
        mocks: {
          $store: mockStore, // 模擬 Vuex
        },
        stubs: {
          'router-link': true, // 模擬 router-link
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders skeleton class when loading', () => {
    mockStore.state.isLoading = true; // 模擬 isLoading 狀態
    const wrapper = shallowMount(Card, {
      props: { activitiesData },
      global: {
        mocks: {
          $store: mockStore,
        },
        stubs: {
          'router-link': true,
        },
      },
    });

    expect(wrapper.find('.skeleton').exists()).toBe(true); // 檢查 skeleton class 是否存在
  });
});
```

### 整合測試

 ### 測試心得
 
 在實際開始撰寫測試的過程，產生了一些問題，先紀錄之後再補上自己的想法

 ```
測試檔案管理位置？ 統一管理在 `/tests` 底下？或是隨著被測試內容一同放置
如果專案內同時有單元測試、整合測試，那檔案怎麼命名比較好識別？
測試風格該混用嗎？ 是根據測試情境複雜度混合使用 GWT, it Should ？
```


## 重構記錄

### 圖解專案架構

圖片說明的是專案架構、內部包含的元件以及元件概要的功能說明

![](/refactor-vue/structure.png)

### 是否全面改寫 compositionAPI?

首先發現這個專案目前是使用 optionAPI 進行撰寫，要決定專案是否翻新前，先檢視當時開發的時空背景：

> 製作這個專案時，我算是初次入門 vue，當時職場上主流需求還偏向 vue2 ，optionAPI 架構較為類似 vue2

大致確認了沒有特別的理由後，就可以單純以程式面來比較，經過 research 加上自己開發經驗得出以下的結論：

1. 以 compositionAPI 開發，可以將同個功能的狀態與功能函式聚集，而 optionAPI 則因為架構規範無法做到這件事，隨著專案體積擴大，功能維護的容易性越差越多，如同官方文件的比較圖

![](https://vuejs.org/assets/composition-api-after.ZXskY_32.png)

2. 相關生態系與 Typescript 的支援程度，因為後續想以 typescript 進行改寫。

綜合上述兩點，確認要翻寫。


