import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//views
import IndexPage from "./views/";
import Login from "./views/login";
import { isAuthenticated } from "./utils/auth";

if (!isAuthenticated()) {
  window.location.href = "/login";
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
