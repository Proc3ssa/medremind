<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);

    
    $data = $input['data'] ?? '';
    $type = $input['type'] ?? '';

    $SELECT = "";

    if($type == 'email'){
        $SELECT = "SELECT COUNT(*) FROM users WHERE email = '$data'";
    }
    else{
        $SELECT = "SELECT COUNT(*) FROM users WHERE phone = '$data'";
    }

    $query = mysqli_query($connection, $SELECT);
    $res = mysqli_fetch_assoc($query);
    $count = $res['COUNT(*)'];

    
}
else{
    echo json_encode(['exists' => false, 'message' => 'Invalid request method']);
}
?>
 