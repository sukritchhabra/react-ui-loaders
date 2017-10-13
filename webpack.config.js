const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy assets to /dist

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
    },

    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([ {from:'./src/assets/images',to:'assets/images'} ]),
        new HtmlWebpackPlugin({ title: 'Output Management' }),
        new ExtractTextPlugin("styles.css"),
    ]
};