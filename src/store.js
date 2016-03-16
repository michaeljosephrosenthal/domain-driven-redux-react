import { createHistory }                         from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'

import { clientStore as ddStore } from 'strictduck-domain-driven-fullstack'
import domainMiddlewareGenerator from './domainMiddlewareGenerator'
import combineAllDomainReducers from './combineAllDomainReducers'

export default ddStore.implement({
    name: 'DomainDrivenReduxStore',
    constructor({
        Domains, routes,
        store=createStore, 
        defaultMiddlewareGenerators=[ domainMiddlewareGenerator ],
        middlewareGenerators=[]
    }){
        return [
            compose(
                applyMiddleware(
                    ...defaultMiddlewareGenerators.map(
                        generator => generator(Domains)
                    ),
                    ...middlewareGenerators.map(
                        generator => generator(Domains)
                    ),
                ),
                reduxReactRouter({routes, createHistory})
            )(store)(combineAllDomainReducers(Domains))
        ]
    },
    provider(){}
})
/*
 * DomainDrivenStoreEnhancer
 *  - requires a DomainMiddlewareGenerator
 */
