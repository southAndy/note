1. 捨去  `mutations` ，在 Pinia 直接更動 `state` 也能被追蹤，不再需要 `mutations` 才能作為追蹤媒介。 
2. 提供另一種**平坦的結構**來管理資料,但是**依然支援vuex的巢狀模組(nest-module)功能**
3. 不再需要手動設定 `namespaced`,所有模組預設都是 `namespaced:true` 