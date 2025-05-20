<?php

require_once "Mail.php"; // PEAR Mail package
require_once ('Mail/mime.php'); // PEAR Mail_Mime packge

$email = $_POST['email']; // form field
$date = date("Y-m-d h:i:sa");
$errors = array(); # To store errors
$form_data = array(); # Pass back the response to the form
 
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
  $servername = "localhost";
  $username = "swingscr_samuel";
  $password = "Swingscr123?";
  $dbname = "swingscr_subscribers";


  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
  }

  $sql1 = "SELECT * FROM subscribers WHERE email='$email'";
  $res = $conn->query($sql1);

  if ($res->num_rows > 0) {
    echo "<p> Email already exists in our database </p>";
  } else {
    $sql = "INSERT INTO subscribers (email, date) VALUES ('$email', '$date')";
  
    if ($conn->query($sql) === TRUE){
      echo "<p> New record created successfully </p>";
    } else {
      echo " <p> Error: " .$sql. "<br>" .$conn->error. "</p>";
    }
    
    $from = "subscribe@swingscrm.com"; //enter your email address
    $to = $email; //enter the email address of the contact your sending to
    $subject = "Contact Form"; // subject of your email
  
    $headers = array ('From' => $from,'To' => $to, 'Subject' => $subject);
  
    $text = 'Thanks for subscribing with SWINGS crm'; // text versions of email.
  
    $crlf = "\n";
  
    $mime = new Mail_mime($crlf);
    $mime->setTXTBody($text);
    $mime->setHTMLBody($text);
  
  //do not ever try to call these lines in reverse order
    $body = $mime->get();
    $headers = $mime->headers($headers);
  
    $host = "localhost"; // all scripts must use localhost
    $username = "subscribe@swingscrm.com"; //  your email address (same as webmail username)
    $password = "Swingscr123?"; // your password (same as webmail password)
  
    $smtp = Mail::factory('smtp', array ('host' => $host, 'auth' => true, 'username' => $username,'password' => $password));
  
    $mail = $smtp->send($to, $headers, $body);
    
    if ($mail) {
      // $form_data['success'] = true;
      // $form_data['posted'] = 'Message successfully sent';
      echo("<p> Message successfully sent! </p>");
      // header("Location: https://www.swingscrm.com/");
      // echo json_encode(['msg' => 'Message successfully sent']);
    }
    else {
      // $form_data['success'] = false;
      // $form_data['errors'] = $mail->getMessage();
      echo("<p>" .$mail->getMessage(). "</p>");
      // echo json_encode(['msg' => $mail->getMessage()]);
    }
  }

  $conn->close();
  // echo json_encode($form_data);

}
