var login_fun = document.getElementById("login_link");
var sign_fun = document.getElementById("sign_link");
var login_box = document.getElementById("login");
var sign_box = document.getElementById("sign_up");

// this function use for display sign up form
sign_fun.onclick=function()
{
    login_box.style.display="none";
    sign_box.style.display="block";
}

// This function use for display login form
login_fun.onclick=function()
{
    sign_box.style.display="none";
    login_box.style.display="block";
}