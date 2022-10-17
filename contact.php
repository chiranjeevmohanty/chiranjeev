<?php

	if(isset($_POST['submit'])){
	$fullName = $_POST['fullName'];
	$phoneNumber = $_POST['phoneNumber'];
	$emailId = $_POST['emailId'];
	$message = $_POST['message']; 

	$formcontent="From: \n  Name: $fullName \n  Phone: $phoneNumber \n Email : $emailId \n Message : $message \n" ;
	$recipient = "chiranjeevmohanty6969@gmail.com";
	$subject = "portfolio form - Contact Form";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo '<script language="javascript">alert("Thank you for Contact us. We will get back to you shortly ")</script>';
	echo '<script language="javascript">window.location.href="contact.html"</script>';
	}
	else{
	echo 'Sorry';
	}
?>