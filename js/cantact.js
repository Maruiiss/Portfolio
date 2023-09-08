document.addEventListener("DOMContentLoaded", function () {
    const confirmationMessages = [
        "Bedankt voor uw bericht. We nemen binnenkort contact met u op!",
        "Uw bericht is ontvangen. We zullen spoedig antwoorden.",
        "Dank u! Uw bericht is succesvol verzonden."
    ];

    const contactForm = document.querySelector(".contact-form");
    const confirmationMessage = document.createElement("div");
    confirmationMessage.classList.add("confirmation-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(emailValue)) {
            alert("Voer alstublieft een geldig e-mailadres in.");
            return;
        }

        let randomIndex;
      
        while (true) {
            randomIndex = Math.floor(Math.random() * confirmationMessages.length);
            if (randomIndex !== undefined) break;
        }

   
        for (const message of confirmationMessages) {
            if (confirmationMessages.indexOf(message) === randomIndex) {
                confirmationMessage.innerHTML = `<p>${message}</p>`;
                break;
            }
        }

      
        if (confirmationMessage.innerHTML === "") {
            confirmationMessage.innerHTML = "<p>Bedankt voor uw bericht.</p>";
        }

        contactForm.appendChild(confirmationMessage);
        contactForm.reset();
    });
});
