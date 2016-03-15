import { createHistory }                         from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'

import { clientStore as ddStore } from 'strictduck-domain-drivers'
import domainMiddlewareGenerator from './domainMiddlewareGenerator'
import domainReducerGenerator from './domainReducerGenerator'

export default ddStore.implement({
    name: 'ReduxStoreDomainDriver',
    constructor({
        Domains,
        routes,
        store=createStore, 
        defaultMiddlewareGenerators=[ domainMiddlewareGenerator ],
        middlewareGenerators=[]
    }){
        super(
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
            )(store)(domainReducerGenerator(Domains))
        )
    },
    provider(){}
})
/*
 * DomainDrivenStoreEnhancer
 *  - requires a DomainMiddlewareGenerator
 */
