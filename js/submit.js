const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpZVLpYhwAFV3rJNlQsyNyRqZPGQ7T8oVaiVh11bCXpLh4CNqQ_DPgrCTJZ1mFe6FW8A/exec";

function getDietarySelections() {
    const checked = document.querySelectorAll('input[name="dietary"]:checked');
    const values = Array.from(checked).map((box) => box.value);

    if (values.length === 0) {
        return "None selected"
    }

    return values.join(", ");
}

function getFormData() {
    return {
        fullName: document.getElementById("full-name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        emergencyContactName: document.getElementById("emergency-contact-name").value.trim(),
        emergencyContactPhone: document.getElementById("emergency-contact-phone").value.trim(),
        dietary: getDietarySelections(),
        why: document.getElementById("why").value.trim(),
    };
}


async function submitSignup() {
    const submitButton = document.querySelector(".submit-info-button");
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const payload = getFormData();

    try {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
      // Apps Script may return odd CORS responses — if fetch completes, assume success
        window.location.href = "success.html";
    } catch (error) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Builder Sign-Up";
        alert("Something went wrong. Please try again.")
    } 
}