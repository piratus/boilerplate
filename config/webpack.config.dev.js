var path = require('path')
var autoprefixer = require('autoprefixer')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackNotifier = require('webpack-notifier')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
var WatchMissingNodeModulesPlugin = require('../scripts/utils/WatchMissingNodeModulesPlugin')
var paths = require('./paths')
var env = require('./env')

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: ['*-loader'],
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev'),
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\/favicon.ico$/,
        include: [paths.appSrc],
        loader: 'file',
        query: {
          name: 'favicon.ico?[hash:8]',
        },
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          attrs: ['link:href'],
        },
      },
    ],
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
      }),
    ]
  },
  plugins: [
    new WebpackNotifier({
      alwaysNotify: true,
      excludeWarnings: true,
      title: 'React App',
      contentImage: './favicon.png',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ],
}
