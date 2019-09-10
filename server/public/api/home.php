<?php

require_once('./functions.php');

set_exception_handler('error_handler');
startup();
set_error_handler('error_handler');

require_once('./db_connection.php');

if(empty($_GET['goal_id'])) {
    $whereClause = '';
} 
else if (!is_numeric($_GET['goal_id'])) {
    throw new Exception("id needs to be a number");
} 
else {
    $whereClause = "WHERE goal_details.goal_id = {$_GET['goal_id']}";
}
  