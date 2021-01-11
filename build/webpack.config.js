const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        portalbundle: path.resolve(__dirname, '../index.tsx'),
        editor: path.resolve(__dirname, '../src/editWin/editorIndex.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出位置当前目录
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"] // 在执行import引入时，先通过ts后缀尝试，再通过js后缀尝试
    },
    module: {
        rules: [
            { 
                test: /\.(js|ts)x?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    // { 提取独立css文件 会造成run dev报错 暂时注释
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath: './'
                    //     },
                    // }, 
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 1024 * 8,
                      name: '[name].[ext]',
                      publicPath: './'
                    }
                  }
                ]
            }
        ]
    },
    devtool: 'source-map'
}