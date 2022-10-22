const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const devConfig = {
    mode:'development',
    devtool:'cheap-module-source-map',
    //webpack-dev-server配置本地服务器，并配置跨域
    devServer:{
        static: path.join(__dirname, "dist"),
        port: 8000, // 本地服务器端口号
        hot: true, // 热重载
        proxy: {
            '/api/*': {
              target: 'http://localhost:3333', // 目标服务器地址
              secure: false, // 目标服务器地址是否是安全协议
              changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
            }
        }
    }
}
module.exports = merge(commonConfig,devConfig);