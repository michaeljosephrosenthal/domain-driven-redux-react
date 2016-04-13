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
    if($ES.ENV == 'PRODUCTION'){
        compiler.run((err, stats) => {
            if(err) console.log('err', err);
        })
    }
    return new Domain.implementation({
        name: '',
        middleware: ($ES.ENV != 'PRODUCTION' ? [
            webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }),
            webpackHotMiddleware(compiler),
            express.static('static')
        ] : [ ]),
        routes: {
            ...( $ES.ENV == 'PRODUCTION' ? {
                'static/bundle.js': {
                    methods: ['get'],
                    handlers: [ (req, res, next) => res.sendFile(path.join(process.cwd(), 'dist/bundle.js')) ]
                }
            } : {}),
            '*': {
                methods: ['get'],
                handlers: [ (req, res, next) => res.sendFile(path.join(process.cwd(), 'index.html')) ]
            }
        },
        order: $ES.ENV == 'PRODUCTION' ? ['static/bundle.js', '*'] : ['*'] 
    })
}
