// Exercise 6
const validate = () => {
    let error = 0;
  // Get the input fields
  const fName = document.getElementById("fName");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fLastName = document.getElementById("fLastN");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorAddress = document.getElementById("errorAddress");
  const errorLastN = document.getElementById("errorLastN");
  const errorPassword = document.getElementById("errorPassword");
  const errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  //NAME VALIDATION
  if (fName.value.trim() == "" || fName.value.length < 3 || typeof fName.value !== "string"
  ) {
    errorName.style.display = "block";
    error++;
  } else {
    errorName.style.display = "none";
  }

  //EMAIL VALIDATION
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (fEmail.value.trim() == "" || !regexMail.test(fEmail.value) || fEmail.value.length < 3) {
	errorEmail.style.display = "block";
    error++;
  } else {
    errorEmail.style.display = "none";
  }

  // ADDRESS VALIDATION

  if(fAddress.value.trim() == "" || fAddress.value.length < 3){

	errorAddress.style.display = "block";
	error++
  }else {
	errorAddress.style.display = "none";
  }

  //LAST NAME VALIDATION

   if (fLastName.value.trim() == "" || fLastName.value.length < 3 || typeof fLastName.value !== "string"
  ) {
    errorLastN.style.display = "block";
    error++;
  } else {
    errorLastN.style.display = "none";
  }

  //PASSWORD VALIDATION

  const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/;

   if (fPassword.value.trim() == "" || fPassword.value.length < 3 || !regexPassword.test(fPassword.value)
  ) {
    errorPassword.style.display = "block";
    error++;
  } else {
    errorPassword.style.display = "none";
  }

  //PHONE VALIDATION

const phoneToNumber = parseInt(fPhone.value);  
   if (fPhone.value.trim() == "" || fPhone.value.length != 9 || typeof phoneToNumber !== "number"
  ) {
    errorPhone.style.display = "block";
    error++;
  } else {
    errorPhone.style.display = "none";
  }

  
  return error === 0;


};


const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = validate();
  if(isValid){
	form.submit();
  }
});
