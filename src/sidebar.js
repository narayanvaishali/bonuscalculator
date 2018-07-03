import React, { Component } from 'react';
//import logo from './logo.svg';
import App from './App';
import Home from './Home';
import Login from './Login';
import Staff from './staff';
import Branchlist from './Branchlist';
import BonusCalc from './components/bonuscalc';
import AppRoutes from './components/AppRoutes';
import firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class Sidebar extends Component {

  constructor(props){
     super(props);
     this.state = {
               "open": false,
               "show": null,
               "authenticated" : false
           };

           this.handleToggle = () => this.setState({open: !this.state.open});

           this.showHome = () => {
               this.setState({show: 'home', open: false, authenticated : false });
           };

           this.showStaff = () => {
               this.setState({show: 'staff', open: false, authenticated : false });
           };

           this.showBranchList = () => {
               this.setState({show: 'branchlist', open: false, authenticated : false });
           };

           this.showLogin = () => {
               this.setState({show: 'login', open: false, authenticated : false });
           };

           this.showBonusCalc  = () => {
               this.setState({show: 'bonuscalc', open: false, authenticated : false });
           };
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
  }

  render() {
    let content = null;

    switch(this.state.show) {
        case 'home':
            content = (<Home authenticated={this.state.authenticated}/>);
            break;

        case 'staff':
                   content = (<Staff authenticated={this.state.authenticated}/>);
                   break;
        case 'branchlist':
            content = (<Branchlist authenticated={this.state.authenticated}/>);
            break;

        case 'bonuscalc':
                content = (<BonusCalc authenticated={this.state.authenticated}/>);
                break;

         case 'login':
                content = (<Login/>);
                break;

        default:
            content = <h1>&nbsp;</h1>
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
                              onRequestChange={(open) => this.setState({open})}>

                               <AppBar title="AppBar"/>

                              <ul>
                                      <li>
                                        <MenuItem><Link to="/Home" >Home</Link></MenuItem>
                                      </li>
                                      <li>
                                        <MenuItem> <Link to="/Staff">Staff</Link></MenuItem>
                                      </li>
                                      <li>
                                        <MenuItem><Link to="/Branches">Branches</Link></MenuItem>
                                      </li>
                                      <li>
                                        <MenuItem><Link to="/BonusCalc">Bonus Calculator</Link></MenuItem>
                                      </li>
                                      <li>
                                        <MenuItem><Link to="/Login">Login</Link></MenuItem>
                                      </li>
                                </ul>

                          </Drawer>
                          <AppRoutes />

                      </div>
    );
  }
}

export default Sidebar;
