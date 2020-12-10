var showPass = document.getElementById("show-pass");
var pass = document.getElementById("Password");

function show_pass() {
    pass.type = "password";
    if (showPass.checked) {
        pass.type = "text";
    }
}