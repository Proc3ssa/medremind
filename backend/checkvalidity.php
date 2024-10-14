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

    ($type == 'email') ? $stmt = $connction->prepare("SELECT *FROM users where email = ? ") :
    $stmt = $connction->prepare("SELECT *FROM users where phone = ?");
   

    
    $stmt -> bind_param("s", $data);
    $stmt -> execute();
    $stmt -> store_result();

    if($stmt -> num_rows == 1){
      echo  json_encode(['exists' => true]);

        $stmt ->close();
        $connction -> close();
        exit;
    }
    echo  json_encode(['exists' => false]);

        $stmt ->close();
        $connction -> close();
        exit;

} else {
    // Handle invalid request methods
    echo json_encode(['exists' => false, 'message' => 'Invalid request method']);
}
?>
