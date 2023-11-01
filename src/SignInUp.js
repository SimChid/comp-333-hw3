import React from "react";
import axios from "axios";

class LogIn extends React.Component{
  constructor(props){
    super(props) ;
    this.state = {username : "aaron",password : "",loggedIn : false} ;
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault() ;
    axios.get("http://localhost/comp-333-hw3/index.php/user/read",{username : this.state.username, password : this.state.password}).then((response) => {
      console.log(response.data) ;
      // Determine if they are logged in or not based on the output.
      // Return the corresponding message.
    }).catch((error) => console.log(error)) ;
  } ;
  myChangeUsername = (event) => {
    this.setState({username: event.target.value}) ;
  } ;
  myChangePassword = (event) => {
    this.setState({password: event.target.value}) ;
  } ;
  // Have form submission processing and requesting functions

  render (){
    if (this.state.loggedIn){
      return <h3>Welcome {this.state.username}!</h3> ;
    } else {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <label className = "uname">Username:</label><input type = "text" onChange={this.myChangeUsername} /><br />
          <label className = "uname">Password:</label><input type = "password" onChange={this.myChangePassword} /><br />
          <input type = "submit" value="Log In"/>
        </form>
      ) ;
    }
  }
}

class SignUp extends React.Component{
  constructor(props){
    super(props) ;
    this.state = {username : "", password : "", confirm : ""} ;
  }
  mySubmitHandler = (event) => {
    event.preventDefault() ;
    axios.post("http://localhost/comp-333-hw3/index.php/user/create",
      {username : this.state.username,p1 : this.state.password, p2 : this.state.confirm}).then((response) => 
      {
        this.setState({loggedIn : true}) ;
        this.setState({username : response}) ;
        // Determine if they are logged in or not based on the output.
        // Return the corresponding message.
      }).catch((error) => console.log(error)) ;
  } ;
  myChangeUsername = (event) => {
    this.setState({username: event.target.value}) ;
  } ;
  myChangePassword = (event) => {
    this.setState({password: event.target.value}) ;
  } ;
  myChangeConfirm = (event) => {
    this.setState({confirm: event.target.value}) ;
  } ;

  render (){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <label className = "uname">Username:</label><input type = "text" onChange={this.myChangeUsername}/><br/>
        <label className = "uname">Password:</label><input type = "password" onChange={this.myChangePassword}/><br/>
        <label className = "uname">Confirm Password:</label><input type = "password" onChange={this.myChangeConfirm}/><br/>
        <input type = "submit" value="Sign Up"/>
      </form>
    ) ;
  }
}

/*
The class signInUp will render the portion of the page that controls signing in and
signing up. Initially the user will be able to log in, but on the side there will be
a button that can be clicked to replace the sign in form with a sign up form
*/
class SignInUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {status: 'LogIn'};
  }

  render() {
    switch (this.state.status) {
      case 'LogIn':
        return <div><LogIn /><br /><button onClick={() => this.setState({status: 'SignUp'}) }>Create Account</button></div>;
      case 'SignUp':
        return <div><SignUp /><br /><button onClick={() => this.setState({status: 'LogIn'}) }>Return to Sign In</button></div>;
      default:
        return <div><LogIn /><br /><button onClick={() => this.setState({status: 'SignUp'}) }>Create Account</button></div>;
    }
  }
}

export default SignInUp ;