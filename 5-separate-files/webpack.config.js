const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  optimization: { usedExports: true },
  entry: path.resolve(__dirname, 'app.js'),
  externals: { react: 'React', 'react-dom': 'ReactDOM' },
  resolve: {
    modules: [
      path.resolve(__dirname, 'packages'),
      path.resolve(__dirname, '../node_modules')
    ]
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
  }
};
