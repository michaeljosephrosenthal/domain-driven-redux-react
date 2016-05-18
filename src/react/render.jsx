import { render, unmountComponentAtNode } from "react-dom";

export default function renderClient(){
    unmountComponentAtNode(document.getElementById(this.elementId))
    render(this.router, document.getElementById(this.elementId));
}
