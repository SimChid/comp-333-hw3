<?php

/*
We're defining a class UserModel that will have the capabilities
of the Databse class AND more user-specific methods
*/

require "Database.php" ;

class UserModel extends Database {
    public function createUser($userData){ // Define the function to create the user
        $sql = "INSERT INTO users (username,password) VALUES (?,?)" ; // The query to insert into the user table
        $stmt = $this->connection->prepare($sql) ; // Prepare the statement
        $stmt->bind_param('ss', $userData['username'], $userData['password']); // Bind the values to the correct parameters
        $stmt->execute() ; // Insert into the table!
        if ($stmt->affected_rows == 1){
            echo 'User Created' ;
        }
    }
}

?>