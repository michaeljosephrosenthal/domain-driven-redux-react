var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: process.cwd(),
    entry: [
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'src/client')
    ],
    output: {
        path: path.join(process.cwd(), '/dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({ JAVASCRIPT: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify('DEVELOPMENT') } }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin(
          'require("source-map-support").install();',
          { raw: true, entryOnly: false }
        )
    ],
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loaders: [ 'babel-loader?{presets:["react","es2015","stage-0"],plugins:["transform-export-extensions"],env:{development:{presets:["react-hmre"]}, production: {plugins:["transform-react-remove-prop-types","transform-react-constant-elements","transform-react-inline-elements"]}}}' ],
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
        extensions: [".json", ".js", ".jsx"],
    },
}
