import ReactDOM from "react-dom/client";
import React from 'react';

class LogIn extends React.Component{
  // Have form submission processing and requesting functions

  render (){
    return (
      <form >
        <label>Username:</label><input type = "text" name = "username" />
        <label>Password:</label><input type = "text" name = "password" />
        <input type = "submit" value="Log In"/>
      </form>
    ) ;
  }
}

class SignUp extends React.Component{
  // Have form submission processing and requesting functions

  render (){
    return (
      <form >
        <label>Username:</label><input type = "text" name = "username" />
        <label>Password:</label><input type = "text" name = "password" />
        <label>Confirm Password:</label><input type = "text" name = "confirm" />
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
  changeToSignUp

  render() {
    switch (this.state.status) {
      case 'LogIn':
        return (
        <table>
          <tr>
            <td><LogIn /></td>
            <td><button onClick={() => this.setState({status: 'SignUp'}) }>Create Account</button></td>
          </tr>
        </table>);
      case 'SignUp':
        return <SignUp />;
      default:
        return <LogIn/>;
    }
  }
}

export default SignInUp ;