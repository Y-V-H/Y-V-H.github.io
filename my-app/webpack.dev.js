
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');

const devConfig = merge(commonConfiguration, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './build',
    },
});

module.exports = devConfig;