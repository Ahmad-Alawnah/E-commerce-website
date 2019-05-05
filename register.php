<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$pass = $_POST['password'];
	$country = $_POST['country'];
	$city = $_POST['city'];
	$street = $_POST['street'];
	$age = $_POST['age'];
	
	$connection = mysqli_connect("localhost","Ahmad","Ahmad","test2");
	
	
	$SQL = "INSERT INTO USERS(USER_NAME,USER_EMAIL,USER_PASSWORD,USER_COUNTRY,USER_CITY,USER_STREET,USER_AGE) VALUES($name,$email,$pass,$country,$city,$street,$age)";
	
	$connection->query($SQL);
	
?>

