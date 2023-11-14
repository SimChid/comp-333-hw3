<?php

/*
We're defining a class UserController that will have the capabilities
of the BaseController class AND more user-specific methods
*/

require "BaseController.php" ;
require "UserModel.php" ;

class UserController extends BaseController{
    public function createAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'] ;
        
        if (strtoupper($requestMethod) == 'POST'){ // If we're POSTing (creating a new user)
            $requestData = json_decode(file_get_contents('php://input'),true); // Decode json request
            $username = $requestData['username']; //set data to variables
            $p1 = $requestData['p1'];
            $p2 = $requestData['p2'];
            if ($p1 != $p2){
                echo json_encode("passwords must match");
            }else{
                $h_password = password_hash($p1, PASSWORD_DEFAULT);
                $userModel = new UserModel() ; // Create a UserModel to do the SQL query
                $userModel->createUser($username,$h_password) ; // Create the user
            }
        }
    }

    public function readAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        if (strtoupper($requestMethod) == 'POST'){
            $requestData = json_decode(file_get_contents('php://input'),true);
            $username = $requestData['username'];
            $password = $requestData['password'];
            $userModel = new UserModel();
            $userModel->readUser($username,$password);
        }
    }
}

?>