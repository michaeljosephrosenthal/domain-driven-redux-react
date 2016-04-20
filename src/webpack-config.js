var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = function({title='Bufflehead App', ...settings}){
    var htmlPlugin = new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: 'node_modules/html-webpack-template/index.ejs',
        appMountId: 'app',
        title: title,
        filename: 'index.html',
        inject: false,
        window: { settings }
    })
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
            fallback: path.join(process.cwd(), "node_modules") ,
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
            }
        },
        module: {
            loaders: [
                {
                test: /\.js$|\.jsx$/,
                loaders: [ "babel?presets[]=es2015&presets[]=stage-0&presets[]=react" ],
                exclude: /node_modules/,
                include: [process.cwd()]
            }, {
                test: /\.json$/, loader: 'json'
            }, {
                test: /\.css$/, loader: 'style!css!postcss'
            }, {
                test: /\.less$/, loader: 'style!css!less'
            }, {
                test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' + "includePaths[]=" + (path.resolve(process.cwd(), "./node_modules"))
            }, {
                test: /\.woff(2)?(\?.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" 
            }, {
                test: /\.ttf(\?.+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" 
            }, {
                test: /\.eot(\?.+)?$/, loader: "file" 
            }, {
                test: /\.svg(\?.+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.png$/, loader: "url-loader?limit=100000" 
            }, {
                test: /\.jpg$/, loader: "file-loader" 
            } 
            ]
        },
        resolve: {
            modulesDirectories: [
                "src",
                "node_modules",
                "web_modules"
            ],
            extensions: ["", ".json", ".js", ".jsx"],
            fallback: path.join(process.cwd(), "node_modules"),
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
