import { reactiveClient as ddReactiveClient } from 'strictduck-domain-driven-fullstack'
//import store from './store'
import createRouter from './createRouter'
import { render } from "react-dom";

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

        if (!!routes) {
            client.router = createRouter(client.store, routes)
        }

        return [client]
    },
    provider(){
        render(this.router || this.root, document.getElementById(this.elementId));
    }
})
