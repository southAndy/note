#api-tool
### axios
1. 提供攔截器 **Interceptors** ，讓開發者能根據專案需求撰寫通用配置，在每次呼叫 API 套用
2. 當後端回傳狀態碼非 2xx 時（例如 4xx,5xx），會自動觸發 `catch` 部分的程式碼
3. 自動將回傳資料格式轉為 `json`
4. 對舊版瀏覽器也兼容
5. 可用 `AbortController` 取消請求

### fetch
1. 無攔截器功能
2. 不會自動跳轉 `catch`，要手動撰寫邏輯判斷
3. 不會自動轉換，要透過 `response.json()` 執行轉換資料格式
4. 只支援現代瀏覽器，不向下兼容
5. 可用 `AbortController` 取消請求