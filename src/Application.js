import t               from 'tcomb'
import ReactDOM        from 'react-dom'

import createStore     from './createStore'
import combineReducers from './combineReducers'
import createRouter    from './createRouter'

export default class Application {

  constructor(properties) {
    this.routes = properties.routes
    this.element = properties.element || document.getElementById('app')
    this.domains = properties.domains || {}
    this.middleware = properties.middleware || []
    this.reducers = {}
    for (var key in this.domains) {
      if (!t.Nil.is(this.domains[key].reducer)) {
        this.reducers[key] = this.domains[key].reducer
      }
    }
    if (!!this.routes) {
      this.store = createStore(this.routes, this.domains, middleware)(combineReducers(this.reducers))
      this.router = createRouter(this.store, this.routes)
    }
  }

  render() {
    ReactDOM.render(this.router, this.element)
  }

}
