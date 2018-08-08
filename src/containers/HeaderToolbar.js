import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const HeaderToolbar = props => {
  const { classes } = props;

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className="App-toolbar">
        <IconButton
          className="App-menuButton"
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography className="App-appName" color="inherit">
          Readr
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(HeaderToolbar);
