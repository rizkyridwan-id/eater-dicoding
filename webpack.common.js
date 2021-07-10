const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new WebpackPwaManifest({
      name: 'Eater - Restaurant Catalogue',
      short_name: 'Eater',
      description: 'Restaurant catalogue provider',
      start_url: 'src/templates/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#15141f',
      icons: [
        {
          src: 'src/public/icons/48x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'src/public/icons/500x500.png',
          sizes: '500x500',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        })
      ]
    }),
    new MiniCssExtractPlugin()
  ],
};
