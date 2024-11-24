<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);

$user = $input['user'];
 $prescription = $input['prescriptionValue'] ?? '';;
 $to = $input['to'] ?? '';;
 $from = $input['from'] ?? '';;
 $date = $input['date'] ??  '';
 $reminderID = uniqid();
 $medicine = explode(',', $prescription)[0];
 $dossage =  explode(',', $prescription)[1];
 $status = "Upcoming";

 echo json_encode([$user, $date, $to, $from, $prescription, $reminderID, $medicine, $dossage, $status]);
}

else{
    echo json_encode(['ok' => false, 'message' => 'wrong request method']);
}
?>