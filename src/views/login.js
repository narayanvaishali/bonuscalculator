import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const Login = props => {
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
        <Paper elevation={3} style={{ padding: "30px", minWidth: "400px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              value=""
              type="email"
              // onChange={this.handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              value=""
              type="password"
              // onChange={this.handleChange}
            />
          </FormControl>
        </Paper>
      </div>
    </Layout>
  );
};

export default Login;
