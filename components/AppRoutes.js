import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from '../App';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Register';
import Branchlist from '../components/branches';
import Staff from './components/stafflist';
import BonusCalc from './components/bonuscalc';
import firebase from 'firebase';
//import Dashboard from '../pages/dashboard';
//import { config } from '../utils/Config';

export default class AppRoutes extends React.Component {

	constructor(props) {
		super(props);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDeM4zkSI2494TOTisoF4IwwrXX0slt9rE",
      authDomain: "bonuscalculator-3cc6c.firebaseapp.com",
      databaseURL: "https://bonuscalculator-3cc6c.firebaseio.com",
      projectId: "bonuscalculator-3cc6c",
      storageBucket: "bonuscalculator-3cc6c.appspot.com",
      messagingSenderId: "588481287510"
    };
    firebase.initializeApp(config);

        // initially assuming that user is logged out
		let user = {
			isLoggedIn: false
		}

        // if user is logged in, his details can be found from local storage
		try {
		/*	let userJsonString = localStorage.getItem(config.localStorageKey);
			if (userJsonString) {
				user = JSON.parse(userJsonString);
			}*/
      console.log('user found');
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
	//	localStorage.setItem(config.localStorageKey, JSON.stringify(user));
	}

	render() {
		return (
			<Switch>
			    <Route exact path='/' component={App} />
			    <Route exact path='/Login' render={() => <Login authenticate={this.authenticate} />} />
					<Route exact path='/Home' render={() => <Home authenticate={this.authenticate} />} />
			    <Route exact path='/Signup' render={() => <Signup authenticate={this.authenticate} />} />
					<Route exact path='/Branchlist' render={() => <Branchlist authenticate={this.authenticate} />} />
					<Route exact path='/Staff' render={() => <Staff authenticate={this.authenticate} />} />
					<Route exact path='/BonusCalc' render={() => <BonusCalc authenticate={this.authenticate} />} />
			</Switch>
		);
	}
}
