const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});

function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["password"].value;
  if (x == "" || y=="") {
    //alert("Name must be filled out");
    return false;
  }
  else{
    return true;
  }
}
function validateForm_1(){
  let a = document.forms["myForm_1"]["email_1"].value;
  let b = document.forms["myForm_1"]["password_1"].value;
  let c = document.forms["myForm_1"]["name_1"].value;
  let d = document.forms["myForm_1"]["confirm"].value;
  if((a==""||b==""||c==""||d=="") || (b!=d)){
    return false;
  }
  else{
    return true;
  }
}
function Button1(){
  if(validateForm()){
    alert("You have been signed in successfully!");
  }
  else{
    alert("Fill the form Correctly!");
  }
}
function Button2(){
  if(validateForm_1()){
    alert("You have been signed in successfully!");
  }
  else{
    alert("Fill the form Correctly!");
  }
}