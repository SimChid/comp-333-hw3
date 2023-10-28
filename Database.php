<?php
class Database{
    protected $connection = null;
    public function __construct(){
        $this->connection = new mysqli("localhost","root","","music_db");			
    }
    public function select($query = "" , $params = []){
        $stmt = $this->executeStatement( $query , $params );
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);				
        $stmt->close();
        return $result;
    }
    private function executeStatement($query = "" , $params = []){
        $stmt = $this->connection->prepare( $query );
        if($stmt === false) {
            throw New Exception("Unable to do prepared statement: " . $query);
        }
        if( $params ) {
            $stmt->bind_param($params[0], $params[1]);
        }
        $stmt->execute();
        return $stmt;
    }
}