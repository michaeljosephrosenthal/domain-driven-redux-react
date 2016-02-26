var path = require('path')

var webpack = require('webpack')

module.exports = {
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
        },
    },
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'src/index')
    ],
    output: {
        path: path.join(process.cwd(), '/dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loaders: [ 'babel-loader?{presets:["react","es2015","stage-0"],plugins:["transform-export-extensions"],env:{development:{presets:["react-hmre"]}, production: {plugins:["transform-react-remove-prop-types","transform-react-constant-elements","transform-react-inline-elements"]}}}' ],
                exclude: /node_modules/,
                include: [console.log(process.cwd()) || process.cwd()]
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
        extensions: ["", ".json", ".js", ".jsx"],
    },
}
