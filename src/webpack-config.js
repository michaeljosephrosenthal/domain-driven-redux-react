var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var nodeExternals = require('webpack-node-externals')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = function({title='Bufflehead App', ...settings}){
    var htmlPlugin = new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: require('html-webpack-template'),
        appMountId: 'app',
        title: title,
        filename: 'index.html',
        inject: false,
        window: { settings }
    })
    var compound_version =  'browser_' + $ES.ENV.toLowerCase()
    var fallbacks = [
        path.join(process.cwd(), "node_modules/polypacker/node_modules"),
        path.join(process.cwd(), "node_modules/domain-driven-redux-react/node_modules")
    ]
    return {
        ...($ES.ENV != 'PRODUCTION' ? {devtool:  'source-map'} : {}),
        context: process.cwd(),
        debug: ($ES.ENV != 'PRODUCTION'),
        target: 'web',
        entry: ($ES.ENV != 'PRODUCTION') ? [
            'webpack-hot-middleware/client',
            './src/index'
        ] : [ './src/index' ],
        output: {
            path: path.join(process.cwd(), "dist"),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        plugins: ($ES.ENV != 'PRODUCTION') ? [
            new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify($ES.ENV)} }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            htmlPlugin,
            new HtmlWebpackHarddiskPlugin()
        ] : [
            new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify($ES.ENV)} }),
            new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            htmlPlugin,
            new HtmlWebpackHarddiskPlugin()
            //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
        ],
        resolveLoader: {
            moduleDirectories: ["node_modules"],
            root: path.join(process.cwd(), "node_modules"),
            fallback: fallbacks,
            alias: { polypack: 'callback?polypack' }
        },
        callbackLoader: {
            polypack: function(mod) {
                var compound_version = 'browser_' + $ES.ENV.toLowerCase()
                if(mod){
                    return 'require("' + mod + '/dist/for/' + compound_version + '") //polypacked secondhand'
                } else {
                    return 'require("./for/' + compound_version + '") //polypacked by dist'
                }
            },
        },
        module: {
            loaders: [
                {
                test: /\.js$|\.jsx$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: [process.cwd()],
                query: {
                    presets: ['es2015', 'react', 'stage-0'].map(preset => `babel-preset-${preset}`)
                },
            }, {
                test: /\.json$/, loader: 'json-loader'
            }, {
                test: /\.css$/, loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]=' + (path.resolve(process.cwd(), "./node_modules"))
            }, {
                test: /\.woff(2)?(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            }, {
                test: /\.ttf(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
            }, {
                test: /\.eot(\?.+)?$/, loader: "file-loader" 
            }, {
                test: /\.svg(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.png$/, loader: "url-loader?limit=100000" 
            }, {
                test: /\.jpg$/, loader: "file-loader" 
            } 
            ]
        },
        resolve: {
            modulesDirectories: [ "node_modules", "polypacker/node_modules" ],
            extensions: ["", ".json", ".js", ".jsx"],
            root: path.join(process.cwd(), "node_modules"),
            fallback: fallbacks,
            alias: {
                react: path.join(process.cwd(), './node_modules/react'),
            },
        },
        node: {
            __dirname: true,
            fs: 'empty'
        }
    }
}
