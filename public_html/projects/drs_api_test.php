<?php
  $data = file_get_contents("php://input");
  $to = "rasmus@cederdorff.com, as@cphcloud.com";
  $subject = "DRS API TEST";

  $message = $data;

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: Cederdorff <mail@cederdorff.com>' . "\r\n";

  mail($to,$subject,$message,$headers);
