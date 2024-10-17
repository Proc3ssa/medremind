<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
  
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $phone = $input['phone'] ?? '';
    $password = $input['password'] ?? '';
    $id = rand(999,10000);

    $stmt = $connection->prepare("INSERT INTO users (id,name, password, email, phone) values(?,?,?,?,?)");
   

    
    $stmt -> bind_param("issss", $id, $name, $password, $email, $phone);
    ;
    

    if($stmt -> execute()){
      echo  json_encode(['signedup' => true, 'message' => 'You have successfully signed']);

        $stmt ->close();
        $connection -> close();
        exit;
    }
    else{

    
    echo  json_encode(['signedup' => false]);

        $stmt ->close();
        $connection -> close();
        exit;
    }

} else {
    // Handle invalid request methods
    echo json_encode(['signedup' => false, 'message' => 'Something went wrong, unable to signup.']);
}
?>
