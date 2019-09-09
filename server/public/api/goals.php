<?php

require_once('./functions.php');

set_exception_handler('error_handler');
  
$output = file_get_contents('./dummy-homepage-goal-list.json');

print($output);

?>