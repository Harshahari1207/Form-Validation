const form = document.querySelector("form");



const name = document.getElementById("uName");
const email = document.getElementById("uEmail");
const zipcode = document.getElementById("uZipcode");
const password = document.getElementById("uPassword");
const confirmPassword = document.getElementById("uCfPassword");

const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const zipcodeError = document.querySelector('.zipcodeError');
const passwordError = document.querySelector('.passwordError');
const confirmPasswordError = document.querySelector('.cnfPssError');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

window.addEventListener('load', ()=>{
    const isValidName = name.value.length === 0;
    name.className = isValidName ? "" : "invalid";

    const isValidEmail = email.value.length === 0 || emailRegExp.test(email.value);
    console.log(isValidEmail);
    email.className = isValidEmail ? "" : "invalid";

    const isValidZipcode = zipcode.value.length === 0 || zipcode.value.length === 6;
    zipcode.className = isValidZipcode ? "" : "invalid";

    const isValidPassword = password.value.length === 0 || (password.value.length > 6 && password.value.length < 16);
    password.className = isValidPassword ? "" : "invalid";
});

name.addEventListener("input", ()=>{
    const isValidName = name.value.length >= 3;
    if(isValidName){
        name.className = "valid";
        nameError.textContent = "";
        nameError.classList.remove("error");
    }else{
        name.className = "invalid";
        nameError.textContent = "Name Should be greater than 3 letters"
        nameError.className = "error";
    }
});

email.addEventListener("input", () =>{
    const isValidEmail = email.value.length === 0 || emailRegExp.test(email.value);
    console.log(emailRegExp.test(email.value))
    if (isValidEmail) {
        email.className = "valid";
        emailError.textContent = "";
        emailError.classList.remove('error');
    } else {
        console.log("hello")
        email.className = "invalid";
        emailError.textContent = "Enter same as placeholder i.e abc@gmail.com";
        emailError.className = "error";
    }
});

zipcode.addEventListener("input", () =>{
    const isValidZipcode = zipcode.value.length === 6;
    if(isValidZipcode){
        zipcode.className = "valid";
        zipcodeError.textContent = "";
        zipcodeError.classList.remove('error');
    }else{
        zipcode.className = "invalid";
        zipcodeError.textContent = "Zip code must be 6 digits";
        zipcodeError.className = "error";
    }
})

password.addEventListener("input", () =>{
    const isValidPassword = password.value.length > 6 && password.value.length < 16;
    console.log(isValidPassword)
    if(isValidPassword){
        
        password.className = "valid";
        passwordError.textContent = "";
        passwordError.classList.remove("error");
    }else{
        password.className = "invalid";
        passwordError.textContent = "Must be one letter and one number and min 8 digits";
        passwordError.className = "error";
    }
})

confirmPassword.addEventListener("input", ()=>{
    const isValidCnfPassword = password.value === confirmPassword.value;
    if(isValidCnfPassword){
        confirmPassword.className = "valid";
        confirmPasswordError.textContent = "";
        confirmPasswordError.classList.remove("error");
    } else{
        confirmPassword.className = "invalid";
        confirmPasswordError.textContent = "It should match the prev entered password";
        confirmPasswordError.className = "error";
    }
})

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const isValidName = name.value.length >= 3;
    if(isValidName){
        name.className = "valid";
        nameError.textContent = "";
        nameError.classList.remove("error");
    }else{
        name.className = "invalid";
        nameError.textContent = "Name Should be greater than 3 letters"
        nameError.className = "error";
    }

    const isValidEmail = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValidEmail) {
        email.className = "invalid";
        emailError.textContent = "I expect an email, darling!";
        emailError.className = "error";
    } else {
        console.log("done");
        email.className = "valid";
        emailError.textContent = "";
        emailError.className = "error";
    }

    const isValidZipcode = zipcode.value.length === 6;
    if(isValidZipcode){
        console.log("zipcode");
        zipcode.className = "valid";
        zipcodeError.textContent = "";
        zipcodeError.classList.remove('error');
    }else{
        zipcode.className = "invalid";
        zipcodeError.textContent = "Zipcode must six numerical values";
        zipcodeError.className = "error";
    }

    const isValidPassword = (password.value.length > 6 && password.value.length < 16) || passRegExp.test(password.value);
    if(isValidPassword){
        password.className = "valid";
        passwordError.textContent = "";
        passwordError.classList.remove("error");
    }else{
        password.className = "invalid";
        passwordError.textContent = "Must be one letter and one number and min 6 digits";
        passwordError.className = "error";
    }

    const isValidCnfPassword = password.value === confirmPassword.value;
    if(isValidCnfPassword){
        confirmPassword.className = "valid";
        confirmPasswordError.textContent = "";
        confirmPasswordError.classList.remove("error");
    } else{
        confirmPassword.className = "invalid";
        confirmPasswordError.textContent = "It should match the prev entered password";
        confirmPasswordError.className = "error";
    }

    if(isValidName && isValidEmail && isValidZipcode && isValidPassword && isValidCnfPassword){
        
        window.location.reload();
        alert("Form Submitted successfully");
    }
});