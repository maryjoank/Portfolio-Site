document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById("countdown");
    let okButton = document.getElementById("okButton");
    let countdown = 5;  // Start countdown from 5 seconds
    let redirectUrl = "index.html";  // The main page URL

    // Function to update the countdown and redirect
    function startCountdown() {
        let countdownInterval = setInterval(function() {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                window.location.href = redirectUrl;
            }
        }, 1000);
    }

    // Start countdown on page load
    startCountdown();

    // Redirect when the user clicks OK
    okButton.addEventListener("click", function() {
        window.location.href = redirectUrl;
    });
});
