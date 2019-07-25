const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: ['@babel/polyfill', './app/index.js', './stylesheets/index.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/')
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      allChunks: true
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      // options: {
      //   presets: ['react', 'env']
      // }
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
            reloadAll: true
          },
        },
        'css-loader',
        'sass-loader'
      ]
    },
    ]
  },
};
