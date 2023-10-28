<?php

/*
We're defining a class UserModel that will have the capabilities
of the Databse class AND more user-specific methods
*/

class UserModel extends Database {
    public function createUser($userData){ // Define the function to create the user
        $sql = "INSET INTO users (username,password) VALUES (?,?)" ; // The query to insert into the user table
        $result = $this->select($sql,$userData);   // Inserting!
    }
}

?>