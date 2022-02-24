# 個人前端網站
## 專案介紹
自己製作個人的前端作品集網站範本，有興趣的你也可以修改 HTML、CSS 裡面的訊息或更換圖片，看看效果如何吧！圖片的話記得用相對路徑～

## 本地端開發方法

```shell
# 步驟 1. 安裝 dev dependencies
npm install
# 步驟 2. 產生開發時必要檔案
npm run build
# 步驟 3. 切換到開發模式，編輯任何 src 資料夾底下的 css 將會重新產生 public/bundle.css
npm run dev
# 步驟 4. 切換到 public 資料夾，使用 live server 開啟 index.html，就可以看到畫面了
```
## 優化載入速度
1. 使用 webp 影像檔案，並考慮到兼容性，讓不支援 webp 的瀏覽器也可以讀取原本的影像檔

手機端優化結果，透過 lighthouse 跑分  
[Before](https://i.imgur.com/0q2IlFx.png) [After](https://i.imgur.com/jlQYj1p.png)  

桌機端優化結果，透過 lighthouse 跑分  
[Before](https://i.imgur.com/Tln6a5Y.png) [After](https://i.imgur.com/NgzLM0y.png)
