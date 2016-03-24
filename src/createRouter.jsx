import React           from 'react'
import { ReduxRouter } from 'redux-router'
import { Provider }    from 'react-redux'

export default function createRouter(store, routes) {
  return <Provider store={store}><ReduxRouter>{routes}</ReduxRouter></Provider>
}
