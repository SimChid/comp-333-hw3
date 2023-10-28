<?php

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ; // Get the portion of the URL that has relevant information
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin:*') ; // Allow requests from anywhere
header('Access-Control-Allow-Headers:*') ; // Allow all headers
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE') ; // Allow POST,GET,OPTIONS, and DELETE operations
header('Access-Control-Allow-Credentials: true') ; // Sending cookies is acceptable

$uri = explode('/', $uri) ; // Take the uri string and break it into an array that can be worked with
if ($uri[3] == 'user'){ // Time to do user related stuff!
    require PROJECT_ROOT_PATH . 'UserController.php' ; // Bring in all relevant functions

    $objUserController = new UserController() ; // Instantiate UserController instance
    $strMethodName = $uri[4] . 'Action' ; // Set up to execute the relevant method
    $objUserController->{$strMethodName}() ; // Execute it!

}

if ($uri[3] == 'song'){ // Time to do song related stuff!
    require "SongController.php"; // Bring in all song related functions
    $objSongController = new SongController() ; // Instantiate SongController instance
    $strMethodName = $uri[4] . 'Action' ; // Set up to execute the relevant method
    
    $objSongController->{$strMethodName}() ; // Execute it!
}

?>