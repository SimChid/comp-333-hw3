<?php
    define("PROJECT_ROOT_PATH", __DIR__ . "/../");
    // include main configuration file 
    require_once PROJECT_ROOT_PATH . "/config.php";
    // include the base controller file 
    require_once PROJECT_ROOT_PATH . "/BaseController.php";
    // include the use model file 
    require_once PROJECT_ROOT_PATH . "/UserModel.php";
    // include the song model file 
    require_once PROJECT_ROOT_PATH . "/SongModel.php";
?>