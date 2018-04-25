import React, {Component} from 'react';
import Message from './addbranch';
import ModalBranch from './ModalBranch';
import _ from 'lodash';

class Branches extends Component {

  constructor(props){
    super(props);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.state = {
      requiredItem: 0,
      branches: [],
      showWarning: false
    }
  }
  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
      showWarning : true
    });
  }
  componentDidMount() {
    const itemsRef = this.props.db.database().ref('branches');
    itemsRef.on('value', (snapshot) => {
      let branches = snapshot.val();
      let newState = [];
      for (let branch in branches) {
        newState.push({
          id: branch,
          branchname: branches[branch].branchname,
          target: branches[branch].target
        });
      }
      this.setState({
        branches: newState
      });
    });
  }
  removeBranch(itemId) {
    const itemRef = this.props.db.database().ref(`/branches/${itemId}`);
    itemRef.remove();
  }
  saveModalDetails(item, itemid) {
    var updates = {};
       const itemRef = this.props.db.database().ref(`/branches/${itemid}`);
       itemRef.update(item);
  }
render(){

  const branchlist = this.state.branches.map((branch, index) => {
    return (

              <tr key={index}>
                      <td>{branch.branchname}</td>
                      <td>{branch.target}</td>
                      <td>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                          onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
                      </td>
                      <td>
                        <td><button onClick={() => this.removeBranch(branch.id)}>
                        <span class="glyphicon glyphicon-trash"></span></button></td>
                      </td>
              </tr>
      )
  });
  const warn =this.state.showWarning;
  let modalData;
  if (warn)
  {
    const requiredItem = this.state.requiredItem;
    modalData = this.state.branches[requiredItem];
    //console.log(modalData);
  }
  return (

    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Branch List</h1>
      </div>
      <table className="table table-striped">
        <tbody>
          <tr>
              <td ><b>Branch</b></td>
              <td><b>Target</b></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          {branchlist}
        </tbody>
      </table>

      {warn ? (
        <ModalBranch
           branchname= {modalData.branchname}
           target = {modalData.target}
           id = {modalData.id}
           saveModalDetails={this.saveModalDetails}
        />
            ) : (
              console.log ('no data found')
            )}
    </div>
  );

  /*  return (
      <div>
          <table border="1" className="table table-striped table-custom">
            <tr>
                <td ><b>Branch</b></td>
                <td><b>Target</b></td>
                <td>&nbsp;</td>
            </tr>
              {this.state.branches.map((branch) => {
                return (
                  <tr>
                      <td>{branch.branchname}</td>
                      <td>{branch.target}</td>
                      <td>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                          onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
                      </td>
                      <td><button onClick={() => this.removeBranch(branch.id)}><span class="glyphicon glyphicon-trash"></span></button></td>
                  </tr>
                )
              })}
          </table>
        </div>
    )*/
  }
}

export default Branches
