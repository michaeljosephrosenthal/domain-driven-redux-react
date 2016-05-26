import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { AppContainer } from 'react-hot-loader';

export default function renderClient(){
    render(<AppContainer>{this.router}</AppContainer>, document.getElementById(this.elementId));
}
