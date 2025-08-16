// auth.js
function isLoggedIn() {
    return localStorage.getItem("loggedInUser") !== null;
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = "login.html";
    }
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
