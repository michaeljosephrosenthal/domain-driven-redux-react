import createReducer from './createReducer'
import createAction from './createAction'
import { utils } from 'strictduck'

function nameActionCreator({name}){
    return name.toLowerCase().replace(/_([a-z])/g, g => g[1].toUpperCase())
}

function actionType({prefix, name}){
    return `@@${prefix}/${name}`
}

function flowToAction(prefix, name){
    return utils.nameObj({
        name: nameActionCreator({prefix, name}),
        object: function(payload){
            return {
                type: actionType({prefix, name}),
                payload
            }
        }
    })
}

function flowToReducer(prefix, name, reducerCase){
  return (state, {type, payload}) =>
      (type === actionType({prefix, name})) ?
          reducerCase(state, payload) :
          state
}

function mergeReducers(initialState, reducers){
    return (state = initialState, action) => reducers.reduce(
        (state, reducer) => reducer(state, action), state)
}

export function unpackDataFlowsIntoDomain(domain){
    let dataFlows = domain.get('dataFlows')
    let prefix = domain.prefix
    if(dataFlows && Object.keys(dataFlows).length){
        Object.keys(dataFlows).forEach(name => {
            domain.register('actions', nameActionCreator({prefix, name}), flowToAction(prefix, name))
        })
        domain.reducer = mergeReducers(
            domain.initialState || [],
            Object.keys(dataFlows).map(name => flowToReducer(prefix, name, dataFlows[name]))
        )
    }
    return domain
}

export default function unpackDataFlowsIntoDomains(domains){
    return Object.keys(domains)
        .reduce((newDomains, k) => {
            newDomains[k] = unpackDataFlowsIntoDomain(domains[k]);
            return newDomains
        }, {})
}
