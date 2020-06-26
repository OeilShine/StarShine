module.exports = {
    devServer: {
        proxy: {
            '/swiper_api': {
                target: "https://cn.bing.com",
                changeOrigin: true,
                pathRewrite: {
                    "^/swiper_api": ""
                }
            },

            '/api': {
                // target: "https://cn.bing.com/HPImageArchive.aspx",
                target: "http://apis.juhe.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}