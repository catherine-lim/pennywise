<?php
require_once('./functions.php');
require_once('./db_connection.php');
// set_exception_handler('error_handler');
// startup();
// set_error_handler('error_handler');
// $json_input = file_get_contents('php://input');
// $obj = json_decode($json_input, true);

$goal_id = $_POST["goal_id"];
$transaction_date = date("Y-m-d");
$amount_changed = $_POST["amount_changed"];

$query =
"INSERT INTO `transaction_history`(`goal_id`, `transaction_date`, `transaction_amount`)
VALUES ({$goal_id}, \"{$transaction_date}\", {$amount_changed})";

$result = mysqli_query($conn, $query);


// if ($result) {
//     echo "transaction added successfully";
// } else {
//     echo "Error: " . $query . "<br>" . mysqli_error($conn);
// }
