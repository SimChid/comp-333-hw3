<?php

/*
We're defining a class UserController that will have the capabilities
of the BaseController class AND more user-specific methods
*/
class UserController extends BaseController{
    public function createAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'] ;
        if (strtoupper($requestMethod) == 'POST'){ // If we're POSTing (creating a new user)
            $postData = json_decode(file_get_contents('php://input'),true) ; // Get the username + password to add
            $userModel = new UserModel() ; // Create a UserModel to do the SQL query
            $userModel->createUser($postData) ; // Create the user
        }
    }
}

?>