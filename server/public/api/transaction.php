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
$transaction_amount= $obj['amount_changed'];

$query =
"INSERT INTO `transaction_history`(`goal_id`, `transaction_date`, `transaction_amount`)
VALUES ({$goal_id}, \"{$transaction_date}\", {$transaction_amount})";


$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception(mysqli_error($conn));
}

$transaction = [
  'transaction_date' => $transaction_date,
  'transaction_amount' => $transaction_amount,
];

print(json_encode($transaction));

?>
