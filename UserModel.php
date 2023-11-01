<?php

/*
We're defining a class UserModel that will have the capabilities
of the Databse class AND more user-specific methods
*/

require "Database.php" ;

class UserModel extends Database {
    public function createUser($username,$password){ // Define the function to create the user
        $sql = "SELECT * FROM users WHERE username = ?" ; // Checking if username exists
        $stmt = $this->connection->prepare($sql) ; // Prepare the statement
        $stmt->bind_param('s', $username); // Bind the values to the correct parameters
        $stmt->execute() ; // Check the table
        $result = mysqli_stmt_get_result($stmt);
        $row = mysqli_fetch_assoc($result);
        $num = mysqli_num_rows($result);
        if ($num > 0){
            echo json_encode('Username already exists') ; //user already exists
        }
        else{
            $sql2 = "INSERT INTO users (username,password) VALUES (?,?)";
            $stmt2 = $this->connection->prepare($sql2);
            $stmt2->bind_param('ss',$username,$password);
            $stmt2->execute(); //Insert into table!
            echo json_encode('user created');
        }
    }
    public function readUser($username,$password){
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("s",$username);
        $stmt->execute();
        $result = mysqli_stmt_get_result($stmt);

        $arr = mysqli_fetch_assoc($result);
        //$pass_check = $arr['password'];
        $num = mysqli_num_rows($result);
        
        if($num > 0 && password_verify($password, $pass_check)){
            echo "login success";
        }
        else{
            var_dump($arr) ;
            //echo "wrong username or password";
        }
    }
}

?>