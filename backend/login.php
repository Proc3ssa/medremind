<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://medremind.vercel.app');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    include 'connection.php';

    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

   $SELECT = "SELECT * FROM users WHERE email = '$email' and password = '$password'";

   $QUERY = mysqli_query($connection, $SELECT);

   $RES = mysqli_fetch_assoc($QUERY);
  
   $count = $QUERY -> num_rows;

   if($count === 1){
     if($RES['status'] == "Verified"){
      echo json_encode(["ok" => true, "message" => "login successfull"]);
     }
     else{
      echo json_encode(["ok" => false, "message" => "Account not verified, check your phone for SMS verification code"]);
     }
   }

   else{
    echo json_encode(["ok" => false, "message" => "wrong credentials"]);
   }
} 




else {
    echo json_encode(['error' => 'Invalid request method']);
}

?>
