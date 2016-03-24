import { reactiveClient as ddReactiveClient } from 'strictduck-domain-driven-fullstack'
import reduxStore from './store'
import createRouter from './createRouter'
import domainRouteGenerator from './domainRouteGenerator'
import expandReduxDomains from './expandReduxDomains'

const provider = ($ES.CONTEXT == 'NODE' ? require('./provideServerDomain') : require('./render')).default;

export default ddReactiveClient.implement({
    name: 'DomainDrivenReduxReactClient',
    constructor({
        Domains: domains,
        elementId = 'app',
        DomainDrivenClientStore: Store = reduxStore,
        routes,
        middlewareGenerators = [],
        client = {}
    }){
        if (Store instanceof Error) Store = reduxStore;

        domains = expandReduxDomains(domains)

        Object.assign(client, {
            routes: routes || client.routes || domainRouteGenerator(domains),
            elementId
        })

        client.store = new Store({ domains, routes: client.routes, middlewareGenerators })
        client.router = createRouter(client.store, client.routes)

        return [client]
    },
    provider(){
        return provider.bind(this)()
    }
})
