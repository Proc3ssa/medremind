<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);

 $user = $input['user'];
 $prescriptionID = $input['prescriptionValue'] ?? '';;
 $to = $input['to'] ?? '';;
 $from = $input['from'] ?? '';;
 $date = $input['date'] ??  '';
 $reminderID = uniqid();
 $status = "Upcoming";

//fetch prescription
$preSELECT = "SELECT *FROM prescriptions WHERE id = $prescriptionID";
$preQUERY = mysqli_query($connection, $preSELECT);
$preRES = mysqli_fetch_assoc($preQUERY);

$medicine = $preRES['medicine']; 
$dossage = $preRES['dossage']; 
$type = $preRES['type']; 
$amount = $preRES['amount']; 
$user = $preRES['user']; 

//

function formatDateTime($dateTime) {
 
   $timestamp = strtotime($dateTime);
   
   
   $formattedDate = date('d-m-Y', $timestamp);
   
   
   $formattedTime = date('h:iA', $timestamp);
   
   
   return $formattedDate . ' ' . $formattedTime;
 }
//phone select

$phoneSelect = "SELECT phone from users where email = '$user'";
$phQuery = mysqli_query($connection, $phoneSelect);
$phRes = mysqli_fetch_assoc($phQuery);
$phone = $phRes['phone'];

$SMS = "You have set a reminder for medicince intake.%0A Medicine: $medicine.%0A  Type :$amount $type(s)%0A  Dossage: $dossage.%0A  Day : $date.%0A  Time: $from - $to.%0A  You will be reminded again on $date";

$Ssms = "You set a reminder for medicince intake at this time. %0A  Medicine: $medicine.%0A  Type : $amount $type(s).%0A  Dossage: $dossage. Get well soon. %0A DigiPharm";
// 
//  new sms
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

// 

// schedule sms 
function scheduled_sms($sms,$phone,$datetime){


   $url = replaceSpaces("https://sms.arkesel.com/sms/api?action=send-sms&api_key=dWd6Vk9xSXNkVUpTUElpR2JweUQ&to=$phone&from=MedRemind&sms=$sms&schedule=$datetime");
 
 
   $ch = curl_init();
 
     curl_setopt($ch, CURLOPT_URL, $url);
 
     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 
     $response = curl_exec($ch);
 
     if ($response === false) {
        
     }
 
     curl_close($ch);
 
     
 }
 
//

 $INSERT = "INSERT INTO reminders values('$reminderID', $prescriptionID, '$date', '$to', '$from', '$user', '$status')";

 if(mysqli_query($connection, $INSERT)){
   new_sms($SMS, $phone);
   scheduled_sms($Ssms,$phone,$converted);

   $inputDateTime = $date.$from;
   $converted = formatDateTime($inputDateTime);
      
    echo json_encode(['ok' => true, 'message' => 'new reminder added']);
 }

 else{
    echo json_encode(['ok' => false, 'message' => 'error adding reminder ']);
 }

 
}

else{
    echo json_encode(['ok' => false, 'message' => 'wrong request method']);
}
?>