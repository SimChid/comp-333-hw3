// Layout.js

import { Outlet} from "react-router-dom";
import SignInUp from "../SignInUp";
import React from "react";
import createSongRating from "../createSongRating";

class Layout extends React.Component{
  constructor(props){
    super(props) ;
    this.state = {username : "Aaron", loggedIn : false} ;
  }
  render(){
    if (this.state.loggedIn){
      return (
      <div>
        <h1>STARTUNES</h1>
        <h3>Welcome {this.state.username}!</h3>
        <createSongRating />
        <Outlet />
      </div>
      ) ;
    } else {
      return (
        <div>
          <h1>STARTUNES</h1>
          <SignInUp />
          <Outlet />
        </div>
      ) ;
    }
  }
}

export default Layout;