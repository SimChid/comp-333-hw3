<?php

class UserModel extends Database {
    public function createUser($userData){
        $sql = "INSET INTO users (username,password) VALUES (?,?)" ;
        mysqli_stmt_bind_param($stmt,"ss",$s_username,$hashedPassword) ;
        mysqli_stmt_execute($stmt);   
    }
}

?>