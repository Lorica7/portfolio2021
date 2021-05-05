<?php
	if(isset($_POST['submit'])){
		$msg="Name: ".$_POST['name']."\nEmail: ".$_POST['email']."\nSub: "
            .$_POST['sub']."\nMsg: ".$_POST['msg']."\n";
		mail("lamorted1@gmail.com", $msg);
		header("location:../index.html");
	}
	else{
		header("location:../index.html");
	}
?>