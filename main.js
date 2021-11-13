const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//check username
username.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkUsername();
});
function checkUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
}

//check Email
email.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkEmail();
});
function checkEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

//check Password
password.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkPassword();
});
function checkPassword() {
  const passValue = password.value.trim();
  if (passValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
}

//check password2
password2.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkPassword2();
});
function checkPassword2() {
  const passValue = password.value.trim();
  const passValue2 = password2.value.trim();
  if (passValue2 === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passValue != passValue2) {
    setErrorFor(password2, "password dose not match");
  } else {
    setSuccessFor(password2);
  }
}

function checkInputs() {
  //get the values from the user
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  const passValue2 = password2.value.trim();
  var test = true;

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    test = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    test = false;
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    test = false;
  } else {
    setSuccessFor(email);
  }

  if (passValue === "") {
    setErrorFor(password, "Password cannot be blank");
    test = false;
  } else {
    setSuccessFor(password);
  }

  if (passValue2 === "") {
    setErrorFor(password2, "Password cannot be blank");
    test = false;
  } else if (passValue != passValue2) {
    setErrorFor(password2, "password dose not match");
    test = false;
  } else {
    setSuccessFor(password2);
  }
  if (test) {
    alert("Welcome in EELU!");
    window.open("https://www.eelu.edu.eg/");
  }
}

function setErrorFor(input, massage) {
  const formControl = input.parentElement; //.from-control
  const small = formControl.querySelector("small");

  //add error massage inside small
  small.innerText = massage;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//email regex
function validateEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
