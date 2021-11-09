/* eslint-disable no-undef */

module.exports = {
  mode: 'production',
  entry: {
    index: `${__dirname}/src/index.ts`,
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
