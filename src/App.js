import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import MyLibrary from "./containers/MyLibrary";
import Requests from "./containers/Requests";
import MyAccount from "./containers/MyAccount";
import Error from "./containers/Error";

import NavigationMenu from "./containers/NavigationMenu";
import HeaderToolbar from "./containers/HeaderToolbar";

// material-ui imports

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: 240
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>

          {/* header tool bar */}
          <HeaderToolbar />
          {/* Let this serve as the navigation menu */}
          <NavigationMenu/>

          {/* The content of whatever page is clicked on goes here */}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1>Content for this page is below</h1>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/user/library" component={MyLibrary} />
              <Route path="/user/requests" component={Requests} />
              <Route path="/user/myaccount" component={MyAccount} />
              <Route component={Error} />
            </Switch>
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
