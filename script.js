var password1 = document.getElementById('password');
var password2 = document.getElementById('confirm-password');


document.getElementById('create-account').onclick = function () {
    checkPassword();
}

function checkPassword() {
    var PW1 = password1.value;
    var PW2 = password2.value;
    
    if (PW1 != PW2) {
    password1.style.outline = "1px solid red";
    password2.style.outline = "1px solid red";

    alert('Passwords do not match');
    }

    else if (PW1 == PW2) {
        password1.style.outline = "none";
        password2.style.outline = "none";
    }
}