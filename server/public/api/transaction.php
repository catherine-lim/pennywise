<?php
require_once('./functions.php');
require_once('./db_connection.php');

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$goal_id = $obj['goal_id'];
$transaction_date = date("Y-m-d");
$amount_changed = $obj['amount_changed'];
// $type = $obj['name'];

// if($type === 'subtract') {
//   $amount_changed = ($amount_changed * (-1));
// }




$query =
"INSERT INTO `transaction_history`(`goal_id`, `transaction_date`, `transaction_amount`)
VALUES ({$goal_id}, \"{$transaction_date}\", {$amount_changed})";

$result = mysqli_query($conn, $query);

if ($result) {
  print(json_encode(['message' => "New record created successfully"]));
} else {
  http_response_code(500);
  print(json_encode(['error' => mysqli_error($conn)]));
}

$transaction = [
  'transaction_date' => $transaction_date,
  'transaction_amount' => $amount_changed
];

print(json_encode($transaction));

?>
