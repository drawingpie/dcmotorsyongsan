

   <!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>메일테스트</title>
<style type="text/css">
body {margin:0;padding:0;text-align:center;color:#333;font-size:12px;line-height:40px;}

</style>
</head>

<body>
<h2>메일이가는지 테스트합니다</h2>
<?php
   $name_01=$_POST['name'];
   $phone_02=$_POST['phone'];
   $email_03=$_POST['email'];
   $title_04=$_POST['title'];
   $subject_05=$_POST['subject'];

   $to='lje2003@naver.com';
   $subject='메일보내기실험중입니다';
   $msg="보낸사람:$name_01\n".
        "연락처:$phone_02\n".
        "이메일:$email_03\n".
        "제목:$title_04\n".
        "내용:$subject_05\n".

   mail($to,$subject,$msg,'보낸사람메일주소:'.$email_03);

   echo '이름:'.$name_01.'<br />';
   echo '이메일:'.$mail_02.'<br />';
   echo '연락처:'.$msg_03.'<br />';
   echo '제목:'.$title_04.'<br />';
   echo '내용:'.$subject_05.'<br />';

   echo '메일이 성공적으로 전송되었습니다<br />';

?>

</body>
</html>
