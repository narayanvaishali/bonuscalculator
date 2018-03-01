import React, {Component} from 'react';
import trim from 'trim';

class AddStaff extends Component {
  constructor(props){
      super(props);

      this.state = {
        initials: '',
        name : '',
        designation : '',
        email : '',
        phone : '',
        code : ''
      };

       this.handleChangeIni = this.handleChangeIni.bind(this);
       this.handleChangeName = this.handleChangeName.bind(this);
       this.handleChangeDesig = this.handleChangeDesig.bind(this);
       this.handleChangeEmail = this.handleChangeEmail.bind(this);
       this.handleChangePh = this.handleChangePh.bind(this);
       this.handleChangeCode = this.handleChangeCode.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeIni(e) {
      //  console.log(e.target.value)
      this.setState({
        initials: e.target.value
      });
  }

  handleChangeName(e) {
    //  console.log(e.target.value)
    this.setState({
      name: e.target.value
    });
  }
  handleChangeDesig(e) {
    //  console.log(e.target.value)
    this.setState({
      designation: e.target.value
    });
  }
  handleChangeEmail(e) {
    //  console.log(e.target.value)
    this.setState({
      email: e.target.value
    });
}

handleChangePh(e) {
  //  console.log(e.target.value)
  this.setState({
    phone: e.target.value
  });
}

handleChangeCode(e) {
  //  console.log(e.target.value)
  this.setState({
    code: e.target.value
  });
}

handleSubmit(e) {
    e.preventDefault();

//      if (trim(this.state.branchname) !== '' && trim(this.state.target) !== '')
    //{
        const staffRef = this.props.db.database().ref('staff');
        const staff = {
          initials: this.state.initials,
          name : this.state.name,
          designation : this.state.designation,
          email : this.state.email,
          phone : this.state.phone,
          code : this.state.code
        }

        staffRef.push(staff);
        this.setState({
          initials: '',
          name : '',
          designation : '',
          email : '',
          phone : '',
          code : ''
        });
      //}
  }
  render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <table boder="0" className="table table-striped table-custom" >
            <tr>
              <td>
                initial : &nbsp;
              </td>
              <td>
                <input id="initials" placeholder="enter initial" type="text" onChange={this.handleChangeIni} value={this.state.initials}  />
              </td>
              <td>
                  <span>name : &nbsp;</span>
              </td>
              <td>
                  <input id="name" placeholder="enter name" type="text" onChange={this.handleChangeName} value={this.state.name}  />
              </td>
            </tr>
            <tr>
              <td>
                  <span>designation : &nbsp;</span>
                </td>
                <td>
                    <input id="designation" placeholder="enter designation" type="text" onChange={this.handleChangeDesig} value={this.state.designation}  />
                </td>
                <td>
                  <span>email : &nbsp;</span>
                </td>
                <td>
                  <input id="email" placeholder="enter email" type="text" onChange={this.handleChangeEmail} value={this.state.email}  />
                </td>
            </tr>
            <tr>
                <td>
                    <span>phone : &nbsp;</span>
                </td>
                <td>
                    <input id="phone" placeholder="enter phone" type="text" onChange={this.handleChangePh} value={this.state.phone}  />
                </td>
                <td>
                    <span>code : &nbsp;</span>
                </td>
                <td>
                  <input id="code" placeholder="enter code" type="text" onChange={this.handleChangeCode} value={this.state.code}  />
                </td>
            </tr>
            <tr>
              <td>
                  <button ><span class="glyphicon glyphicon-plus"></span></button>
              </td>

             </tr>
          </table>
             <br/><br/><br/>
          </form>
        )
  }
}


export default AddStaff
