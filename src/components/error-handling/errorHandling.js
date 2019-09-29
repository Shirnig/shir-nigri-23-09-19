import React from "react";
import Alert from "react-bootstrap/Alert";


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
            <Alert variant={'danger'}>
                Oops! Something Went Wrong :(
            </Alert>
            : this.props.children
    }
}
