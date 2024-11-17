<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';
$user = $_GET['user'];

$SELECT = "SELECT *from prescriptions WHERE user = '$user'";
$QUERY = mysqli_query($connection, $SELECT);

$RES = [];
while($row = mysqli_fetch_assoc($QUERY)){
    $RES[] = $row;
}

echo json_encode($RES);



?>