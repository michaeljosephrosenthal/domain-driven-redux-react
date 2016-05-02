import { render, unmountComponentAtNode } from "react-dom";

export default function renderClient(){
    unmountComponentAtNode(document.getElementById(this.elementId))
    render(this.router, document.getElementById(this.elementId));
}

/*
//import { AppContainer } from 'react-hot-loader';
export default function renderClient(){
    render(
        <AppContainer component={this.router} />,
        document.getElementById(this.elementId)
    )


    if (module.hot && this.rootModule) {
        module.hot.accept(this.rootModule, () => {
            render(
                <AppContainer component={require(this.rootModule).default} />,
                document.getElementById(this.elementId)
            )
        })
    }

}
const defaultTemplate = ({title, client, serverUrl}) => <html>

export function render({template = defaultTemplate, client}){
server.ext("onPreResponse", (request, reply) => {
	if (typeof request.response.statusCode !== "undefined") {
		return reply.continue();
	}

    try {
        const history = createHistory()
        const location = history.createLocation(request.url)
        let reactString = renderToString(
            <Main>
                <Router location={location} history={history} routes={routes} />
            </Main>
        )
        reply(
            
        );
    } catch(error) {
        reply(error.stack).type("text/plain").code(500);
    }
});

}
*/
