// form validation


document.getElementById("form").addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); // prevent form submission
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // validate name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.style.borderColor = "red";
  } else {
    nameError.textContent = "";
    name.style.borderColor = "";
  }

  // validate phone
  if (phone.value.trim() === "") {
    phoneError.textContent = "Last name is required";
    phone.style.borderColor = "red";
  } else {
    phoneError.textContent = "";
    phone.style.borderColor = "";
  }

  // validate email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.style.borderColor = "red";
  } else {
    emailError.textContent = "";
    email.style.borderColor = " r";
  }

  // validate message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required";
    message.style.borderColor = "red";
  } else {
    messageError.textContent = "";
    message.style.borderColor = "";
  }
}

