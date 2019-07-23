const path = require('path');

const root = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist', 'static');

module.exports = {
  entry: {
    app: path.resolve(root, 'index.js'),
  },
  output: {
    pathinfo: true,
    path: outputPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: root,
        enforce: 'pre',
        use: {
          loader: require.resolve('eslint-loader'),
          options: {
            eslintPath: require.resolve('eslint'),
          },
        },
      },
      {
        test: /\.jsx?$/,
        include: root,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
