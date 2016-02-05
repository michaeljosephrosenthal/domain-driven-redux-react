import { createHistory }                         from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider }                              from 'react-redux'
import thunk                                     from 'redux-thunk'
import { reduxReactRouter, routerStateReducer }  from 'redux-router'
import createLogger                              from 'redux-logger'
import sagaMiddleware                            from 'redux-saga'

import domainMiddleware                          from './domainMiddleware'

function sagaMiddlewareGenerator(domains){
  let sagas = []
  for (var domainName in domains) {
    let sagasDict = domains[domainName].get('sagas')
    for (var sagaName in sagasDict) {
      sagas.push(sagasDict[sagaName])
    }
  }
  return sagaMiddleware(...sagas),
}

export default function createStore(routes, domains, middlewareGenerators=[]) {
  return compose(
    applyMiddleware(
      sagaMiddlewareGenerator(domains),
      domainMiddleware,
      thunk,
      ...middlewareGenerators.map(generator => generator(domains)),
      createLogger({
        predicate: (getState, action) =>
        (process.env.NODE_ENV === 'development' &&
        action['type'] !== 'EFFECT_TRIGGERED' &&
        action['type'] !== 'EFFECT_RESOLVED' &&
        !action['type'].startsWith("@@redux")),
        actionTransformer: (action) => {
          if (action['type'] === '@@reactuate/action') {
            return action.payload
          } else {
            return action
          }
        }
      })
    ),
    reduxReactRouter({routes, createHistory})
  )(createStore)
}
