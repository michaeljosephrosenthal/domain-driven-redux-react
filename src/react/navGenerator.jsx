import React from 'react'
import defaultNavGenerator from './navGenerator'

export default function generator({paths}){
    return class Nav extends React.Component {
        render(){
            return (
                <nav>
                    <div className="container">
                        <ul>
                            {paths.map(path => (
                                <li key={path}><a href={path}>{path}</a></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}
