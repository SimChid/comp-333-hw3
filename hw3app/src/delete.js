import React from "react";
import axios from "axios";

class DeleteSong extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {output : ""} ;
    }

    delete  = () => { // Send the HTTP request to sign up
        //event.preventDefault() ;
        axios.post("http://localhost/comp-333-hw3/index.php/song/delete", // Request
          {id : this.props.id}).then((response) => // Info
          { // What to do with the response
            console.log(response)
          }).catch((error) => console.log(error)) ; // Handle errors
    } ;

    render(){
        return <button onClick={() => {this.delete(this.props.id)}}>delete</button>
    }
}

export default DeleteSong ;