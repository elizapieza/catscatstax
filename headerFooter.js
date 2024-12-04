// Insert the header
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header>
        <nav class="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="cats.html">Cats in the Office</a></li>
                <li><a href="contact.php">Contact Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="updates.html">Important Tax Updates</a></li>
            </ul>
        </nav>
        <div class="header">
            <h1>Cats Cats Tax</h1>
            <h2>Relax with some cats while I handle your taxes</h2>
        </div>
    </header>`;
    
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // insert scroll to top button
    const scrollButtonHTML = `
    <button id="scroll" onclick="scrollToTop()">⬆️</button>`;
const scrollButton = document.createElement("scroll");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behaviour: 'smooth' });
}

    // Insert the footer
    const footerHTML = `
    <footer class="footer">
        <p>© 2024 Cats Cats Tax || Website created by: 
            <a href="https://www.linkedin.com/in/mariah-cox-2110351b0/">Mariah Elizabeth</a>
        </p>
        <p>
            <a href="index.html">Home</a> | 
            <a href="mailto:pageantgurlmariah@gmail.com?subject=Tax%Service%2024">Contact</a>
        </p>
    </footer>`;
    
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
