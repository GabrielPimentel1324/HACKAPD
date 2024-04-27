document.getElementById("loginForm").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const loginInput = document.getElementById("name-cad").value;
    const passwordInput = document.getElementById("password-cad").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const registeredUser = users.find(user => user.name === loginInput && user.passWord === passwordInput);

    if (!registeredUser) {
        alert("Dados inválidos!");
        return;
    }

    window.location.href = "../../View/HTML/registered.html";
});