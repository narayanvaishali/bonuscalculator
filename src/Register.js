import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import BonusCalc from './components/bonuscalc';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  History,
  withRouter
} from 'react-router-dom';

class Register extends React.Component {
  /*state = {
    toDashboard: false,
  }
  handleSubmit = () => {
    this.setState(() => ({
      toDashboard: true
    }))
  }*/

  handleSubmit= () => {
    //  this.props.history.push('./Home');
   console.log('here...')
 }

  render() {
    /*   if (this.state.toDashboard === true) {
      this.props.history.push('/Home');
   ((<BrowserRouter>
        <Route>
            <Redirect to='/Home' />
        </Route>
      </BrowserRouter>))
    }*/

    return (
      <div>
        <h1>Register123</h1>
        <form >
         <button onClick={this.handleSubmit}>Register</button>
       </form>
      </div>
    )
  }
}
export default withRouter(Register);
