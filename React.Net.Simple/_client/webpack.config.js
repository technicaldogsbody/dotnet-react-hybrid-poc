const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = [{
    entry: './src/component-index.js',
    devtool: "eval-source-map",
    output: {
        filename: 'component.bundle.js',
        path: path.resolve(__dirname, '../wwwroot/scripts')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    extractComments: 'all',
                    compress: {
                        drop_console: false
                    }
                }
            })
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            exclude: ['vendor.js']
        })
    ]
},
{
    entry: './src/habitat-index.js',
    devtool: "eval-source-map",
    output: {
        filename: 'habitat.bundle.js',
        path: path.resolve(__dirname, '../wwwroot/scripts')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    extractComments: 'all',
                    compress: {
                        drop_console: false
                    }
                }
            })
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            exclude: ['vendor.js']
        })
    ]
}];
