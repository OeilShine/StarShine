module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://apis.juhe.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/swiper_api": {
        target: "https://cn.bing.com",
        changeOrigin: true,
        pathRewrite: {
          "^/swiper_api": "",
        },
      },
      "/ask_api": {
        target: "http://api.avatardata.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/ask_api": "",
        },
      },
    },
  },
};
