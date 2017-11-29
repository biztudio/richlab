var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        richlab: './src/entry.ts',
        jdata:'./data/fundlist_db.json',
        vendor:['axios', 'vue', 'vue-class-component', 'vue-router', 'element-ui', 'es6-shim', 'lodash']
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['richlab', 'jdata', 'vendor' ]
        }),
       ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/]
                }
            },

            //loader for typescript
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
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
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
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
      },
      performance: {
        hints: false
      },
      devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]);
  }