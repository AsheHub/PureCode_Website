//function validate will validate each input data
function validate() {
    //Taking the values from the form
    var name = document.getElementById("name");
    var phone = document.getElementById("mobile");
    var email=document.getElementById("email");
    var choice = document.getElementsByName("choice");

  
    //regular expressions patterns of the first+last name - phone number -email
    var regName = /^(?=.{2,15}$)[a-zA-Z]+$/; //check that entered name is only letters, and range between 2,15 letter
    var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var regPhone = /^\(?([966]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{7})$/;
  
    //First+last name validity check: must contain only letters 
    if (name.value == "") {
              alert("Name is required");
      } else {
        if (!name.value.match(regName)) {
              alert("Name should contain letters only!");
      } else {
        //email validity check: not null and correct format
        if (email.value == "" || !email.value.match(regEmail)) {
              alert("Email is required, please check if the email is valid (CORROECT FORMAT: name@domain.com)");
      } else{
         if (choice.checked == false) {
        alert("please determine your choice");
      } else {
        //phone number validity check: phone number not null, length must be 12, and in correct format
        if (phone.value == "") {
              alert("Phone number is required");
      } else {
        if (phone.value.toString().length != 12 || !phone.value.match(regPhone)) {
              alert("Please enter the correct phone number");
      } else {
        if (choice.checked == false) {
              alert("Please pick your state");
      } else {
                 //print thank you message with all form inputs
                 window.alert("Thank You for contact us "+name.value);
                   }
                  }
                 }
                }
              }
            }
          }
}
        
    //close function validate
  //function start will add event listener to activate submit button and clear button
  function start() {   
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", validate, false);
  }

  window.addEventListener("load", start, false);
  