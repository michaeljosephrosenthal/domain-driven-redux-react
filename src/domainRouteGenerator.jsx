import React from 'react'
import { Route } from 'react-router'
import domainsToRoutes from './react/domainsToRoutes'
import { swapContainersIntoRoutes } from './redux'

export default function domainRouteGenerator(domains){
    return swapContainersIntoRoutes(domainsToRoutes(domains), domains)
}
