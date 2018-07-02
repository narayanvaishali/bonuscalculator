import React, { Component } from 'react';
import BonusCalc from './components/bonuscalc';
import Paper from 'material-ui/Paper';
import paperStyle from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import firebase from 'firebase';
import './App.css';

class bonuscalc extends Component {

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
                  <BonusCalc db={firebase} />
             </div>
            <hr/>
        </Paper>
      );
   }
}
export default bonuscalc;
