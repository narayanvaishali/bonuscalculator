import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 2
  },
  alignRight: {
    textAlign: "right"
  },
  loginContainer: {
    padding: "50px",
    minWidth: "450px"
  }
});

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `linear-gradient(rgb(148, 132, 223), rgba(13, 97, 146, 0.89))`,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Paper elevation={3} className={classes.loginContainer}>
            <Typography variant="display2">Login</Typography>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                value={this.state.email}
                type="email"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                value={this.state.password}
                type="password"
                onChange={this.handleChange}
              />
            </FormControl>

            <FormControl className={classes.formControl} fullWidth>
              <div className={classes.alignRight}>
                <Button variant="contained" color="primary">
                  Sign In{" "}
                </Button>
                <Button variant="outlined" href={"/"}>
                  Cancel
                </Button>
              </div>
            </FormControl>
          </Paper>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Login);
