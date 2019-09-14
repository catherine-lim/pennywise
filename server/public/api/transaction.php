<?php
require_once('./functions.php');
require_once('./db_connection.php');

set_exception_handler('error_handler');

// $goal_id = json_decode($_POST["goal_id"]);
// $transaction_date = json_decode(date("Y-m-d"));
// $amount_changed = json_decode($_POST["amount_changed"]);

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$goal_id = $obj['goal_id'];
$transaction_date = date("Y-m-d");
$amount_changed= $obj['amount_changed'];

$query =
"INSERT INTO `transaction_history`(`goal_id`, `transaction_date`, `transaction_amount`)
VALUES ({$goal_id}, \"{$transaction_date}\", {$amount_changed})";



$result = mysqli_query($conn, $query);
// $output = [];

// var_dump($result);

// if(mysqli_affected_rows($conn)< 0){
//   throw new Exception('could not update database');
// }

// while ($row = mysqli_fetch_assoc($result)) {
//   $output[] = [
//     'goal_id' => $row['goal_id']
//   ];
// }
// $output = [
//   'success'=>true,
//   'insertedID'=>mysqli_insert_id($conn)
// ];
// print(json_encode($output));


// if ($result) {
//   print(mysql_result($result));

//   // (['message' => "New record created successfully"]));
// // } else if ($result2) {
// //   print(json_encode(['message' => "New record created successfully"]));
//   } else {
//   http_response_code(500);
//   print(json_encode(['error' => mysqli_error($conn)]));
// }
?>
