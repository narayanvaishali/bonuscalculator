import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//views
import IndexPage from "./views/";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

import BranchIndex from "./views/branches/";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/branches" component={BranchIndex} />
        </div>
      </Router>
    );
  }
}

export default App;
