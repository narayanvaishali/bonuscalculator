import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  History,
  withRouter
} from 'react-router-dom';
import firebase from 'firebase';
import Branchlist from './Branchlist';
import Sidebar from './sidebar';
import Home from './Home';
//import './components/style.css';

class Login extends Component {

  constructor(props){
      super(props);
      this.state = {
        email: '',
        password : '',
        loggedIn: false
      };

      this.state = {
      fireRedirect: false
    }

       this.login = this.login.bind(this);
       this.logout = this.logout.bind(this);
       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handlePwdChange = this.handlePwdChange.bind(this);
       this.redirectUser = this.redirectUser.bind(this);
       //this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn
    }))
  }
    handleEmailChange(e) {
      //  console.log(e.target.value)
    this.setState({
      email: e.target.value
    });
  }

  handlePwdChange(e) {
    //  console.log(e.target.value)
    this.setState({
      password: e.target.value
    });
  }

    login(e){
      e.preventDefault();

      var userEmail = this.state.email;//document.getElementById("email_field").value;
      var userPass = this.state.password;//document.getElementById("password_field").value;

      console.log(this.state.email);

      if (userEmail != "" && userPass != "")      {
          firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            //window.alert("Error : " + errorCode);
          });
        }
    }

    logout(){
      this.setState(
        {loggedIn: false, email:'', password :''}
      );
      firebase.auth().signOut();
      this.props.history.push('/Login');
    }
    redirectUser () {
    //  this.props.history.push('/');

    }
   render() {

    // const { from } = this.props.location.state || '/';
    //  const { fireRedirect } = this.state.fireRedirect;

    const {history} = this.props;

     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         // User is signed in.

         document.getElementById("user_div").style.display = "block";
         document.getElementById("login_div").style.display = "none";

         var user = firebase.auth().currentUser;

         if(user != null){
                 //this.setState({ fireRedirect: true });
                 this.fireRedirect = true;

                var email_id = user.email;
                 document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
                  // this.setState({loggedIn: true, email: user.email });
                  //console.log(this.state.fireRedirect);
                  history.push('/Home');
         }

       } else {
         // No user is signed in.
         document.getElementById("user_div").style.display = "none";
         document.getElementById("login_div").style.display = "block";
      //   this.setState({loggedIn: false, email: '', password : '' });
       }
     });

      return (
         <div>
         <html>
          <head>
              <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet"/>
          </head>
          <body>
               <form>
                <div id="login_div" class="main-div">
                 <h3>Login</h3>
                 <input type="email" placeholder="Email..." id="email"  onChange={this.handleEmailChange} value={this.state.email}/>
                 <input type="password" placeholder="Password..." id="password" onChange={this.handlePwdChange}  value={this.state.password}/>
                 <button onClick={this.login} >Login to Account</button>
                </div>

                <div id="user_div" class="loggedin-div">
                 <h3>Welcome User</h3>
                 <p id="user_para"> You are currently logged in.</p>
                 <button onClick={this.logout}>Logout</button>
                </div>
            </form>
          </body>
          </html>
         </div>
      );
   }
}
export default withRouter(Login);
