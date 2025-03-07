document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup").style.display = "flex";
    document.getElementById("login").style.display = "none";

    document.getElementById("toggleForm").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "flex";
    });

    document.getElementById("toggleFormBack").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "flex";
    });
});