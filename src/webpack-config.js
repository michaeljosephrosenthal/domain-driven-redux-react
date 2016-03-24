var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    context: process.cwd(),
    debug: true,
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(process.cwd(), "dist"),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
		new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify('PRODUCTION')} }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
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
    },
    resolveLoader: { fallback: path.join(process.cwd(), "node_modules") },
    node: {
		__dirname: true,
		fs: 'empty'
	}
}
