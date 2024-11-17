<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
  
    $user = $input['user'] ?? '';
    $date = $input['date'] ?? '';
    $to = $input['to'] ?? '';
    $from = $input['from'] ?? '';
    $prescription = $input['prescription'] ?? '';
    $reminderID = rand(999,10000);
    $medicine = explode(',', $prescription)[0];
    $dossage = explode(',', $prescription)[1];
    $status = "Pending";


    echo json_encode([$user,$date,$to,$from,$prescription,$reminderID,$medicine,$dossage,$status]);
   

    //  $INSERT = "INSERT INTO reminders values($reminderID, '$medicine', '$dossage', '$date', '$to', '$from', '$user', '$status')WHERE";

    // $query = mysqli_query($connection, $INSERT);
    
    

} else {
    // Handle invalid request methods
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
