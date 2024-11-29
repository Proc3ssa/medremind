<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);

 $user = $input['user'];
 $prescriptionID = $input['prescriptionValue'] ?? '';;
 $to = $input['to'] ?? '';;
 $from = $input['from'] ?? '';;
 $date = $input['date'] ??  '';
 $reminderID = uniqid();
 $status = "Upcoming";

 $INSERT = "INSERT INTO reminders values('$reminderID', $prescriptionID, '$date', '$to', '$from', '$user', '$status')";

 if(mysqli_query($connection, $INSERT)){
    echo json_encode(['ok' => true, 'message' => 'new reminder added']);
 }

 else{
    echo json_encode(['ok' => false, 'message' => 'error adding reminder ']);
 }

 
}

else{
    echo json_encode(['ok' => false, 'message' => 'wrong request method']);
}
?>