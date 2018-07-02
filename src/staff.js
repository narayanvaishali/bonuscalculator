import React, { Component } from 'react';
import StaffList from './components/stafflist';
import AddStaff from './components/addstaff';
import Header from './components/Header';
import firebase from 'firebase';
import './App.css';
import Paper from 'material-ui/Paper';
import paperStyle from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

class Staff extends Component {

  constructor(props){
     super(props);
  }
  /*getInitialState: function() {
      return {
        name: this.props.name,
      };
    },

    changeName: function() {
      this.setState({ name: event.target.value });
    },*/
   render() {
      return (
        <Paper style={paperStyle} zDepth={10}>
           <Toolbar style={{"justifyContent": "center"}}>
               <ToolbarTitle text=""/>
           </Toolbar>
            <div className="container">
                       <AddStaff db={firebase} />
                       <StaffList db={firebase}  editStaff={this.props.editStaff}/>
            </div>
           <hr/>
       </Paper>
      );
   }
}
export default Staff;
