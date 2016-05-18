import React from 'react'
import { IndexRedirect, Route } from 'react-router'
import generateDefaultRoot from './rootGenerator'

function filterDomainsForType(domains, type){
    return Object.keys(domains)
        .map(k => domains[k])
        .filter(domain => Object.keys(domain.get(type)).length)
}

function addKey(route){
    return React.cloneElement(
        route,
        {
            ...route.props,
            key: route.props.key || route.props.path || '/'
        },
        route.children
    )
}

function resolveRouteFromDomain({prefix, route: domainRoute, childDomains=[]} = {route: {}}){
    if(React.isValidElement(domainRoute))
        return addKey(domainRoute);

    let {path = prefix, route, indexRedirect, component} = domainRoute

    if(React.isValidElement(route))
        return addKey(route);

    if(indexRedirect)
        childDomains.push({route: <IndexRedirect key={indexRedirect} to={indexRedirect}/>});

    return (
        <Route key={path} { ...{path, component} }>
            {childDomains.map(resolveRouteFromDomain)}
        </Route>
    )
}


function extractRootRouteDomain(domains){
    let rootDomain = filterDomainsForType(domains, 'route')
        .filter(domain => domain.get('route').path == '/')[0]
    return rootDomain || Error('A domain with a root path "/" must be specified')
}

function oneSlash(str){
    return str.startsWith('/') ? str : `/${str}`
}

function extractPath({prefix, route: domainRoute}){
    if(React.isValidElement(domainRoute))
        return oneSlash(domainRoute.props.path);

    let {path = prefix, route } = domainRoute

    if(React.isValidElement(route))
        return oneSlash(route.props.path);
    
    if(path)
        return oneSlash(path);
}

function resolveRootRoute(domains){
    let rootDomain = extractRootRouteDomain(domains)
    rootDomain.childDomains = rootDomain.childDomains ||
        filterDomainsForType(domains, 'route').filter(domain => domain.get('route').path != '/') || []
    rootDomain.route.component = rootDomain.route.component || generateDefaultRoot({paths: rootDomain.childDomains.map(extractPath)})
    return resolveRouteFromDomain(rootDomain)
}

export default function domainsToRoutes(domains){
    return resolveRootRoute(domains)
}
