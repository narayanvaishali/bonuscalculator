import React, {Component} from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import validator from 'validator';
import './style.css';

class BonusCalc extends Component {
  constructor(props){
    super(props);
    //this.handleOnNavigateBack = this.handleOnNavigateBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetfields = this.resetfields.bind(this);

    this.state = {
      branches:[],
      branch: '',
      GP:'',
      shifts:'',
      target:''
    };
  }

  handleChange(event) {
    //alert('GP: ' + event.target.name);
    //alert('GP: ' + event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
resetfields(event) {
    event.preventDefault();

    this.state = {
      branches:[],
      branch: '',
      GP:'',
      shifts:'',
      target:''
    };
}

  handleSubmit(event) {
    //alert('An essay was submitted: ' + this.state.target);

    event.preventDefault();
    if (this.state.target == "" || this.state.target == 0)
    {
      alert('Please select a branch');
      return;
    }
    else if (this.state.GP == "" || this.state.GP == 0)
    {
      alert('Please enter GP achieved');
      return;
    }
    else if (this.state.GP == "" || this.state.GP == 0)
    {
      alert('Please enter GP achieved');
      return;
    }
    else if ( this.state.shifts == "" || this.state.shifts == 0)
    {
      alert('Please enter number of shifts');
      return;
    }

    var Y = (parseFloat(this.state.shifts) * parseFloat(this.state.target)/ 20);
    var A = (parseFloat(Y)*1)/100;
    var B = ((parseFloat(this.state.GP) - parseFloat(Y)) *3) /100;

    var answer = parseFloat(A)+parseFloat(B);

    if(A < 0 || B < 0 || isNaN(answer))
    {
        document.getElementById("lblBonus").innerHTML = "No Bonus!";
    }
    else
    {
        answer = answer.toFixed(2);
        document.getElementById("lblBonus").innerHTML = "£" + String(answer);
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('branches');
    //this.props.db.database().ref('branches');

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
    const itemRef = firebase.database().ref(`/branches/${itemId}`);
    itemRef.remove();
  }


render(){
const styles = {
  backgroundBody: {
    backgroundcolor : 'red'
  },
  outertable : {
      verticalAlign : "center",
      width : "100%"
  },
  App : {
    verticalAlign: "center",
    width:"100%"
  },
  table1 :  {
     border:"1",
     backgroundcolor: "#E9E9E9",
     verticalAlign :"center",
     spacing:"10",
     padding: "10",
     width:"100%"
  },

  table2  :{
      border :"0",
      backgroundcolor: "white",
      height: "50%",
      verticalAlign:"center",
      spacing : "10",
      padding:"10",
      width :"100%"
  }

}
  let optionTemplate = this.state.branches.map(v => (
        //console.log(v.Target);
        <option value={v.target}>{v.branchname}</option>
      ));
     return (
       <div className="container">
           <form>
               <table  className="table table-striped table-custom" >
                 <tr>
                     <td>
                         <table >
                             <tr>
                                 <td>

                                     <table >
                                         <tr>
                                             <td style={{verticalAlign:'center'}} >
                                                 <table  className="table table-striped table-custom" >
                                                     <tr>
                                                         <td style={{textAlign:'center'}}>
                                                         <span >BONUS CALCULATOR</span>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td style={{colspan:"2"}}>
                                                 <table border="1" styles={{background: '#0080bd', width:'100em', cellspacing:'10', cellpadding:'10' }}>
                                                     <tr>
                                                         <td><span >Branch</span></td>
                                                         <td>
                                                           <select name="target" value={this.state.target} onChange={this.handleChange}>
                                                             <option value="">--Select--</option>
                                                             {optionTemplate}
                                                           </select>
                                                         </td>
                                                     </tr>
                                                     <tr>
                                                         <td><span >GP Achieved</span></td>
                                                                 <td>
                                                               <span >£</span>
                                                                   <input type="text"  name="GP"
                                                                     onChange={this.handleChange}
                                                                   />

                                                         </td>
                                                     </tr>
                                                     <tr>
                                                         <td ><span>Number of Shifts</span></td>
                                                         <td>
                                                         <input type="text" name="shifts"
                                                           onChange={this.handleChange}
                                                         />
                                                         </td>
                                                     </tr>
                                                     <tr>
                                                         <td styles={{textAlign:"right"}} > <input type="button" value="Submit" onClick={this.handleSubmit}/></td>
                                                         <td align="right"><input type="button" value="Reset"  onClick={this.resetfields}/> </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                         <tr>
                                           <td>&nbsp;</td>
                                         </tr>
                                         <tr>
                                             <td >
                                                  <table border="1" styles={{ width:"50%", cellspacing:"10", cellpadding:"10"}}>

                                                 </table>
                                             </td>
                                         </tr>
                                         <tr>
                                           <td>&nbsp;</td>
                                         </tr>
                                         <tr>
                                             <td >
                                                 <table width="100%" border="1" >
                                                     <tr>
                                                          <td  style={{textAlign:"center", height: "59px", background: "#0051A3"}}>
                                                             <label id="lblBonus" >£000.00</label>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                 </table>
                                 </td>
                             </tr>
                         </table>
                     </td>
                 </tr>
               </table>
               <table style={{verticalAlign:"center", width:"40%" }}>
                 <tr>
                    <td style={{textAlign:"center"}}><label id="Label2">Copyright © 2018 VG Corp Ltd</label></td>
                 </tr>
               </table>
           </form>
       </div>
    )
  }
}

export default BonusCalc
