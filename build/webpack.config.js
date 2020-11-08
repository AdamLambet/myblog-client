const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出位置当前目录
        filename: 'mybundle.js'
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
                      limit: 8192
                    }
                  }
                ]
            }
        ]
    }
}