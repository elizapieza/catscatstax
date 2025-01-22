<?php
include 'contacts/dbh.inc.php';
?>
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF_8">
    <title>Cats Cats Tax| Contact Us</title>
    <link rel = "stylesheet" href = "style.css">
    <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Dots:wght@400..700&display=swap" rel="stylesheet">

</head>

<body>

    <!-- SET UP PHP-->
     <main class = "form">
    <p> Fill out a form and we will reach out at our earliest convience!</p>
    <form action= "contacts/formhandler.inc.php" method="post" autocomplete="on">
        <label for="name">Name:</label>
        <input type=" text" id="name" name="name"> <required> <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"> <required> <br><br>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"> <required> <br><br>
        <label for="reason">Brief Reason of Contact</label>
        <input type="text" id="reason" name="reason"> <required> <br><br>
        <input type="submit" value="Submit">
    </form>

</main>

</body>

</html>

<script src="headerFooter.js"></script>
