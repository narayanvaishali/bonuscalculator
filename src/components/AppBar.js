import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%"
  },
  appBar: {
    background: "#1a5386",
    color: "#fff"
  },
  appBarTitle: {
    color: "#fff"
  }
});

class MainAppBar extends Component {
  static defaultProps = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography
              variant="title"
              component="span"
              className={classes.appBarTitle}
            >
              Bonus Calculator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MainAppBar);
