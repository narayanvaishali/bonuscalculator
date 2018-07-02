import React, { Component } from 'react';
import Branches from './components/branches';
import AddBranch from './components/addbranch';
import Header from './components/Header';
import Paper from 'material-ui/Paper';
import paperStyle from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import firebase from 'firebase';
import './App.css';

class Branchlist extends Component {

  constructor(props){
     super(props);
  }

   render() {
      return (
         <Paper style={paperStyle} zDepth={10}>
            <Toolbar style={{"justifyContent": "center"}}>
                <ToolbarTitle text=""/>
            </Toolbar>
             <div className="container">
               <Header title="" />
                 <AddBranch db={firebase} />
                 <Branches db={firebase} />
             </div>
            <hr/>
        </Paper>

      );
   }
}
export default Branchlist;
