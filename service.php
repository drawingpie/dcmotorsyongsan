<?php

   $to = "lje2003@naver.com";
   $name = "name";
   $phone = "phone";
   $email = "email";
   $title = "title\r\n";
   $subject .= "subject\r\n";

   mail($to, $name, $phone, $email, $title, $subject); 

   ?>
