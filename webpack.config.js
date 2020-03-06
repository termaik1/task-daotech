const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ];
  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  watch: true,
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["src", "node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store")
    }
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 4200,
    hot: true
  },
  devtool: "source-map",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
              modules: true
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};
