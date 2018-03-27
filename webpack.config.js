module.exports = {
  entry: './index.js',
  output: {
    filename: 'game.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['airbnb'],
        },
      },
    ],
  },
};
