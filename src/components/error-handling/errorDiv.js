import React from "react";
import {ToastsContainer, ToastsStore} from "react-toasts";

export default class ErrorDiv extends React.Component {

    render() {
        return <ToastsContainer store={ToastsStore} lightBackground/>
    }

    componentDidMount() {
        ToastsStore.error("Something Went Wrong :(");
    }
}
