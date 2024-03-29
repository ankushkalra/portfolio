const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 3636,
      openAnalyzer: true
    })
  ]
});
