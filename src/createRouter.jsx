import React           from 'react'
import { ReduxRouter } from 'redux-router'
import { Provider as ReduxProvider }    from 'react-redux'
import HotProvider from './HotReloadingProvider'

let Provider = ($ES.ENV == 'PRODUCTION') ? ReduxProvider : HotProvider

export default function createRouter(store, routes) {
  return <Provider store={store}><ReduxRouter>{routes}</ReduxRouter></Provider>
}
