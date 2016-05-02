import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'

import { clientStore as ddStore } from 'strictduck-domain-driven-fullstack'
import combineAllDomainReducers from './combineAllDomainReducers'

const createHistory  = ($ES.CONTEXT == 'BROWSER' ? require('history').createHistory : require('history/lib/createMemoryHistory'))

export default class DomainDrivenReduxStore extends ddStore.default {

    constructor({
        domains, routes,
        store=createStore, 
        defaultMiddlewareGenerators=[],
        middlewareGenerators=[]
    }){
        let reducer = combineAllDomainReducers(domains)
        super(
            compose(
                applyMiddleware(
                    ...defaultMiddlewareGenerators.map(
                        generator => generator(domains)
                    ),
                    ...middlewareGenerators.map(
                        generator => generator(domains)
                    ),
                ),
                reduxReactRouter({routes, createHistory})
            )(store)(reducer)
        )
        this.reducer = reducer
    }

}
