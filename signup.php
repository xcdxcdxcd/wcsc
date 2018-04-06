<?php
  $dbhost = 'localhost:3306';  
  $dbuser = 'root';      
  $dbpass = 's951g015F';
  $conn = mysql_connect($dbhost, $dbuser, $dbpass);
  mysql_select_db("wcsc",$conn);
  $id=$_POST["id"];
  $nm=$_POST["nm"];
  $pwd=$_POST["pwd"];
  $it=$_POST["it"];
  $ot=$_POST["ot"];
  $em=$_POST["em"];
  $dp=$_POST["dp"];
  echo "SELECT * FROM auth where id='".$id."';", $conn);
  return;
  if (mysql_num_rows(mysql_query("SELECT * FROM auth where id='".$id."';", $conn)) < 1){
    mysql_query("SELECT * FROM auth where id='".$id."';", $conn)
    mysql_query("INSERT INTO auth (id, name, password, intime,outtime,email,dept) VALUES ('".$id."','".$nm."','".$pwd."','".$it."','".$ot."','".$em."','".$dp."')", $conn);
    setcookie("id", $id);
    echo 'succ';
  }else{
    echo 'fail';
  }
  mysql_close($conn);
?>