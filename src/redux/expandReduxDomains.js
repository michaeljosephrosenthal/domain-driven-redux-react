import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { unpackDataFlowsIntoDomain } from './dataFlow'

export function domainReduxConnector(domain){
    if(!(domain.get('actions') && Object.keys(domain.get('actions')).length))
        domain = unpackDataFlowsIntoDomain(domain);
    return connect(
        state => ({[domain.prefix]: state[domain.prefix]}),
        dispatch => ({
            actions: bindActionCreators(domain.get('actions'), dispatch)
        })
    )(domain.get('route').component)
}

export function connectDomainRoutes(domain){
    if(!(domain.get('actions') && Object.keys(domain.get('actions')).length)){
        domain = unpackDataFlowsIntoDomain(domain)
    }
    domain.register('route', 'original', domain.get('route').component)
    domain.register('route', 'component', domainReduxConnector(domain))
    domain.register('route', 'isContainer', true)
    return domain
}

function expandReactRouterRoute({domain, route}){
    domain.register('route', 'component', route.props.component)
    return domain
}

export function expandReduxDomain(domain){
    let { route } = domain.get('route')
    if(route)
        domain = expandReactRouterRoute({domain, route});
    let { component, isContainer } = domain.get('route')
    if( component && !isContainer
        && Object.keys(domain.get('dataFlows')).length
      ){
        domain = connectDomainRoutes(domain)
    }
    return domain
}

export default function expandReduxDomains(domains){
    return Object.keys(domains)
        .reduce((newDomains, k) => {
            newDomains[k] = expandReduxDomain(domains[k]);
            return newDomains
        }, {})
}

