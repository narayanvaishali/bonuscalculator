import React, {Component} from 'react';
import Message from './addbranch';
import _ from 'lodash';

class Branches extends Component {

  constructor(props){
    super(props);
    this.state = {
      branches: []
    };
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

render(){
    return (
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
                  <td><button onClick={() => this.removeBranch(branch.id)}><span class="glyphicon glyphicon-trash"></span></button></td>
              </tr>
            )
          })}
      </table>
        </div>
    )
  }
}

export default Branches
