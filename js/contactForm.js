const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



    // function login() {
    //     // Form fields, see IDs above
    //     const params = {
    //       email: document.querySelector('#email').value,
    //       phone: document.querySelector('#phone').value,
    //       message: document.querySelector('#message').value,
    //       subject:"contactUs",
    //       username: document.querySelector('#username').value
    //     }

    //     const http = new XMLHttpRequest()
    //     http.open('POST', 'http://localhost:4003/user/guestSupport')
    //     http.setRequestHeader('Content-type', 'application/json')
    //     http.send(JSON.stringify(params)) // Make sure to stringify
    //     http.onload = function() {
        
    //         alert(http.responseText)
    //     }
    //     xhr.onload = function(){ alert (xhr.responseText); } // success case
    //     http.onerror = function(){ alert (xhr.responseText); } // failure case
    //     http.open (oFormElement.method, oFormElement.action, true);
    //     http.send (new FormData (oFormElement));
    // }


let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

// Error messages
let errorElementUserName = document.getElementById("username_error");
let errorElementEmail = document.getElementById("email_error");
let errorElementPhone = document.getElementById("phone_error");
let errorElementMessage = document.getElementById("message_error");

// Form
let contactForm = document.getElementById("form");

// Event listener
contactForm.addEventListener("submit", function (e) {
  let messageName = [];
  let messageEmail = [];
  let messagePhone = [];
  let messageMessage= [];
  
    if (username.value === "" || username.value === null) {
    messageName.push("* This field is required");
  }

  if (email.value === "" || email.value === null) {
    messageEmail.push("* This field is required");
  }
  if (phone.value === "" || phone.value === null) {
    messagePhone.push("* This field is required");
  } 
   if (message.value === "" || message.value === null) {
    messageMessage.push("* This field is required");
  }

  // Statement to shows the errors
  if (messageName.length > 0 || messageEmail.length > 0 || messagePhone.length > 0 || messageMessage.length > 0) {
    e.preventDefault();
    errorElementUserName.innerText = messageName;
    errorElementEmail.innerText = messageEmail;
    errorElementPhone.innerText = messagePhone;
    errorElementMessage.innerText = messageMessage;
  }
  
    if (
    (username.value.length > 2,
    email.value.length > 2)
  ) {
            const params = {
          email: document.querySelector('#email').value,
          phone: document.querySelector('#phone').value,
          message: document.querySelector('#message').value,
          subject:"contactUs",
          username: document.querySelector('#username').value
        }

        const http = new XMLHttpRequest()
        http.open('POST', 'https://api.vooomapp.tk/user/guestSupport')
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify
        http.onload = function() {
        
            alert("thanks")
        }
        // xhr.onload = function(){ alert (xhr.responseText); } // success case
        // http.onerror = function(){ alert (xhr.responseText); } // failure case
        // http.open (oFormElement.method, oFormElement.action, true);
        // http.send (new FormData (oFormElement));
  
    e.preventDefault();
    window.location.assign("../thanks.html");
  }

});

