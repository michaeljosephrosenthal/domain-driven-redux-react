import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
import config from './webpack-config'
import { Domain } from 'strictduck-domain-driven-fullstack'
import { reactiveClient as ddReactiveClient } from 'strictduck-domain-driven-fullstack'

function serverDomain(){
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

export default ddReactiveClient.implement({
    name: 'DomainDrivenReduxReactClient',
    constructor({
        Domains,
        routes,
        root,
        elementId = 'app',
        store = store,
        middlewareGenerators = [],
        client = {},
    }){
        Object.assign(client, {
            Domains,
            //store: new store({ Domains, routes, middlewareGenerators })(domainReducerGenerator(Domains)),
            elementId
        })
        return [client]
    },
    provider(){
        return serverDomain()
    }
})
