// register.js
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();


    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});
