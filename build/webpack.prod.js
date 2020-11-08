/**
 * 生产环境webpack配置
 */
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, '../index.html') })
    ]
})