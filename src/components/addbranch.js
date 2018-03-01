import React, {Component} from 'react';
import trim from 'trim';

class AddBranch extends Component {
  constructor(props){
      super(props);
    /*  this.onChange = this.onChange.bind(this);
      this.onKeyup = this.onKeyup.bind(this);*/
      this.state = {
        branchname: '',
        target : 0
      };

       this.handleChange = this.handleChange.bind(this);
       this.handleChange1 = this.handleChange1.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        console.log(e.target.value)
    this.setState({
      branchname: e.target.value
    });
  }
  handleChange1(e) {
      console.log(e.target.value)
  this.setState({
    target: e.target.value
  });
}
    handleSubmit(e) {
      e.preventDefault();

      if (trim(this.state.branchname) !== '' && trim(this.state.target) !== '')
      {
          const branchesRef = this.props.db.database().ref('branches');
          const branch = {
            branchname: this.state.branchname,
            target: this.state.target
          }
          branchesRef.push(branch);
          this.setState({
            branchname: '',
            target: ''
          });
        }
    }

    onChange(e){
        this.setState({
          branchname: e.branchname.value,
          target: e.target.value
        });
    }
    onKeyup(e){
      if(e.keyCode === 13 && trim(e.target.value) !== ''){
        e.preventDefault();
        let dbCon = this.props.db.database().ref('/messages');
        dbCon.push({
          branchname: trim(e.target.value)
        });
        this.setState({
          branch: ''
        });
      }
    }
    addBranch(e){
      e.preventDefault(); // <- prevent form submit from reloading the page
      /* Send the message to Firebase */
      this.props.db.database().ref('branches/branchname').push( this.inputEl.value );
      this.props.db.database().ref('branches').push( this.inputEl1.value );
      this.inputEl.value = ''; // <- clear the input
      this.inputEl1.value = ''; // <- clear the input
    }
  render() {
        return (
          <form onSubmit={this.handleSubmit}>
             <input id="branchname" placeholder="Type a branch name" type="text" onChange={this.handleChange} value={this.state.branchname}  />
             <input id="target" placeholder="enter target" type="text" onChange={this.handleChange1} value={this.state.target}  />
             <button ><span class="glyphicon glyphicon-plus"></span></button>
             <br/><br/><br/>
          </form>
        )
  }
}

export default AddBranch
