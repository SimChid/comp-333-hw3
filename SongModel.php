<?php

/*
We're defining a class SongModel that will have the capabilities
of the Databse class AND more song-specific methods
*/

require "Database.php" ;

class SongModel extends Database {
    public function enumerateSongs(){ // Define the function to enumerate the songs
        $conn = mysqli_connect("localhost","root","","music_db") ;
        $sql = "SELECT * from ratings" ; // The query to get the songs
        $result = $conn->query($sql); // Do the query
        $rows = $result->fetch_all(MYSQLI_ASSOC); // Get the output
     
        echo json_encode($rows) ; // output the output
        $conn->close();  // clean up 
    }
    public function createSong($username,$artist,$song,$rating){ // Define the function to add a song to database
        $sql = "INSERT INTO ratings (username,artist,song,rating) VALUES (?,?,?,?)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param('sssi',$username,$artist,$song,$rating);
        $stmt->execute();
        if ($stmt->affected_rows == 1){
            echo 'Song Added';
        }
    }
    public function readSong($_ID){
        $sql = "SELECT * FROM ratings WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param('i',$_ID);
        $stmt->execute();
        $stmt->bind_result($id,$username,$artist,$song,$rating);
        if ($stmt->affected_rows == 1){
            echo $artist;
            echo $song;
            echo $rating;
        }
    }
    public function updateSong($id,$artist,$song,$rating){
        $sql = "UPDATE ratings SET artist = ?, song = ?, rating = ? WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param('ssii',$artist,$song,$rating,$id);
        $stmt->execute();
        if ($stmt->affected_rows == 1){
            echo 'Song Updated';
        }
    }
    public function deleteSong($id){
        $sql = "DELETE FROM ratings WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        if ($stmt->affected_rows == 1){
            echo 'Song Deleted';
        }
    }
}

?>