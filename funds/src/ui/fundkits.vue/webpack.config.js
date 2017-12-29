const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        fundkits:'./src/entry.js',
        vendor:['vue','vue-router','axios']//,'babel-polyfill']
    },

    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

    //To determine the handlers to file types
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
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
    },

    plugins:[
        new CleanWebpackPlugin(
            ['dist/*.bundle.js.map', 'dist/*.bundle.js'],　 //delete mapped file
            { root: __dirname, verbose: true, dry: false}
        ),

        new webpack.optimize.CommonsChunkPlugin({
            names: ["fundkits", "vendor"],
            minChunks: 2
        })
    ],
    
    //for webpack-dev-server config
    devServer: {
        contentBase: "./dist",//local server folder root
        historyApiFallback: true,//no re-dirction
        inline: true//hot refresh
    },
    
    //to fix issue: 
    /*[Vue warn]: 
    You are using the runtime-only build of Vue where the template compiler is not available. 
    Either pre-compile the templates into render functions, or use the compiler-included build.
    */
    resolve: {
        alias: {
            'vue':  'vue/dist/vue.js',
            'vue$': 'vue/dist/vue.esm.js'
        }
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