var webpack = require('webpack');
var path = require('path');
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require(path.join(__dirname, 'default-webpack-config'))

var app = new express()
var port = 3000
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

app.use(webpackHotMiddleware(compiler))

app.use(express.static('static'))
app.get("/*", function(req, res) {
  res.sendFile(path.join(process.cwd(), 'index.html'))
})

module.exports = app
