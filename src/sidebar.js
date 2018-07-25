import React, { Component } from "react";
//import logo from './logo.svg';
import App from "./App";
import Home from "./Home";
import Login from "./Login";
import Staff from "./staff";
import Branchlist from "./Branchlist";
import BonusCalc from "./components/bonuscalc";
//import AppRoutes from './components/AppRoutes';
import Signup from "./Register";
import Branches from "./Branchlist";
import firebase from "firebase";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { config } from "./utils/Config";
import { firebaseAuth } from "./utils/firebase";
import { logout } from "./utils/auth";

interface AppProps {}
interface AppState {
  authed: boolean;
  loading: boolean;
}

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/Login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? <Component {...props} /> : <Redirect to="/Home" />
      }
    />
  );
}

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block"
};

class Sidebar extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
      open: false,
      show: null,
      authenticated: false
    };
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  Logout = () => {
    logout();
  };

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  render() {
    let content = null;

    switch (this.state.show) {
      case "home":
        content = <h1>&nbsp;</h1>;
        break;

      case "staff":
        content = <h1>&nbsp;</h1>;
        break;
      case "branchlist":
        content = <h1>&nbsp;</h1>;
        break;

      case "bonuscalc":
        content = <h1>&nbsp;</h1>;
        break;

      case "login":
        content = <h1>&nbsp;</h1>;
        break;

      default:
        content = <h1>&nbsp;</h1>;
    }

    return (
      <div className="App">
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="Bonus Calculator"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title="AppBar" />

          <ul>
            <li>
              <MenuItem>
                <Link to="/Home">Home</Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem>
                <Link to="/Staff">Staff</Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem>
                <Link to="/Branchlist">Branches</Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem>
                <Link to="/BonusCalc">Bonus Calculator</Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem>
                <Link to="/Login">Login</Link>
              </MenuItem>
            </li>
          </ul>
        </Drawer>
        <AppRoutes />
      </div>
    );
  }
}

export default Sidebar;
