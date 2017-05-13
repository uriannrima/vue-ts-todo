const Merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

module.exports = function (env) {
    const path = `${__dirname}/dist/${env}`;
    return Merge(CommonConfig, {
        devtool: 'inline-sourcemap',
        output: {
            path: path,
            filename: "[name].js"
        },
        plugins: [
            new CleanWebpackPlugin([path])
        ]
    });
}