const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV?.trim() === "development";

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", "..."],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: ["/node_modules/"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  ...(isDevelopment
    ? {
        mode: "development",
        devtool: "inline-source-map",
      }
    : {
        mode: "production",
        output: {
          filename: "[name].[contenthash].js",
          path: path.resolve(__dirname, "dist"),
          publicPath: "/", // root
          clean: true,
        },
      }),
};
