var u_name = document.myForm.u_login;
var message = document.getElementById("message");

function login() {

    if (u_name.value.length < 5) {
        message.innerHTML = "Muito fraco";
        message.style.color = "red";
        u_name.style.backgroundColor = "red";
        u_name.style.color = "white";
    } else if
        (u_name.value.length == 5) {
        message.innerHTML = "ok";
        message.style.color = "green";
        u_name.style.backgroundColor = "green";
        u_name.style.color = "white";
    }
    else if
        (u_name.value.length > 8) {
        message.innerHTML = " User name is too long.";
        message.style.color = "orange";
        u_name.style.backgroundColor = "orange";
        u_name.style.color = "white";
    }
}