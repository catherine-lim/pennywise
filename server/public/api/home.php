<?php

require_once('./functions.php');

set_exception_handler('error_handler');
startup();
set_error_handler('error_handler');

require_once('./db_connection.php');