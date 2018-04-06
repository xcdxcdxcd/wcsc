<?php
  $dbhost = 'localhost:3306';  
  $dbuser = 'user';      
  $dbpass = 's951g015F';
  $conn = mysql_connect($dbhost, $dbuser, $dbpass);
  $id=$_GET["id"];
  $nm=$_GET["nm"];
  $pwd=$_GET["pwd"];
  $it=$_GET["it"];
  $ot=$_GET["ot"];
  $em=$_GET["em"];
  $dp=$_GET["dp"];
  if (mysql_num_rows(mysql_query("SELECT * FROM auth where id='".$id.";")) < 1){
    mysql_query("SELECT * FROM auth where id='".$id.";")
    mysql_query("INSERT INTO auth (id, name, password, intime,outtime,email,dept) VALUES ('".$id."','".$nm."','".$pwd."','".$it."','".$ot."','".$em."','".$dp."')");
    setcookie("id", $id);
    echo 'succ';
  }else{
    echo 'fail';
  }
  mysql_close($conn);
?>