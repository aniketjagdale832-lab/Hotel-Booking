let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;


        if (name !== "" && email !== "" && password !== "") {

            let user = {
                name: name,
                email: email
            };


            // Store user information
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            alert("Login successful!");

            window.location.href = "index.html";

        }

    });

}


// Login / Logout button
document.addEventListener("DOMContentLoaded", function () {

    let loginButtons = document.querySelectorAll(".login-btn");

    let loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser"));


    loginButtons.forEach(function (button) {

        if (loggedInUser) {

            button.textContent = "Logout";

            button.href = "#";

            button.onclick = function () {

                localStorage.removeItem("loggedInUser");

                alert("Logout successful!");

                window.location.href = "index.html";
            };

        } else {

            button.textContent = "Login";

            button.href = "login.html";

        }

    });

});