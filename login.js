// login.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
});
