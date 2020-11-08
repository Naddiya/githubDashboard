// Node import
const path = require('path');

// for dist 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// devserv config
const host = 'localhost';
const port = 8080;

const devMode = process.env.NODE_ENV !== 'production';

// webpack config
module.exports = {
  // default build to development
  mode: 'development',
  // targets src for imports
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  // webpack's entry points
  entry: {
    app: [
      // Styles
      './src/styles/index.scss',
      // JS
      './src/index.js',
    ],
  },
  // output
  output: {
    // Bundle name
    filename: 'app.js',
    // vendor bundle's name if optimized / splitChunks est activée
    chunkFilename: 'vendors.js',
    // Bundle's targets
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  // Build optimization
  optimization: {
    // splitting code
    splitChunks: {
      chunks: 'all',
    },
    // minifiying
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // switch to true for JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // Modules
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // babel with cache option
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // CSS / SASS / SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // style-loader or style file
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // loading css
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
          // SASS
          'sass-loader',
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(ttf|otf|eot|woff2?)(\?[a-z0-9]+)?$/,
        exclude: /medias/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    overlay: true, // Overlay client if build error
    stats: 'minimal', // limited console logs
    progress: true, // build progress
    inline: true, // reloading client if changes
    open: true, // opening client
    historyApiFallback: true,
    host: host,
    port: port,
  },
  plugins: [
    // use src/index.html as origin for dist 
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // export styles in minified css file for dist
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
