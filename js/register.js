const form = document.getElementById("form");
const fname = document.getElementById("fname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let result = true;

  if (fnameValue === "") {
    setError(fname, "Name is required");
    result = false;
  } else if (fnameValue.match(/[0-9]/)) {
    setError(fname, "Name cannot contain numbers");
    result = false;
  } else {
    setSuccess(fname);
  }

  if (usernameValue === "") {
    setError(username, "Username is required");
    result = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    result = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    result = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    result = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
    result = false;
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Password is required");
  } else if (passwordValue != password2Value) {
    setError(password2, "Passwords do not match");
    result = false;
  } else {
    setSuccess(password2);
  }

  if (result) {
    alert("Form Submitted Successfully.");
  }
};
