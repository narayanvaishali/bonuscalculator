import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "./AppBar";

const styles = theme => ({
  layout: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  main: {
    flex: "1 0 auto"
  }
});

class Layout extends Component {
  state = {
    drawer: false,
    drawerItems: {
      about: false,
      academics: false,
      admissions: false,
      "faith-and-life": false
    },
    drawerSubItems: {}
  };

  toggleDrawer = itemId => {
    this.setState(state => ({ drawer: !state.drawer }));
    itemId && this.expandItem(itemId);
  };

  expandItem = itemId => {
    this.setState(prevState => ({
      drawerItems: {
        ...prevState.drawerItems,
        [itemId]: !prevState.drawerItems[itemId]
      }
    }));
  };

  expandSubItem = itemId => {
    this.setState(prevState => ({
      drawerSubItems: {
        ...prevState.drawerSubItems,
        [itemId]: !prevState.drawerSubItems[itemId]
      }
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <AppBar />
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
