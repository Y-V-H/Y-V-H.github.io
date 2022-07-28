const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Application name",
            template: './src/index.html'
        }),
    ]
}

module.exports = config;