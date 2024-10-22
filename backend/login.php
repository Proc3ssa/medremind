<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
  
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';


   

    $stmt = $connection->prepare("SELECT *FROM users where email = ? and password = ?");
    $stmt -> bind_param("ss", $email, $password);
    $stmt -> execute();
    $stmt -> store_result();

    if($stmt -> num_rows == 1){
      echo  json_encode(['success' => true, 'message' => 'Login successful']);

        $stmt ->close();
        $connection -> close();
        exit;
    }
    echo  json_encode(['success' => false, 'message' => 'Login not successful']);

        $stmt ->close();
        $connection -> close();
        exit;

} else {
    // Handle invalid request methods
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
