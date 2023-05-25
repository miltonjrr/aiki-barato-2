let showLogin = document.getElementById("show-login");
let closeLogin = document.getElementById("close-icon");
let hiddenLogin = document.getElementById("login-box");

showLogin.addEventListener("click", function () {
  hiddenLogin.style.display = "block";
});

closeLogin.addEventListener("click", function () {
  hiddenLogin.style.display = "none";
});
