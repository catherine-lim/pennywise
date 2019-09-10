<?php

require_once('./functions.php');

set_exception_handler('error_handler');
startup();
set_error_handler('error_handler');

require_once('./db_connection.php');

$query = 

    "SELECT `goal_id`, `goal_name`, `savings_target`, `goal_completion_date`, `current_saving`, `is_completed` 
    FROM goal_details ORDER BY `is_completed`" ;


  