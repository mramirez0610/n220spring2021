let dvConfirmation = document.getElementById("dvConfirmation");
let userNameTxt = document.getElementById("userNameTxt");
let passwordTxt = document.getElementById("passwordTxt");

function verify() 
{
    let userName = userNameTxt.value;
    let password = passwordTxt.value;

    if( (userName == "Username") && ( password == "Password") ) 
    {
        dvConfirmation.innerHTML = "cool, you're in";
    } else {
        dvConfirmation.innerHTML = "woah woah woah, slow your roll";
    }
   
}