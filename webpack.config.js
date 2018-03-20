const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require ('write-file-webpack-plugin');
const webpack = require('webpack');

const limits = {
    url: 8192,
};

webpackConfig = {
    entry: {
        bundle: "./src/index.tsx",
        styles: "./src/assets/scss/styles.scss",
    },
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: './public',
        filename: '[name].js',
        library: '[name]',
    },
    

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                exclude: [/node_modules/],
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", 
              test: /\.js$/, 
              loader: "source-map-loader" 
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: limits.url,
                            mimetype: 'application/octet-stream',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            },
              
        ]
    },
    
    plugins: [
        new ExtractTextPlugin('style.css'),
        // этот плагин нужен для создани файлов в dev-режиме
        new WriteFilePlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                contentBase: path.join(__dirname, "./public"),
            }
        })
    ]
};

module.exports = webpackConfig;