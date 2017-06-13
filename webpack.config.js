const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: [/\.scss$/,/\.css$/],
        loaders: ['style-loader', 'css-loader', 'sass-loader' ]
      },
      { 
        test: /\.(jpg|png|svg)$/, 
        loader: 'file-loader' 
      },
      { 
         test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
         loader: 'imports-loader?jQuery=jquery' 
      },
      { 
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, 
        loader: 'imports-loader?jQuery=jquery' 
      },
      { 
        test: /\.(woff2?|svg)$/, 
        loader: 'url-loader?limit=10000' 
      },
      { 
        test: /\.(ttf|eot)$/, 
        loader: 'file-loader' 
      }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};