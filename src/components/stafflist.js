import React, {Component} from 'react';
import Message from './addbranch';
import Modal from './Modal';
import _ from 'lodash';

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      stafflist: [],
      showWarning: false
  }
}

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
      showWarning : true
    });
  }
  removeBranch(itemId) {
     const itemRef = this.props.db.database().ref(`/staff/${itemId}`);
     itemRef.remove();
   }

  saveModalDetails(item, itemid) {
    var updates = {};
       const itemRef = this.props.db.database().ref(`/staff/${itemid}`);
       itemRef.update(item);
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
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

  render() {
    const brochure = this.state.stafflist.map((staff, index) => {
      return (
        <tr key={index}>
                    <td>{staff.initials}</td>
                    <td>{staff.name}</td>
                    <td>{staff.designation}</td>
                    <td>{staff.email}</td>
                    <td>{staff.phone}</td>
                    <td>{staff.code}</td>
                  <td>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                      onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
                  </td>
                  <td>
                    <td><button onClick={() => this.removeBranch(staff.id)}><span class="glyphicon glyphicon-trash"></span></button></td>
                  </td>
          </tr>
      )
    });
    const warn =this.state.showWarning;
    let modalData;
    if (warn)
    {
      const requiredItem = this.state.requiredItem;
      modalData = this.state.stafflist[requiredItem];
      //console.log(modalData);
    }
    return (

      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Staff List</h1>
        </div>
        <table className="table table-striped">
        <tr>
            <td ><b>initials</b></td>
            <td><b>name</b></td>
            <td><b>Designation</b></td>
            <td><b>Email</b></td>
            <td><b>Phone</b></td>
            <td><b>Code</b></td>
        </tr>
          <tbody>
            {brochure}
          </tbody>
        </table>

        {warn ? (
          <Modal
             initials= {modalData.initials}
             name = {modalData.name}
             designation = {modalData.designation}
             email = {modalData.email}
             phone = {modalData.phone}
             code = {modalData.code }
             id = {modalData.id}
             saveModalDetails={this.saveModalDetails}
          />
              ) : (
                console.log ('no data found')
              )}
      </div>
    );
  }
}

export default StaffList;
