const $ = (elemento) => document.querySelector(elemento);

const registerButton = $("#register");
if (registerButton) {
    registerButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        const name = $("#name-cad").value;
        const email = $("#email-cad").value;
        const passWord = $("#password-cad").value;
        const confirmPassword = $("#confirmPassword").value;

        const passwordConfirmed = passWord === confirmPassword;

        if (!passwordConfirmed) {
            alert("Sua confirmação de senha não confere.\nPor favor verifique.");
            return;
        }

        const allFilled =
            name.length !== 0 &&
            email.length !== 0 &&
            passWord.length !== 0;

        if (!allFilled) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const newUsers = {
            name,
            email,
            passWord,
            confirmPassword,
        };
        users.push(newUsers);
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem('username', name);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../HTML/login.html";
    });
}

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("name-cad").value = "";
    document.getElementById("email-cad").value = "";
    document.getElementById("password-cad").value = "";
    document.getElementById("confirmPassword").value = "";
});