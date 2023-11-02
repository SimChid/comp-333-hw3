// Layout.js

import { Outlet} from "react-router-dom";
import SignInUp from "../SignInUp";
import React from "react";

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
        <Outlet />
      </div>
      ) ;
    } else {
      return (
        <div className = "app">
          <h1 className = "title">STARTUNES</h1>
          <SignInUp />
          <Outlet />
        </div>
      ) ;
    }
  }
}

export default Layout;