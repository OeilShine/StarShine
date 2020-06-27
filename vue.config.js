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
    },
  },
};
