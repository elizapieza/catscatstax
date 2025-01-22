<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit();
}

require_once 'dbh.inc.php';

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$reason = $_POST["reason"];

try {
    $query = "INSERT INTO contacts (name, email, phone, reason) VALUES (:name, :email, :phone, :reason)";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":name", $name, PDO::PARAM_STR);
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);
    $stmt->bindParam(":phone", $phone, PDO::PARAM_STR);
    $stmt->bindParam(":reason", $reason, PDO::PARAM_STR);

    $stmt->execute();
    echo "Form submitted successfully!";
    header("Location: ../index.html");
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}