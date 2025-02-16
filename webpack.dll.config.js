const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        dll: './src/dll.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: '[name]',
        chunkLoading: 'jsonp',
        chunkFilename: 'chunk_[name]_[id]_[chunkhash].js',
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'dll',
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            entryOnly: false,
            format: true,
        }),
    ],
    devtool: 'eval-cheap-module-source-map',
    cache: false,
    externals: {},
    optimization: { moduleIds: 'deterministic' },
    node: { __dirname: 'mock', __filename: 'mock', global: true },
};
