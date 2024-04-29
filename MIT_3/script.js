var firstName = document.getElementById('first');
var lastName = document.getElementById('last'); 
var emailAddress = document.getElementById('email');
var password = document.getElementById('password');

var result1 = document.getElementById('one');
var result2 = document.getElementById('two');
var result3 = document.getElementById('three');
var result4 = document.getElementById('four');

var tapButton = document.getElementById('bt');

var img1=document.querySelector('.one')
var img2=document.querySelector('.two')
var img3=document.querySelector('.three')
var img4=document.querySelector('.four')

tapButton.addEventListener("click", function(event) {
    if (firstName.value === '' && lastName.value === '' && emailAddress.value === '' && password.value === '') {
        result1.innerHTML = "first name cannot be empty";
        result2.innerHTML = "last name cannot be empty";
        result3.innerHTML = "looks like it is not an email";
        result4.innerHTML = "password cannot be empty";
        img2.style.display="block"
        img3.style.display="block"
        img1.style.display="block"
        img4.style.display="block"
    } else if (firstName.value === '') {
        result1.innerHTML = "first name cannot be empty";
        img1.style.display="block"
    } else if (lastName.value === '') {
        result2.innerHTML = "last name cannot be empty";
        img2.style.display="block"
    } else if (emailAddress.value === '') {
        result3.innerHTML = "looks like it is not an email";
        img3.style.display="block"
    } else if (password.value === '') {
        result4.innerHTML = "password cannot be empty";
        img4.style.display="block"
    } else if (firstName.value.length < 4) {
        result1.innerHTML = "username should not be less than 4 letters";
        img1.style.display="block"
    } else if (password.value.length < 6 || password.value.length > 16) {
        result4.innerHTML = "password must contain 6 to 16 characters";
        img4.style.display="block"
    } else if (!/[A-Z]/.test(password.value)) {
        result4.innerHTML = "Password must contain at least 1 Uppercase character";
        img4.style.display="block"
    } else if (!/[a-z]/.test(password.value)) {
        result4.innerHTML = "Password must contain at least 1 Lowercase character";
        img4.style.display="block"
    } else if (!/[0-9]/.test(password.value)) {
        result4.innerHTML = "Password must contain at least 1 Number";
        img4.style.display="block"
    } else if (!/[!,@,#,$,%,^,&,*,(,),_,=,+,-,{,[,],},",:,;,',.]/.test(password.value)) {
        result4.innerHTML = "Password must contain at least 1 Special character";
        img4.style.display="block"
    } else {
        result4.innerHTML="Success"
    }
});
