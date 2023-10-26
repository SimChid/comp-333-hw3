<?php
class BaseController{
    /* This will get called if you try to call a method on a BaseController
    object that does not exist */
    public function __call($name, $arguments){
        $this->sendOutput('', array('HTTP/1.1 404 Not Found'));
    }

    // Returns the elements of the url, as an array
    protected function getUriSegments(){
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $uri = explode( '/', $uri );
        return $uri;
    }

    // Stores the query string in the variable query
    protected function getQueryStringParams(){
        return parse_str($_SERVER['QUERY_STRING'], $query);
    }
    
    // Sends the API response back to the user
    protected function sendOutput($data, $httpHeaders=array()){
        header_remove('Set-Cookie');
        if (is_array($httpHeaders) && count($httpHeaders)) {
            foreach ($httpHeaders as $httpHeader) {
                header($httpHeader);
            }
        }
        echo $data;
        exit;
    }
}