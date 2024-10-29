<?php
header('Content-Type : application/json');
header('Access-Control-Allow-Origin : *');
header('Access-Control-Allow-Methods : POST');
header('Access-Control-Allow-Headers : Content-type');

include 'connection.php';

if($_SERVER['REQUEST_METHOD'] == "POST"){

    

    $input = json_decode(file_get_contents('php://input'), true);

    $code = $input['code'] ?? '';

    $UPDATE = "UPDATE users set status = 'Verified' WHERE id = $code";
    $SELECT = "SELECT *FROM users WHERE id = $code";
    $query = mysqli_query($connection, $SELECT);

    if($query -> num_rows == 1){
        echo json_encode(['status' => true]);
        $query = mysqli_query($connection, $UPDATE);
    }

    else{
        echo json_encode(['status' => false]);

    }
}
else{
    echo json_encode(['status' => false, 'message' => 'Internal server error']);
}




?>