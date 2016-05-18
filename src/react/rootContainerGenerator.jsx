import React from 'react'
import { Nav   } from '../nav'

if ($ES.CONTEXT == 'BROWSER') require('./soil.scss')

export default function Root(props) {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
