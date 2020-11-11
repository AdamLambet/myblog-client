/**
 * 本地开发环境webpack配置
 */
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

 module.exports = merge(commonConfig, {
     mode: 'development',
     devServer: {
         contentBase: path.resolve(__dirname, '../dist'),
         compress: true,
         host: 'localhost',
         port: 8888,
         open: true,
         hot: true
     },
     devtool: 'source-map'
 })