const Merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

module.exports = function (env) {
    const path = `${__dirname}/dist/${env}`;
    return Merge(CommonConfig, {
        devtool: 'eval-source-map',
        output: {
            path: path,
            filename: "[name].js",
            // Used to map the correct SourceMap to the *.vue file
            devtoolModuleFilenameTemplate: info => {
                if (info.resource.match(/\.vue$/)) {
                    $filename = info.allLoaders.match(/type=script/) ? info.resourcePath : 'generated';
                } else {
                    $filename = info.resourcePath;
                }
                return $filename;
            }
        },
        plugins: [
            new CleanWebpackPlugin([path])
        ]
    });
}