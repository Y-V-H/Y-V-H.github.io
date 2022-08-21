import { Configuration } from 'webpack';
import 'webpack-dev-server';

const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');

const prodConfig: Configuration = merge(commonConfiguration, {
    mode: 'production',
});

module.exports = prodConfig;