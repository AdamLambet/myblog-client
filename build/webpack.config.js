const path = require('path');

module.exports = {
    entry: {
        blogbundle: path.resolve(__dirname, '../index.tsx'),
        editor: path.resolve(__dirname, '../src/editWin/editorIndex.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出位置当前目录
        filename: '[name].[contenthash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
                      limit: 1024 * 8
                    }
                  }
                ]
            }
        ]
    }
}