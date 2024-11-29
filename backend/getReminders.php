<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $user = $_GET['user'];
    $day = $_GET['day'] ?? date('d');
    $month = $_GET['month'] ?? date('m');

    $SELECT = "SELECT *FROM reminders WHERE user = '$user' and date Like '____-$month-$day'";

    $QUERY = mysqli_query($connection, $SELECT);
    if($QUERY){
        while($res = mysqli_fetch_assoc($QUERY)){
            echo json_encode($res);
        }
    }
   
}


else{
    echo json_encode(['ok' => false, 'message' => 'wrong request method']);
}
?>