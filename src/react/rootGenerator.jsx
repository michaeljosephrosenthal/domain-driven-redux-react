import React from 'react'
import defaultNavGenerator from './navGenerator'

export default function generator({paths, navGenerator=defaultNavGenerator}){
    let Nav = navGenerator({paths})
    return class Root extends React.Component {
        render(){
            return (
                <div>
                    <Nav/>
                    {this.props.children}
                </div>
            )
        }
    }
}
