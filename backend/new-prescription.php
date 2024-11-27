<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);

$user = $input['user'];
 $name = $input['name'] ?? '';;
 $type = $input['type'] ?? '';;
 $amount = $input['amount'] ?? '';;
 $dossage = $input['dossage'] ??  '';
 $id = 1;

 
 $INSERT = "INSERT INTO prescriptions (user, medicine, dossage, type, amount) VALUES('$user', '$name', '$dossage', '$type', $amount)";

 if(mysqli_query($connection, $INSERT)){
    echo json_encode(['ok' => true, 'message' => "Prescription added"]);

 }
 else{
    echo json_encode(['ok' => false, 'message' => "Prescription could not be added"]);
}
}

else{
    echo json_encode(['ok' => false, 'message' => 'wrong request method']);
}
?>