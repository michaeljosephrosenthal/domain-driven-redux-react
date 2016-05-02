import { Component, PropTypes, Children } from 'react'

let storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})


export default class Provider extends Component {
    getChildContext() {
        return { store: this.store }
    }

    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }

    render() {
        return Children.only(this.props.children)
    }
}

if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
        const { store } = this
        const { store: nextStore } = nextProps
        if (store !== nextStore) {
            store.replaceReducer(nextStore.reducer);
        }
    }
}

Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
}
Provider.childContextTypes = {
    store: storeShape.isRequired
}
