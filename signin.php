<?php
  if (isset($_COOKIE["id"])){
    echo 'succ';
    return;
  }
  $dbhost = 'localhost:3306';  
  $dbuser = 'root';      
  $dbpass = 's951g015F';
  $conn = mysql_connect($dbhost, $dbuser, $dbpass);
  mysql_select_db("wcsc",$conn);
  
  $id=$_POST["id"];
  $pwd=$_POST["pwd"];

  
  if (mysql_num_rows(mysql_query("SELECT * FROM auth where id='".$id."' and password='".$pwd."';", $conn)) > 0){
    setcookie("id", $id);
    echo 'succ';
  }else{
    echo 'fail';
  }
  mysql_close($conn);
?>