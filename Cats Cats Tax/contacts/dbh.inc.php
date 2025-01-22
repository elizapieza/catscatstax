<?php
$dbUsername ='root';
$dbPassword ='';

try {
    $pdo = new PDO('mysql:host=localhost;dbname=contacts', $dbUsername, $dbPassword);

    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
Catch (PDOException $e) {
    echo ('Could not connect to the database ' . $e);
}