<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php';
 

function replaceSpaces($text) {
  
    return str_replace(' ', '%20', $text);
  }

function new_sms($SMS, $phone){
    $url = 'https://sms.arkesel.com/sms/api?action=send-sms&api_key=dWd6Vk9xSXNkVUpTUElpR2JweUQ&to='.$phone.'&from=MedRemind&sms='.$SMS.'';
   
    $formatedUrl = replaceSpaces($url);
   
     $ch = curl_init();
     curl_setopt($ch, CURLOPT_URL, $formatedUrl);
     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
     $response = curl_exec($ch);
   
     if ($response === false) {
           echo 'Error: ' . curl_error($ch);
          
       }
     curl_close($ch);
   
   
   }



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
  
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $phone = $input['phone'] ?? '';
    $password = $input['password'] ?? '';
    $id = rand(999,10000);
    $SMS = "Use the code $id to verify you account";

    $stmt = $connection->prepare("INSERT INTO users (id,name, password, email, phone) values(?,?,?,?,?)");
   

    
    $stmt -> bind_param("issss", $id, $name, $password, $email, $phone);
    ;
    

    if($stmt -> execute()){
      echo  json_encode(['signedup' => true, 'message' => 'You have successfully signed']);

      new_sms($SMS, $phone);

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
