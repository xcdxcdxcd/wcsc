<?php
  if (isset($_COOKIE["id"])){
    echo 'succ';
    return;
  }
  $dbhost = 'localhost:3306';  
  $dbuser = 'user';      
  $dbpass = 's951g015F';
  $conn = mysql_connect($dbhost, $dbuser, $dbpass);
  $id=$_GET["id"];
  $pwd=$_GET["pwd"];
  if (mysql_num_rows(mysql_query("SELECT * FROM auth where id='".$id." and password=".$pwd.";")) > 0){
    setcookie("id", $id);
    echo 'succ';
  }else{
    echo 'fail';
  }
  mysql_close($conn);
?>