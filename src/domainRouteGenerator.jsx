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

export default function domainRouteGenerator(domains){
    return extractRootRoute(domains)
}
