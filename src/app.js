const submitBtn = document.getElementById("submitBtn");
const body = document.querySelector("body");

const loginUser = async (email, password) => {
    const url = "https://v2.api.noroff.dev/auth/login";
    const loginData = {
        email,
        password,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Login successful!");
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("apiKey", data.apiKey);
        } else {
            console.error("Login failed:", data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    loginUser(email, password);
});
