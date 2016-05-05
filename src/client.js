import { reactiveClient as ddReactiveClient, storePersistencePlugin } from 'strictduck-domain-driven-fullstack'
import reduxStore from './store'
import createRouter from './createRouter'
import domainRouteGenerator from './domainRouteGenerator'
import expandReduxDomains from './expandReduxDomains'

const provider = ($ES.CONTEXT == 'NODE' ? require('./provideServerDomain') : require('./render')).default

export default ddReactiveClient.implement({
    name: 'DomainDrivenReduxReactClient',
    constructor({
        Domains: {settings, ...domains},
        elementId = 'app',
        DomainDrivenClientStore: Store = reduxStore,
        DomainDrivenStorePersistencePlugin: persister,
        routes,
        middlewareGenerators = [],
        client = {}
    }){
        if(!(persister instanceof Error))
            middlewareGenerators.push((domains) => persister.middlewareGenerator({db: persister.db, domains}));

        if (Store instanceof Error) Store = reduxStore;

        domains = expandReduxDomains(domains)

        Object.assign(client, {
            routes: routes || client.routes || domainRouteGenerator(domains),
            elementId
        })
        if(persister && persister.authenticateRoutes)
            client.routes = persister.authenticateRoutes(client.routes)

        client.store = new Store({ domains, routes: client.routes, middlewareGenerators })
        client.router = createRouter(client.store, client.routes)
        client.settings = ($ES.CONTEXT == 'NODE' ? settings.client : settings)

        return [client]
    },
    provider(){
        return provider.bind(this)(this.settings)
    }
})
