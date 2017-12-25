const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy assets to /dist

module.exports = {
    entry: {
      'app': [
        'react-hot-loader/patch',
        './src/app.jsx',
      ],

      'react-ui-loading': [
        'react-hot-loader/patch',
        './src/index.jsx',
      ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          }))
        }
      ]
    },

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        styles: path.resolve(__dirname, 'src/components/styles'),
      },
      extensions: ['.js', '.jsx']
    },

    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([ {from:'./src/assets/images',to:'assets/images'} ]),
        new HtmlWebpackPlugin({
          title: 'Output Management',
          inject: false,
          chunks: ['app'],
          template: require('html-webpack-template'),
          appMountId: 'content'
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new Dotenv({
          path: './.env',
        }),
    ]
};
