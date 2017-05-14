const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

module.exports = function (env) {
    const path = `${__dirname}/dist/${env}`;
    return Merge(CommonConfig, {
        devtool: 'cheap-module-source-map',
        output: {
            path: path,
            filename: "[name].[hash].js",
            chunkFilename: '[id].[hash].chunk.js'
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
            new CleanWebpackPlugin([path]),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true, beautify: false, comments: false, sourceMap: true,
                mangle: { screw_ie8: true, keep_fnames: true }, compress: { screw_ie8: true }
            })
        ]
    });
}