var passwordInput = document.querySelector('.main input');
var result = document.querySelector('.result');
var progress1 = document.querySelector('.one');
var progress2 = document.querySelector('.two');
var progress3 = document.querySelector('.three');


var lowerCase = /[a-z]/;
var upperCase = /[A-Z]/;
var number = /[0-9]/;
var specialChar = /[!@#$]/;

passwordInput.addEventListener('input', function() {
    var password = passwordInput.value;

    if (password.length===0) {
        result.innerHTML = "";
        progress1.style.display="none"
        progress2.style.display="none"
        progress3.style.display="none"
        
    }

    else if (password.length < 4) {
        result.innerHTML = "Your password is too weak";
        result.style.color="blue"
        progress1.style.display="flex"
        progress2.style.display="flex"
        progress3.style.display="flex"
        progress1.style.backgroundColor="blue"
        progress2.style.backgroundColor="rgb(216, 215, 215)"
        progress3.style.backgroundColor="rgb(216, 215, 215)"

    }

    else if (password.length >=4 && lowerCase.test(password) && upperCase.test(password) && number.test(password) && specialChar.test(password)) {
        result.innerHTML = "Your password is strong";
        result.style.color="red"
        progress1.style.display="flex"
        progress2.style.display="flex"
        progress3.style.display="flex"
        progress1.style.backgroundColor="blue"
        progress2.style.backgroundColor="orange"
        progress3.style.backgroundColor="red"

    }

    else if (password.length >= 4 && lowerCase.test(password) && upperCase.test(password)) {
        result.innerHTML = "Your password is medium";
        result.style.color="orange"
        progress1.style.display="flex"
        progress2.style.display="flex"
        progress3.style.display="flex"
        progress1.style.backgroundColor="blue"
        progress2.style.backgroundColor="orange"
        progress3.style.backgroundColor="rgb(216, 215, 215)"

    }
});
