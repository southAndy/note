#docker 

dockerfile 是用來描述**單一容器的藍圖**，而 docker-composer.yml 則是用來描述要 **啟動多個容器服務以及相關設定** 


所以也可以理解為一個 docker-composer 內包含多個 dockerfile ，舉例來說：


以下是我的專案

```
project-root/
├── frontend/
│   ├── Dockerfile
│   └── ...
├── backend/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml
```

我的 docker-composer.yml 這樣寫


```docker
version: '3'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:80"

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
```

它就會依序幫你執行產生兩個容器（前後端的）