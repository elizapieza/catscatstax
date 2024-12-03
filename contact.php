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
    <header>    <!-- Nav bar & Header EVERYPAGE-->
    <nav class= "navbar">
        <ul>
            <li><a href="home.html"> Home</a></li>
            <li><a href="about.html"> About Us</a></li>
            <li><a href="cats.html"> Cats in the Office</a></li>
            <li><a href="contact.php"> Contact Us</a></li>
            <li><a href="services.html"> Services</a></li>
            <li><a href="updates.html"> Important Tax Updates</a></li>
        </ul>
    </nav>

    <div class="header">
        <h1>Cats Cats Tax</h1>
        <h2>Relax with some cats while I handle your taxes</h2>
    </div>
    </header>

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

<footer>
    <footer class = "footer">
    <p> © 2024 Cats Cats Tax || Website created by: <a href="https://www.linkedin.com/in/mariah-cox-2110351b0/">Mariah Elizabeth</a> </p>
    <p><a href="home.html">Home</a> | <a href="mailto: pageantgurlmariah@gmail.com?subject=Tax%Service%2024">Contact</a> | </p>
</footer>