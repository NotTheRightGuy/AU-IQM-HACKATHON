<?php
$servername = "localhost";
$username = "webdev";
$password = "007letmeinnn";
$db = "hackathon";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";
?>