import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
import config from './webpack-config'
import { Domain } from 'strictduck-domain-driven-fullstack'
import { reactiveClient as ddReactiveClient } from 'strictduck-domain-driven-fullstack'

export default function serverDomain(){
    const compiler = webpack(config)
    return  new Domain.implementation({
        name: '',
        middleware: [
            webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }),
            webpackHotMiddleware(compiler),
            express.static('static')
        ],
        routes: {
            '*': {
                methods: ['get'],
                handlers: [ (req, res, next) => res.sendFile(path.join(process.cwd(), 'index.html')) ]
            }
        }
    })
}