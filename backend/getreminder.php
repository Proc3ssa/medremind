<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';
$reminderid = $_GET['reminderid'];

$SELECT = "SELECT *from reminders WHERE reminder_id = '$reminderid'";
$QUERY = mysqli_query($connection, $SELECT);


$row = mysqli_fetch_assoc($QUERY);

echo json_encode(array_merge(['ok' => true],$row));



?>