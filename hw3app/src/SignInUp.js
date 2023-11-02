import React from "react";
import axios from "axios";
import CreateSongRating from "./createSongRating";

/*
The class signInUp will render the portion of the page that controls signing in and
signing up. Initially the user will be able to log in, but on the side there will be
a button that can be clicked to replace the sign in form with a sign up form
*/
class SignInUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false, 
      preferredPage : "",
      username : "", 
      password : "", 
      confirm : "", 
      information : "Please login or sign up to add your ratings."} ;
  }
  trackUsername = (event) => { // Update the username state on the fly
    this.setState({username: event.target.value}) ;
  } ;
  trackPassword = (event) => { // Update the password state on the fly
    this.setState({password: event.target.value}) ;
  } ;
  trackConfirm = (event) => { // Update the confirm password state on the fly
    this.setState({confirm: event.target.value}) ;
  } ;


  LogInHandler = (event) => { // Send the HTTP request to log in
    event.preventDefault() ;
    axios.post("http://localhost/comp-333-hw3/index.php/user/read", // Request
    { // Info
      username : this.state.username,
      password : this.state.password
    }).then((response) => { // What to do with the response
      if (response.data === "login success"){
        this.setState({loggedIn : true})
      } else {
        this.setState({information : "Incorrect username or password"})
      }
    }).catch((error) => console.log(error)) ; // Handle errors
  } ;

  SignUpHandler  = (event) => { // Send the HTTP request to sign up
    event.preventDefault() ;
    axios.post("http://localhost/comp-333-hw3/index.php/user/create", // Request
      {username : this.state.username,p1 : this.state.password, p2 : this.state.confirm}).then((response) => // Info
      { // What to do with the response
        if (response.data === "user created"){
          this.setState({loggedIn : true})
        } else {
          this.setState({information : response.data})
        }
      }).catch((error) => console.log(error)) ; // Handle errors
  } ;

  render() {
    if (this.state.loggedIn){
      return (
        <div>
          <table>
            <tr>
              <td><h3 className = "intro">Welcome {this.state.username}!</h3></td>
              <td><button type="button" onClick={() => {this.setState({preferredPage : "",loggedIn : false})}}>Log Out</button></td>
            </tr>
          </table>
          <CreateSongRating username={this.state.username} />
        </div>) ;
    } else {
      switch (this.state.preferredPage) {
        case 'Log In':
          return (
            <div>
              <p className = "intro">{this.state.information}</p><br />
              <form onSubmit={this.LogInHandler}>
                <label className = "uname">Username:</label><input type = "text" onChange={this.trackUsername} /><br />
                <label className = "uname">Password:</label><input type = "password" onChange={this.trackPassword} /><br />
                <input type = "submit" value="Log In"/>
              </form>
            </div>) ;
        case 'Sign Up':
          return(  
            <div>
              <form onSubmit={this.SignUpHandler}>
                <p className = "intro">{this.state.information}</p><br />
                <label className = "uname">Username:</label><input type = "text" onChange={this.trackUsername} /><br />
                <label className = "uname">Password:</label><input type = "password" onChange={this.trackPassword} /><br />
                <label className = "uname">Confirm:</label><input type = "password" onChange={this.trackConfirm} /><br />
                <input type = "submit" value="Sign Up!"/>
              </form>
            </div>) ;
        default:
          return(
            <div>
              <p className = "intro">{this.state.information}</p><br />
              <button onClick={() => this.setState({preferredPage : "Log In"})}>Log In</button>
              <button onClick={() => this.setState({preferredPage : "Sign Up"})}>Sign Up</button>
            </div>) ;
      }
    } 
  } 
}

export default SignInUp ;