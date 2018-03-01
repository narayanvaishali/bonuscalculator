import React, {Component} from 'react';
import Message from './addbranch';
import _ from 'lodash';

class StaffList extends Component {
 //const  editmode : false;
  constructor(props){

    super(props);
    this.state = {
      stafflist: []
    };
  }
  componentDidMount() {
    const itemsRef = this.props.db.database().ref('staff');

    itemsRef.on('value', (snapshot) => {
      let stafflist = snapshot.val();
      //  console.log(stafflist);
      let newState = [];
      for (let staff in stafflist) {
        newState.push({
          id: staff,
          initials: stafflist[staff].initials,
          name : stafflist[staff].name,
          designation : stafflist[staff].designation,
          email : stafflist[staff].email,
          phone : stafflist[staff].phone,
          code : stafflist[staff].code
        });
      }
      this.setState({
        stafflist: newState
      });
    });
  }
  removeBranch(itemId) {
    const itemRef = this.props.db.database().ref(`/staff/${itemId}`);
    itemRef.remove();
  }

  editBranch(editstaff) {
      console.log(editstaff);
      //this.props.editStaff= staff;
    //const itemRef = this.props.db.database().ref(`/staff/${staff.ID}`);
    let editState = [];
  //  for (let st in editstaff) {
      editState.push({
        id: editstaff.id,
        initials: editstaff.initials,
        name : editstaff.name,
        designation : editstaff.designation,
        email : editstaff.email,
        phone : editstaff.phone,
        code : editstaff.code
      });
  //  }
console.log(editState);
    this.setState({
      stafflist: editState
    });
  /*  itemRef.update({
     '/name': this.state.stafflist.name
    })
*/
    //console.log(itemRef.child);
    //this.state.stafflist.name = itemRef.name;
  // itemRef.remove();
  }

render(){
    return (
      <div>
      <table border="1" className="table table-striped table-custom">
        <tr>
            <td ><b>Initials</b></td>
            <td><b>Name</b></td>
            <td><b>Designation</b></td>
            <td><b>Email</b></td>
            <td><b>Phone</b></td>
            <td><b>Code</b></td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
        </tr>
          {this.state.stafflist.map((staff) => {
            return (
              <tr>
                  <td>{staff.initials}</td>
                  <td>{staff.name}</td>
                  <td>{staff.designation}</td>
                  <td>{staff.email}</td>
                  <td>{staff.phone}</td>
                  <td>{staff.code}</td>
                  <td><button onClick={() => this.removeBranch(staff.id)}><span class="glyphicon glyphicon-trash"></span></button></td>
                  <td>
                      <button  onClick={() => this.editBranch(staff)}><span class="glyphicon glyphicon-edit"></span></button>
                  </td>
              </tr>
            )
          })}
      </table>
        </div>
    )
  }
}

export default StaffList
