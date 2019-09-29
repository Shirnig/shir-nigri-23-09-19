import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/home/home";
import Favorites from "./components/favorites/favorites";
import ErrorHandler from "./components/error-handling/errorHandling";
import {ToastsContainer, ToastsStore} from "react-toasts";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {


    render() {
        return (
            <Router>
                <Provider store={store}>
                        <Route component={Header} history={this.props.history}/>
                    <ErrorHandler>
                        <Route exact path="/" component={withRouter(Home)}/>
                    </ErrorHandler>
                    <ErrorHandler>
                        <Route path="/favorites" component={withRouter(Favorites)}/>
                    </ErrorHandler>
                    <ToastsContainer store={ToastsStore} lightBackground/>
                </Provider>
            </Router>)
    }
}


export default App
