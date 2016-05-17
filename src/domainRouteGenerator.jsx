import React from 'react'
import { Route } from 'react-router'

function filterDomainsForType(domains, type){
    return Object.keys(domains)
        .map(k => domains[k])
        .filter(domain => Object.keys(domain.get(type)).length)
}

function route(domain){
    return domain.get('route').route || (<Route path="/" component={domain.get('route').component}/>)
}

function extractRootRoute(domains){
    return filterDomainsForType(domains, 'route')
        .filter(domain => domain.get('route').path == '/')
        .map(route)[0]
}

function findContainerizedRoutes(domains){
    return filterDomainsForType(domains, 'route')
        .map(d => d.get('route'))
        .filter(route => route.isContainer)
}

function applyToChildren({children, block}){
    if(children){
        return Array.isArray(children) ?
            children.map(block) :
            block(children)
    } else {
        return children
    }
}

function swapChildrenComponentsForContainers({children, domainRoutes}){
    return applyToChildren({
        children,
        block: route => swapRouteComponentForContainer({route, domainRoutes})
    })
}
export function swapRouteComponentForContainer({route, domainRoutes}){
    console.log(route)
    let children = route.props.children
    let match = domainRoutes.filter(r => r.original == route.props.component)[0]
    return React.cloneElement(
        route,
        match ? {
            component: match.component,
            key: route.props.key || route.props.path || '/'
        } : {key: route.props.key || route.props.path || '/'},
        swapChildrenComponentsForContainers({children, domainRoutes})
    )
}

function swapContainersIntoRoutes(route, domains){
    console.log(route)
    return swapRouteComponentForContainer({
        route,
        domainRoutes: findContainerizedRoutes(domains)
    })
}

export default function domainRouteGenerator(domains){
    return swapContainersIntoRoutes(extractRootRoute(domains), domains)
}
