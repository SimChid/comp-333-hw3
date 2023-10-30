<?php

/*
We're defining a class SongController that will have the capabilities
of the BaseController class AND more song-specific methods
*/

require "BaseController.php" ;
require "SongModel.php" ;
class SongController extends BaseController{
    public function enumerateAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'] ;
        if (strtoupper($requestMethod) == 'GET'){ // If we're GETing (enumerating songs in the database)
            //$getData = json_decode(file_get_contents('php://input'),true) ; // Get the username + password to add
            $songModel = new SongModel() ; // Create a SongModel to do the SQL query
            $songModel->enumerateSongs() ; // Enumerate the songs
        }
    }
    public function createAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        if (strtoupper($requestMethod) == 'POST'){
            $songModel = new SongModel();
            $songModel->createSong($_POST); //too few arguments
        }
    }

    public function updateAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        if (strtoupper($requestMethod) == 'PUT'){
            $songModel = new SongModel();
            $songModel->updateSong($_PUT); //unsure what variable to put here
        }
    }

    public function deleteAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        if (strtoupper($requestMethod) == 'DELETE'){
            $songModel = new SongModel();
            $songModel->deleteSong($_DELETE); //unsure what variable to put here
        }
    }
}

?>