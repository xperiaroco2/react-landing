const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
              includePaths: [
                'src/*'
              ]
            }
          }
        ])
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new ManifestPlugin(),
    new WebpackAssetsManifest(),
  ]
};