<?php
$connection = new mysqli('localhost', 'root', '*126*mysql#', 'medremind');

if($connection -> connect_error){
    die(json_encode(['success' => false, 'message' => 'System error']));

}
?>