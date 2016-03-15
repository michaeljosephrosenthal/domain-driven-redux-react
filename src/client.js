import { reactiveClient as ddReactiveClient } from 'strictduck-domain-drivers'
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
        super({routes, element, ...client})

        this._domains = Object.assign(this._domains || {}, Domains)

        this.store = new store({
            Domains, routes, middlewareGenerators
        })(domainReducerGenerator(this._domains))

        if (!!this.routes) {
            this.router = createRouter(this.store, this.routes)
        }

    },
    provider(){
        ReactDOM.render(this.router, this.element)
    }
})
