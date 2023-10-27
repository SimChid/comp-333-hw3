<?php

class UserModel extends Database {
    public function createUser($userData){
        $sql = "INSET INTO users (username,password) VALUES (?,?)" ;
        $result = $this->select($sql,$userData);   
    }
}

?>