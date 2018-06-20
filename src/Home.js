import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Staff from './staff';
import Branchlist from './Branchlist';
import BonusCalc from './components/bonuscalc';
import AppRoutes from './components/AppRoutes';
import firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class Home extends Component {
  constructor(props){
       super(props);
       this.state = {
                 "open": false,
                 "show": null
             };

             this.handleToggle = () => this.setState({open: !this.state.open});

             this.showHome = () => {
                 this.setState({show: 'home', open: false });
             };

             this.showStaff = () => {
                 this.setState({show: 'staff', open: false });
             };

             this.showBranchList = () => {
                 this.setState({show: 'branchlist', open: false });
             };

             this.showLogin = () => {
                 this.setState({show: 'login', open: false });
             };

             this.showBonusCalc  = () => {
                 this.setState({show: 'bonuscalc', open: false });
             };
        // Initialize Firebase
      /*  var config = {
          apiKey: "AIzaSyDeM4zkSI2494TOTisoF4IwwrXX0slt9rE",
          authDomain: "bonuscalculator-3cc6c.firebaseapp.com",
          databaseURL: "https://bonuscalculator-3cc6c.firebaseio.com",
          projectId: "bonuscalculator-3cc6c",
          storageBucket: "bonuscalculator-3cc6c.appspot.com",
          messagingSenderId: "588481287510"
        };
        firebase.initializeApp(config);*/
    }

    render() {
      let content = null;

      switch(this.state.show) {
          case 'home':
              content = (<Home/>);
              break;

          case 'staff':
                     content = (<Staff/>);
                     break;
          case 'branchlist':
              content = (<Branchlist/>);
              break;

          case 'bonuscalc':
                  content = (<BonusCalc/>);
                  break;

           case 'login':
                  content = (<Login/>);
                  break;

          default:
              content = <h1>Waiting</h1>
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
                              <MenuItem onClick={this.showHome}>Home</MenuItem>
                              <MenuItem onClick={this.showStaff}>Staff</MenuItem>
                              <MenuItem onClick={this.showBranchList}>Branches</MenuItem>
                              <MenuItem onClick={this.showBonusCalc}>Bonus Calculator</MenuItem>
                              <MenuItem onClick={this.showLogin}>Login</MenuItem>
                        </Drawer>
                        <Paper style={paperStyle} zDepth={5}>
                            <Toolbar style={{"justifyContent": "center"}}>
                                <ToolbarTitle text=""/>
                            </Toolbar>
                            {content}
                            <hr/>
                        </Paper>
                    </div>
      );
    }
}
export default Home;
