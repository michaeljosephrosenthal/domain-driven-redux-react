var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack-config')
var express = require('express')

var app = new express()
var port = 3000

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

/**
<!DOCTYPE html>
<html>
  <head>
    <title>Redux TodoMVC example</title>
    <link rel="stylesheet" href="/styles.css">
    <script src="/jquery.min.js"></script>
    <script src="/jquery.serializejson.js"></script>
    <script src="/semantic.js"></script>
  </head>
  <body>
    <div id="root"> </div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
*/
