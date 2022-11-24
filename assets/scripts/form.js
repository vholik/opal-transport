const form = document.querySelector("#contact-form");
const fullNameInput = document.querySelector("#fullName-input");
const companyInput = document.querySelector("#company-input");
const phoneInput = document.querySelector("#phone-input");
const messageInput = document.querySelector("#message-input");
const button = document.querySelector("#form-btn");

function checkHandler() {
  if (!phoneInput.value) {
    throw new Error("Numer telefonu jest obowiązkowy");
  }
  if (phoneInput.value < 9) {
    throw new Error("Wpisz poprawny numer telefonu");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = fullNameInput.value || "Nie podano nazwisko";
  company = companyInput.value || "Nie podano nazwy firmy";
  phone = phoneInput.value;
  message = messageInput.value || "Nie podano wiadomości";

  try {
    checkHandler();
    button.disabled = true;
    fetch(
      `https://opal-form-api.herokuapp.com/message?message=${message}&company=${company}&phone=${phone}&fullName=${fullName}`
    )
      .then(() => {
        location.href = "thanks.html";
      })
      .catch((err) => {
        location.href = "404.html";
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
});
