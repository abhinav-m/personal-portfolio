module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015", "stage-1"]
          }
        }
      },
      {
        test: /(\.scss|\.css)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  // Emit source maps so we can debug our code in the browser
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
