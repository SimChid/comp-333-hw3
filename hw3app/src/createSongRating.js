import React from "react";
import axios from "axios";

class createSongRating extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {username : "", song : "", artist : "", rating : "", output : ""} ;
    }
    mySubmitHandler = (event) => {
        event.preventDefault() ;
        axios.get("http://localhost/comp-333-hw3/index.php/user/read",
        {username : this.state.username,
        password : this.state.password}).then((response) => {
          this.setState({loggedIn : true}) ;
          this.setState({output : response}) ;
          // Determine if they are logged in or not based on the output.
          // Return the corresponding message.
        }).catch((error) => console.log(error)) ;
    } ;

    myChangeSong = (event) => {
        this.setState({song: event.target.value}) ;
    } ;
    myChangeArtist = (event) => {
        this.setState({artist : event.target.value}) ;
    } ;
    myChangeRating = (event) => {
        this.setState({rating : event.target.value}) ;
    } ;

    render(){
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <label>Song:</label><input type = "text" onChange={this.myChangeSong} /><br />
                    <label>Artist:</label><input type = "text" onChange={this.myChangeArtist} /><br />
                    <label>Rating:</label><input type = "text" onChange={this.myChangeRating} /><br />
                </form>
                <p>{this.state.output}</p>
            </div>
        ) ;
    }


}

export default createSongRating ;