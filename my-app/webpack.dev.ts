import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');

const devConfig: Configuration = merge(commonConfiguration, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './build',
        historyApiFallback: true,
        hot: true,
        port: 3000
    },
});

module.exports = devConfig;