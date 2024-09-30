module.exports = {
    siteMetadata: {
      title: "周易金錢卦占卜應用", // 網站標題
      description: "一個使用 Gatsby 構建的周易金錢卦自動占卜應用", // 網站描述
      author: "ching", // 作者名稱
      siteUrl: "https://ching.699.ooo", // 網站網址
    },
    plugins: [
      "gatsby-plugin-image", // 圖片優化插件
      "gatsby-plugin-sharp", // 圖片處理插件
      {
        resolve: "gatsby-source-filesystem", // 檔案系統資料來源插件
        options: {
          name: "images",
          path: "./src/images/", // 圖片存放路徑
        },
      },
      {
        resolve: "gatsby-plugin-manifest", // 網站應用程式資訊清單插件
        options: {
          name: "周易金錢卦自動占卜應用",
          short_name: "占卜應用",
          start_url: "/",
          background_color: "#ffffff",
          theme_color: "#000000",
          display: "minimal-ui",
          icon: "src/images/icon.png", // 網站圖示
        },
      },
      "gatsby-plugin-offline", // 離線支援插件
    ],
  };