const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');

const prodConfig = merge(commonConfiguration, {
    mode: 'production',
});

module.exports = prodConfig;