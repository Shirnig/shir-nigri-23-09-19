import React from "react";
import ErrorDiv from "./errorDiv";


export default class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errorOccurred: false}
    }

    componentDidCatch(error, info) {
        this.setState({errorOccurred: true});
    }

    render() {
        return this.state.errorOccurred ?
           <ErrorDiv/>
            : this.props.children
    }
}


