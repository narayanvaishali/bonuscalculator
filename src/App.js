import React, { Component } from 'react';
//import logo from './logo.svg';
import Login from './Login';
import Register from './Register';
import SideBar from './sidebar';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    const buttonStyle = {
     marginRight: '1em'
   };
  return (
      <div className="App">
        <div class="jumbotron">
            <h1>Bonus Calculator</h1>
            <Link to={`/login`}>
                <button type="button" class="btn btn-primary btn-lg" style={buttonStyle}>
                    Login
                </button>
            </Link>
            <Link to={`/signup`}>
                <button type="button" class="btn btn-primary btn-lg" style={buttonStyle}>
                    Signup
                </button>
            </Link>
        </div>

        </div>
    )
  }
}

export default App;
