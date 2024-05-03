var submitButton=document.getElementById("bt")
var Than=document.querySelector('.main2')
var mai=document.querySelector('.main')
submitButton.addEventListener("click",function(){
    Than.style.display="block"
    mai.style.display="none"
  })

var res=document.querySelector('.ans')
function get1(){
    res.innerHTML="1";
    
}
function get2(){
    res.innerHTML="2"
}
function get3(){
    res.innerHTML="3"
}
function get4(){
    res.innerHTML="4"
}
function get5(){
    res.innerHTML="5"
}