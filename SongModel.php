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
}

?>