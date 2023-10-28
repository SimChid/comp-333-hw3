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
            $userModel = new UserModel() ; // Create a UserModel to do the SQL query
            $userModel->createUser($_POST) ; // Create the user
        }
    }
}

?>