<?php

$name = $_POST['name'];
$email = $_POST['email'];
$project = $_POST['project'];
$message = $_POST['message'];


$to = 'olya.gurbo@gmail.com';
$subject = 'Contact Form Submission';
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Project: $project\n";
$emailBody .= "Message:\n$message";


$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
if (mail($to, $subject, $emailBody, $headers)) {

  $response = array('success' => true);
} else {

  $response = array('success' => false, 'message' => 'Failed to send email.');
}


header('Content-Type: application/json');
echo json_encode($response);
?>