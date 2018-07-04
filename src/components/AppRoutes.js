import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect, BrowserRouter, Link} from 'react-router-dom';
import App from '../App';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Register';
import Branches from '../Branchlist';
import Staff from '../staff';
import BonusCalc from './bonuscalc';
//import firebase from 'firebase';
import { config } from '../utils/Config';
import { firebaseAuth } from '../utils/firebase';
//import {App, Home, Login, Signup, Branches, Staff,BonusCalc } from '../components'
import { logout } from '../utils/auth'

interface AppProps {
}
interface AppState {
    authed: boolean;
    loading: boolean;
}

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/Login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/Home' />}
    />
  )
}

export default class AppRoutes extends React.Component<AppProps, AppState> {
	constructor(props){
         super(props);

         this.state = {
             authed: false,
             loading: true
         }
     }
     componentDidMount () {
         firebaseAuth().onAuthStateChanged((user) => {
             if (user) {
                 this.setState({
                     authed: true,
                     loading: false,
                 })
             } else {
                 this.setState({
                     authed: false,
                     loading: false
                 })
             }
         })
     }

	render() {
			return this.state.loading === true ? <h1>Loading</h1> : (

				<BrowserRouter>
                <div>
                    {
                        this.state.authed
                        ? <button
                            style={{border: 'none', background: 'transparent'}}
                            onClick={() => {
                                logout()
                            }}
                            className="navbar-brand">Logout</button>
                        : <span>
                            <Link to="/login" className="navbar-brand">Login</Link>
                            <Link to="/register" className="navbar-brand">Register</Link>
                        </span>
                    }

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <PublicRoute authed={this.state.authed} path='/Login' component={Login} />
                        <PublicRoute authed={this.state.authed} path='/Signup' component={Signup} />
                        <PrivateRoute authed={this.state.authed} path='/Staff' component={Staff} />
												<PrivateRoute authed={this.state.authed} path='/Branches' component={Branches} />
												<PrivateRoute authed={this.state.authed} path='/BonusCalc' component={BonusCalc} />
                        <Route render={() => <h3>No Match</h3>} />
                    </Switch>

                </div>
            </BrowserRouter>
			)
	}
}
