function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordButton = document.getElementById("show-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Show";
    }
}