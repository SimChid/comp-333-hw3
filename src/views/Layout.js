// Layout.js

import { Outlet} from "react-router-dom";
import SignInUp from "../SignInUp";
import React from "react";
import createSongRating from "../createSongRating";
import './Layout.css';

class Layout extends React.Component{
  constructor(props){
    super(props) ;
    this.state = {username : "Aaron", loggedIn : false} ;
  }
  render(){
    if (this.state.loggedIn){
      return (
      <div className = "app">
        <h1 className = "title">STARTUNES</h1>
        <h3 className = "intro">Welcome {this.state.username}!</h3>
        <createSongRating />
        <Outlet />
      </div>
      ) ;
    } else {
      return (
        <div className = "app">
          <h1 className = "title">STARTUNES</h1>
          <h3 className = "intro">Please login or sign up to add your ratings.</h3>
          <SignInUp />
          <p className = "a">See what other users have rated:</p>
          <Outlet />
        </div>
      ) ;
    }
  }
}

export default Layout;