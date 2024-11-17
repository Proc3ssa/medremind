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


   

    $query = mysqli_query($connection, "SELECT *FROM users where email = '$email' and password = '$password'");
    
    $result = mysqli_fetch_assoc($query);

    if($query -> num_rows == 1){
      if($result['status'] == 'Verified'){
        echo  json_encode(['success' => true, 'message' => 'Login successful']);

      }
      else{
        echo  json_encode(['success' => false, 'message' => 'Your Account has not been verified. check your phone for verification code.']);
      }

      echo json_encode(['success' => true, 'message' => 'login successfull']);

    }
    echo  json_encode(['success' => false, 'message' => 'Login not successful']);


        $connection -> close();
        exit;

} else {
    // Handle invalid request methods
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
