const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    // target: 'node',
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // generator: {
                //     filename: 'img/[hash][ext]'
                // },
            },
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