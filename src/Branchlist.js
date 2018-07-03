import React, { Component } from 'react';
import Branches from './components/branches';
import AddBranch from './components/addbranch';
import Header from './components/Header';
import firebase from 'firebase';
import {Paper, paperStyle} from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import './App.css';

class Branchlist extends Component {

  constructor(props){
     super(props);
  }

   render() {
      return (
          <div className="container">
                <Header title="" />
                <div className="columns">
                  <div className="column is-6">
                      <AddBranch db={firebase} />
                      <Branches db={firebase} />
                    </div>
                </div>
           </div>
      );
   }
}
export default Branchlist;
