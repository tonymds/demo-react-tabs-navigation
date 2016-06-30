const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  target: 'web',
  entry: [
    './app/app-init'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: "app-init.js",
    chunkFilename: "chunk-[name].js"
  },
  watchOptions: {
    poll: true
  },
  module: {
  loaders: [
    {test: /\.jsx$/, include: __dirname + "/app/", loaders: ['babel']},
    {test: /\.js$/, include: __dirname + "/app/", loaders: ['babel']}
  ]
  }
  ,
  plugins: [
    new WebpackShellPlugin({onBuildEnd:['node_modules/.bin/eslint webpack.config.js app'], verbose:true, dev:false})
  ]
};
