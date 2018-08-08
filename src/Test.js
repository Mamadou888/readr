import React, {Component} from "react";
import "./App.css";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./containers/Home";
import MyLibrary from "./containers/MyLibrary";
import Requests from "./containers/Requests";
import MyAccount from "./containers/MyAccount";
import Error from "./containers/Error";
import NavigationMenu from "./containers/NavigationMenu";
import HeaderToolbar from "./containers/HeaderToolbar";
import {withStyles} from "@material-ui/core/styles";

import {getRequests} from './db/functions'
import { base } from './db/database';


class Test extends Component {
    constructor() {
        super();
        this.state = {
            requests : { 3: "hi"}
        };
        this.getRequests = getRequests.bind(this);
    }

    componentWillMount() {
        // this.state.requests = firebase/requests
        this.requestRef = base.syncState('requests', {
            context: this,
            state:'requests'
        });

    }

    componentWillUnmount() {
        base.removeBinding(this.requestRef);
    }

    render() {
        return (
            <div>
                {/* header tool bar */}
            <div >
                <p>Hi</p>
                <p>{Object.keys(this.state.requests).map((k) => {
                    console.log(3);
                    return <p>{this.state.requests[k].id}</p>
                })}</p>
                {/* {
                    this.state.requests.keys().map((key) =>
                        <p>{key}</p>
                    )
                } */}
                {/* <p>{this.state.requests}</p> */}
            </div>

            </div>);
          }
        }

        export default Test;
