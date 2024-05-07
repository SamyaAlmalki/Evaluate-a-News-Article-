const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const TerserPlugin = require ('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require ('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path : path.resolve (__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimizer: [ new TerserPlugin(), new OptimizeCssAssetsPlugin()],

    },
    module:  {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',

                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],


            },
        ],
    },

            plugins: [
                new HtmlWebpackPlugin ({
                    template: './src/client/views/index.html',
                    filename: './index.html',
                }),
                new MiniCssExtractPlugin ({
                    filename: '[name].css' ,
                    chunkFilename: '[id].css',
        
                }),
                new CleanWebpackPlugin(),
                ],
        
    
};