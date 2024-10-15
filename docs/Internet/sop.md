# 同源與非同源

所謂同源政策，全名為 Same Origin Policy ，是瀏覽器用來規範以程式語言索取資源（`response`）的規則，要符合規則的情況下才能取回資源（`response`），而要符合同源政策必須同時滿足以下三個條件才符合：



1. protocol ：是通訊協定：`http / https`，指被請求來源（`response`）與請求來源（`request`）需使用相同的通訊協定 
2. host：則是網域，指被請求來源（`response`）與請求來源（`request`）的網域相同 
3. port：是通訊埠，指被請求來源（`response`）與請求來源（`request`）相同

> 通訊埠（port）的部分，若沒有額外設定， http 預設是 80 ， https 預設是 443