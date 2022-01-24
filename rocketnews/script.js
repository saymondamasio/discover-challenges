const emailInput = document.getElementById("email");

function saveEmail() {
  const email = emailInput.value;
  if (email.length > 0) {
    const emails = JSON.parse(localStorage.getItem("emails"));

    console.log("Salvando email: " + email);
    console.log("Email salvos: " + emails);
    if (emails === null) {
      localStorage.setItem("emails", JSON.stringify([email]));
    } else {
      localStorage.setItem("emails", JSON.stringify([...emails, email]));
    }
  }
}
