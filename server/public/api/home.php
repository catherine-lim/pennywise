<?php

require_once('./functions.php');

set_exception_handler('error_handler');

startup();

set_error_handler('error_handler');

require_once('./db_connection.php');


$query =

    "SELECT goal_details.goal_id, goal_details.goal_name, goal_details.savings_target, goal_details.goal_completion_date, goal_details.current_savings, goal_details.is_completed, transaction_history.transaction_amount 
    FROM goal_details 
    JOIN transaction_history ON goal_details.goal_id = transaction_history.goal_id";

$result = mysqli_query($conn, $query);

if(!mysqli_num_rows($result)) {
    throw new Exception('Invalid ID: '.$id);
}

if(!$result) {
    throw new Exception(mysqli_error($conn));
}

$output = array();

while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};



print(json_encode($output));
