import React from "react";
import axios from "axios";
//import Enumerate from "./App";
//import DeleteSong from "./delete";

export default class CreateSongRating extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            song : "", 
            artist : "", 
            rating : "", 
            output : "",
            data : [], 
            first : true,
            updating : false,
            idUpdate : "",
            songUpdate : "",
            artistUpdate : "",
            ratingUpdate : ""
        } ;
    }
    createRating  = (event) => { // Send the HTTP request to create the song rating
        event.preventDefault() ;
        axios.post("http://localhost/comp-333-hw3/index.php/song/create", // Request
          {username : this.props.username,
            artist : this.state.artist, 
            song : this.state.song,
            rating : this.state.rating
        }).then((response) => // Info
          { // What to do with the response
            this.setState({output : response.data});
            this.enumerate() ;
          }).catch((error) => console.log(error)) ; // Handle errors
    } ;

    deleteRating  = (songID) => { // Send the HTTP request to delete the song
        axios.post("http://localhost/comp-333-hw3/index.php/song/delete", // Request
          {id : songID}
        ).then((response) => // Info
          { // What to do with the response
            this.setState({output : response.data});
            this.enumerate() ;
          }).catch((error) => console.log(error)) ; // Handle errors
    } ;

    updateRating = (event) => {
        event.preventDefault() ;
        axios.post("http://localhost/comp-333-hw3/index.php/song/update", // Request
          { artist : this.state.artistUpdate, 
            song : this.state.songUpdate,
            rating : this.state.ratingUpdate,
            id : this.state.idUpdate
        }).then((response) => // Info
          { // What to do with the response
            this.setState({output : response.data,updating : false, song: "", artist : "", rating : ""});
            this.enumerate() ;
          }).catch((error) => console.log(error)) ; // Handle errors
    } ;

    enumerate = () => {
        axios.get("http://localhost/comp-333-hw3/index.php/song/enumerate")
        .then((response) => {
            this.setState({data : response.data});
        })
        .catch((error) => console.log(error));
    }
    doBoth = (event) => {
        this.setState({first : false}) ;
        this.createRating(event) ;
    }

    myChangeSong = (event) => {
        this.setState({song: event.target.value}) ;
    } ;
    myChangeArtist = (event) => {
        this.setState({artist : event.target.value}) ;
    } ;
    myChangeRating = (event) => {
        this.setState({rating : event.target.value}) ;
    } ;
    trackSongUpdate = (event) => {
        this.setState({songUpdate: event.target.value}) ;
    } ;
    trackArtistUpdate = (event) => {
        this.setState({artistUpdate : event.target.value}) ;
    } ;
    trackRatingUpdate = (event) => {
        this.setState({ratingUpdate : event.target.value}) ;
    } ;

    render(){
        const irrelevant = this.enumerate() ;
        if (this.state.updating){
            return (
                <div>
                    <h3 className = "intro">Add a song rating! Let us know what you think!</h3>
                    <form onSubmit={this.updateRating}>
                        <label className = "uname">Song:</label><input type = "text" value = {this.state.songUpdate} onChange={this.trackSongUpdate} /><br />
                        <label className = "uname">Artist:</label><input type = "text" value = {this.state.artistUpdate} onChange={this.trackArtistUpdate} /><br />
                        <label className = "uname">Rating:</label><input type = "text" value = {this.state.ratingUpdate} onChange={this.trackRatingUpdate} /><br />
                        <input type = "submit" value="Update!"/>
                    </form>
                    <p>{this.state.output}</p>
                    <table>
                        <tr><th>User</th><th>Song</th><th>Artist</th><th>Rating</th><th>Actions</th></tr>
                        {this.state.data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td> 
                            <td>{item.song}</td> 
                            <td>{item.artist}</td> 
                            <td className = "rating">{item.rating}</td>
                            <td>{item.username === this.props.username ? 
                                <div>
                                    <button onClick={() => {this.deleteRating(item.id)}}>delete</button> 
                                    <button onClick={() => {
                                        this.setState({
                                            updating : true, idUpdate : item.id, songUpdate : item.song,
                                            artistUpdate : item.artist, ratingUpdate : item.rating})}}>update</button>
                                </div> : null }</td>
                        </tr>))}
                    </table>
                </div>
            ) ;
        } else {
            return (
                <div>
                    <h3 className = "intro">Add a song rating! Let us know what you think!</h3>
                    <form onSubmit={this.doBoth}>
                        <label className = "uname">Song:</label><input type = "text"  onChange={this.myChangeSong} /><br />
                        <label className = "uname">Artist:</label><input type = "text" onChange={this.myChangeArtist} /><br />
                        <label className = "uname">Rating:</label><input type = "text" onChange={this.myChangeRating} /><br />
                        <input type = "submit" value="Post!"/>
                    </form>
                    <p>{this.state.output}</p>
                    <table>
                        <tr><th>User</th><th>Song</th><th>Artist</th><th>Rating</th><th>Actions</th></tr>
                        {this.state.data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td> 
                            <td>{item.song}</td> 
                            <td>{item.artist}</td> 
                            <td className = "rating">{item.rating}</td>
                            <td>{item.username === this.props.username ? 
                                <div>
                                    <button onClick={() => {this.deleteRating(item.id)}}>delete</button> 
                                    <button onClick={() => {
                                        this.setState({
                                            updating : true, idUpdate : item.id, songUpdate : item.song,
                                            artistUpdate : item.artist, ratingUpdate : item.rating})}}>update</button>
                                </div> : null }</td>
                        </tr>))}
                    </table>
                </div>
            ) ;
        }
            

    }
        
    
}
