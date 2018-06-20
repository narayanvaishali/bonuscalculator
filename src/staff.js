import React, { Component } from 'react';
import StaffList from './components/stafflist';
import AddStaff from './components/addstaff';
import Header from './components/Header';
import firebase from 'firebase';
import './App.css';

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
        <div className="container">
              <div className="columns">
                <div className="column is-6">
                    <AddStaff db={firebase} />
                    <StaffList db={firebase}  editStaff={this.props.editStaff}/>
                  </div>
              </div>
         </div>
      );
   }
}
export default Staff;
