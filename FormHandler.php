<?php
    function IsInjected($str) {
        $injections = array('(\n+)',
               '(\r+)',
               '(\t+)',
               '(%0A+)',
               '(%0D+)',
               '(%08+)',
               '(%09+)'
               );
                   
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str)) {
          return true;
        }
        else {
          return false;
        }
    }

    $why = $_POST["why"];
    $name = $_POST["name"];
    $email = $_POST["email"]
    $detail = $_POST["detail"];

    if(IsInjected($email)) {
        echo "Bad email value!";
        exit;
    }

    $email_from = "bogard.jeremiah@gmail.com";
    $email_subject = "New Form Submission";
    $email_body = "A form submission was completed by $name, on your portfolio website in order to $why you.\n$detail";

    $to = "bogard.jeremiah@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
?>