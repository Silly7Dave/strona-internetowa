<?php
define('DB_SERVER', '172.28.0.3');
define('DB_USERNAME', 'docker');
define('DB_PASSWORD', 'docker');
define('DB_NAME', 'docker');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>