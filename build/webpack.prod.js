/**
 * 生产环境webpack配置
 */
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            chunks: ['blogbundle']
        }),
        new HtmlWebpackPlugin({
            filename: 'edit.html',
            template: path.resolve(__dirname, '../src/editWin/editIndex.html'),
            chunks: ['editor']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            generateStatsFile: true,
            statsOptions: { source: false }
        })
    ],
    optimization: { // css 压缩

    }
})