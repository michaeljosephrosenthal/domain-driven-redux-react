import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack-config'

const compiler = webpack(config)

export default function provide(app) {
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
    app.use(express.static('static'))
    app.get("/*", function(req, res) {
        res.sendFile(path.join(process.cwd(), 'index.html'))
    })
    return app
}
