import React from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: 240
  },
  toolbar: theme.mixins.toolbar
});

const NavigationMenu = (props) => {
  const { classes } = props;

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />
      <List>
        <ListItem component={props => <NavLink to="/" {...props} />} button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component={props => <NavLink to="/user/library" {...props} />}
          button
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="My Library" />
        </ListItem>
        <ListItem
          component={props => <NavLink to="/user/requests" {...props} />}
          button
        >
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItem>
        <ListItem
          component={props => <NavLink to="/user/myaccount" {...props} />}
          button
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(NavigationMenu);
