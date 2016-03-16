import { reactiveClient as ddReactiveClient } from 'strictduck-domain-driven-fullstack'
import store from './store'

export default ddReactiveClient.implement({
    name: 'DomainDrivenReduxReactClient',
    constructor({
        Domains,
        routes,
        element = document.getElementById('app'),
        store = store,
        middlewareGenerators = [],
        client = {},
    }){
        Object.assign(client, {
            Domains,
            store: new store({ Domains, routes, middlewareGenerators })(domainReducerGenerator(Domains)),
            element
        })

        if (!!routes) {
            client.router = createRouter(client.store, routes)
        }

        return [client]
    },
    provider(){
        ReactDOM.render(this.router, this.element)
    }
})
