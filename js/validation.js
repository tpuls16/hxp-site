const form = document.getElementById("signup-form");

function showError(input, message) {
    const errorSpan = input.parentElement.querySelector(".field-error");
    input.classList.add("input-error");
    errorSpan.textContent = message;
}

function clearError(input) {
    const errorSpan = input.parentElement.querySelector(".field-error");
    input.classList.remove("input-error");
    errorSpan.textContent = ""
}

function validateFullName(input) {
    const value = input.value.trim();
    const nameParts = value.split(/\s+/);
    const allPartsLongEnough = nameParts.every((part) => part.length >= 2);


    if (value.length === 0) {
        showError(input, "Builder name is required")
        return false;
    }

    if (nameParts.length < 2) {
        showError(input, "Please enter first and last name");
        return false;
    }

    if (!allPartsLongEnough) {
        showError(input, "Please enter your full first and last name");
        return false;
      }

    clearError(input);
    return true;
}

function validateEmail(input) {
    const value = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
        showError(input, "Email is required")
        return false;
    }

    if (!emailPattern.test(value)) {
        showError(input, "Please enter a valid email address");
        return false;
    }

    clearError(input);
    return true;
}

function validatePhone(input) {
    const value = input.value.trim();
    const phonePattern = /^\d{10}$/;

    if (value.length === 0) {
        showError(input, "Phone number is required");
        return false;
    }

    if (!phonePattern.test(value)) {
        showError(input, "Please enter a 10 digit phone number");
        return false;
    }

    clearError(input);
    return true;
}

function validateEmergencyName(input) {
    const value = input.value.trim();
    const nameParts = value.split(/\s+/);
    const allPartsLongEnough = nameParts.every((part) => part.length >= 2);


    if (value.length === 0) {
        showError(input, "Emergency contact name is required")
        return false;
    }

    if (nameParts.length < 2) {
        showError(input, "Please enter first and last name for emergency contact");
        return false;
    }

    if (!allPartsLongEnough) {
        showError(input, "Please enter your full first and last name");
        return false;
      }

    clearError(input);
    return true;
}

function validateEmergencyPhone(input) {
    const value = input.value.trim();
    const phonePattern = /^\d{10}$/;

    if (value.length === 0) {
        showError(input, "Emergency contact phone number is required")
        return false;
    }

    if (!phonePattern.test(value)) {
        showError(input, "Please enter a 10 digit phone number");
        return false;
    }

    clearError(input);
    return true;
}

function validateWhy(input) {
    const value = input.value.trim();

    if (value.length === 0) {
        showError(input, "Please tell us why you want to build with us.")
        return false;
    }

    if (value.length < 30) {
        showError(input, "Please provide at least a few sentences of why you want to build with us.")
        return false;
    }

    clearError(input);
    return true;
}

function validateForm() {
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const emergencyName = document.getElementById("emergency-contact-name");
    const emergencyPhone = document.getElementById("emergency-contact-phone");
    const why = document.getElementById("why");

    const results = [
        validateFullName(fullName),
        validateEmail(email),
        validatePhone(phone),
        validateEmergencyName(emergencyName),
        validateEmergencyPhone(emergencyPhone),
        validateWhy(why)
    ]

    return results.every((pass) => pass === true);
}

document.getElementById("full-name").addEventListener("blur", function () {
    validateFullName(document.getElementById("full-name"));
  });
  
  document.getElementById("email").addEventListener("blur", function () {
    validateEmail(document.getElementById("email"));
  });
  
  document.getElementById("phone").addEventListener("blur", function () {
    validatePhone(document.getElementById("phone"));
  });
  
  document.getElementById("emergency-contact-name").addEventListener("blur", function () {
    validateEmergencyName(document.getElementById("emergency-contact-name"));
  });
  
  document.getElementById("emergency-contact-phone").addEventListener("blur", function () {
    validateEmergencyPhone(document.getElementById("emergency-contact-phone"));
  });
  
  document.getElementById("why").addEventListener("blur", function () {
    validateWhy(document.getElementById("why"));
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
  // Phase 6: submit.js will send data here
    console.log("Form is valid — ready to submit!");
  }
});