const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']  // 增加 'postcss-loader' , 单独抽离css ， 注意顺序
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'static/', // 图片输出的路径
                    limit: 10 * 1024
                  }
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};