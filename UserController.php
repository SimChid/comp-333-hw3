<?php

class UserController extends BaseController{
    public function createAction(){
        $requestMethod = $_SERVER['REQUEST_METHOD'] ;
        if (strtoupper($requestMethod) == 'POST'){
            $postData = json_decode(file_get_contents('php://input'),true) ;
            $userModel = new UserModel() ;
            $userModel->createUser($postData) ;
        }
    }
}

?>