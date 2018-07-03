import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from '../App';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Register';
import Branches from '../Branchlist';
import Staff from '../staff';
import BonusCalc from './bonuscalc';
//import firebase from 'firebase';
import { config } from '../utils/Config';
//import Dashboard from '../pages/dashboard';
//import { config } from '../utils/Config';
let user = {
	isLoggedIn: false
}



const fakeAuth = {
isAuthenticated: false,
authenticate(cb) {
	this.isAuthenticated = true;
	setTimeout(cb, 100); // fake async
},
signout(cb) {
	this.isAuthenticated = false;
	setTimeout(cb, 100);
}
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default class AppRoutes extends React.Component {
	// initially assuming that user is logged out

	constructor(props) {
			super(props);
		        // initially assuming that user is logged out
				let user = {
					isLoggedIn: false
			}

	        // if user is logged in, his details can be found from local storage
			try {

				let userJsonString = localStorage.getItem(config.localStorageKey);
					if (userJsonString) {
						user = JSON.parse(userJsonString);
				}

			} catch (exception) {

			}
			 // updating the state

			this.state = {
				user: user
			};

			this.authenticate = this.authenticate.bind(this);
		}

		// this function is called on login/logout
		authenticate(user) {
				this.setState({
					user: user
				});
			// updating user's details
			localStorage.setItem(config.localStorageKey, JSON.stringify(user));
	}

	render() {
		return (
			<Switch>
			    <Route exact path='/' component={App} />
			    <Route exact path='/Login' render={() => <Login authenticate={this.authenticate} />} />
					<Route exact path='/Home' render={() => <Home authenticate={this.authenticate} />} />
					<PrivateRoute path='/Staff' component={Staff} />
					<Route exact path='/Branches' render={() => <Branches authenticate={this.authenticate} />} />
					<Route exact path='/BonusCalc' render={() => <BonusCalc authenticate={this.authenticate} />} />
			    <Route exact path='/Signup' render={() => <Signup authenticate={this.authenticate} />} />
			</Switch>
		);
	}
}
