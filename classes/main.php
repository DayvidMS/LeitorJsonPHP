<?php
ini_set('error_reporting', E_ALL);
require __DIR__.'/RouterController.php';
$json = file_get_contents('php://input');
new RouterController($_REQUEST, $json);