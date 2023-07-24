const email=document.getElementById('email-signup-input');
const warning=document.getElementById('warn');
console.log(warning.innerHTML);
function emailcheck(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        console.log('hai');
        warning.innerHTML="invalid email";
        email.style.border='1px solid red';
    }else{
        console.log(`hey`);
        warning.innerHTML="";
        email.style.border='1px solid green'
    }
    
}