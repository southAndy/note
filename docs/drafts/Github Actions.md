#ci/cd

GitHub Actions 是 GitHub 提供的 CI/CD 平台，可在儲存庫中透過事件觸發自動化工作流程（Workflows）──從建置、測試到佈署都能集中管理與監控。


### 檔案位置與命名規範

所有 workflow 定義必須置於 .github/workflows 資料夾中，檔案副檔名需為 .yml 或 .yaml。

### Workflow YAML 基本架構

```yaml
name: <工作流程名稱>
on: <觸發條件>
jobs:
  <工作項目>:
    runs-on: <執行環境>
    steps:
      - <步驟 1>
      - <步驟 2>
      ...
```

**name**: 工作流程顯示的名稱，可自訂
**on**: 設定觸發事件，常見如 push、pull_request 等行為發生時
**jobs**: 將工作劃分為多個 job，每個 job 可併行或依賴執行






