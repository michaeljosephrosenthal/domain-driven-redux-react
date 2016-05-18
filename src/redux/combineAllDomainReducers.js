import combineReducers from './combineReducers'
export default function combineAllDomainReducers(domains){
    return combineReducers(
        Object.keys(domains)
            .filter(key => domains[key].reducer)
            .reduce((map, key) => {
                map[key] = domains[key].reducer;
                return map
            }, {})
    )
}
