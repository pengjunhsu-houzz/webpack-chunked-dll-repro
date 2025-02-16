const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        chunkLoading: 'jsonp',
        chunkFilename: 'chunk_[name]_[id]_[chunkhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/dll-manifest.json'),
        }),
    ],
    devtool: 'eval-cheap-module-source-map',
    cache: false,
    externals: {},
    optimization: { moduleIds: 'deterministic' },
    node: { __dirname: 'mock', __filename: 'mock', global: true },
};
