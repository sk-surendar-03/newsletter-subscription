document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const successOverlay = document.getElementById("successOverlay");
  const userEmailSpan = document.getElementById("userEmail");
  const dismissBtn = document.getElementById("dismissBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    errorMessage.textContent = "";

    if (emailValue === "") {
      errorMessage.textContent = "Email field cannot be empty";
      emailInput.classList.add("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "Please enter a valid email address";
      emailInput.classList.add("error");
      return;
    }

    // Show success overlay
    userEmailSpan.textContent = emailValue;
    successOverlay.style.display = "flex";
  });

  dismissBtn.addEventListener("click", () => {
    successOverlay.style.display = "none";
    form.reset();
    emailInput.classList.remove("error");
  });

  emailInput.addEventListener("input", () => {
    errorMessage.textContent = "";
    emailInput.classList.remove("error");
  });
});
