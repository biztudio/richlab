const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

	//To determine the handlers to file types
    module:{
        rules: [
    
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },        
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },    
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)(\?\S*)?$/,
                loader: "file-loader",
                query: {
                    name: 'assets/[name].[ext]?[hash]'
                }
            }
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#nosources-source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: { warnings: false }
        }),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ])
}
else if (process.env.NODE_ENV === 'development') {
    module.exports.devtool = '#eval-source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"development"'}
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify:true,
            compress: { warnings: false }
        })
    ])
}