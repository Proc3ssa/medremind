<?php
$connction = new mysqli('localhost', 'root', '*126*mysql#', 'medremind');

if($connction -> connect_error){
    die(json_encode(['success' => false, 'message' => 'System error']));

}
?>