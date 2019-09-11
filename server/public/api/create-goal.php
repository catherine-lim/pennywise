<?php

require_once('./functions.php');

set_exception_handler('error_handler');

startup();

set_error_handler('error_handler');

require_once('./db_connection.php');

$json_input = file_get_contents('php://input');

$obj = json_decode($json_input, true);

$goal_name = $obj['goal_name'];
$savings_target = $obj['savings_target'];
$current_saving = $obj['current_saving'];
$goal_completion_date = $obj['goal_completion_date'];

$query = "INSERT INTO goal_details (goal_name, savings_target, goal_start_date, goal_completion_date, current_saving, is_completed)
VALUES('$goal_name', '$savings_target', now(), '$goal_completion_date', '$current_saving', 0)";

$result = mysqli_query($conn, $query);


if ($result) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
}

?>