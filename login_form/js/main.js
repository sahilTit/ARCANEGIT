const form = document.querySelector("form");
const phoneEle = document.querySelector("#phone");

const errName = document.querySelector("#err-name");
const errEmail = document.querySelector("#err-email");
const errPhone = document.querySelector("#err-phone");
const errPassword1 = document.querySelector("#err-password1");
const errPassword2 = document.querySelector("#err-password2");

function validatePassword(password) {
  var res = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  return res.test(password);
}

function validateForm(values) {
  console.log(values.name);
  const errors = {};

  if (values.name === "") {
    errors.name = "Please enter your name";
  } else if (values.name.length < 3) {
    errors.name = "Name must be more that 3 characters";
  }

  if (values.phone === "") {
    errors.phone = "Please enter your phone";
  }

  if (values.email === "") {
    errors.email = "Please enter your email";
  }

  if (values.password1 === "") {
    errors.password1 = "Please enter your secure password";
  } else if (!validatePassword(values.password1)) {
    errors.password1 =
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  }

  if (values.password2 === "") {
    errors.password2 = "Please enter your secure password";
  } else if (!validatePassword(values.password2)) {
    errors.password2 =
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  } else if (values.password1 !== values.password2) {
    errors.password2 = "Password not match";
  }

  return errors;
}

phoneEle.addEventListener("input", function (e) {
  console.log(e.target.value);
  const value = e.target.value;
  const valueNumber = Number(value);

  if (isNaN(valueNumber)) {
    e.target.value = "";
  }

  if (value.length > 10) {
    e.target.value = value.slice(0, 10);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);

  console.log(formDataObj);

  const errors = validateForm(formDataObj);

  if (errors.name) {
    errName.textContent = errors.name;
  } else {
    errName.textContent = "";
  }

  if (errors.email) {
    errEmail.textContent = errors.email;
  } else {
    errName.textContent = "";
  }

  if (errors.password1) {
    errPassword1.textContent = errors.password1;
  } else {
    errPassword1.textContent = "";
  }

  if (errors.password2) {
    errPassword2.textContent = errors.password2;
  } else {
    errPassword2.textContent = "";
  }

  //   for(let [key, value] of formData.entries()){
  //     console.log(key)
  //   }

  //   loop
  //  fromEntries()
});
