// -------------------- Sidebar Toggle --------------------
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

// -------------------- Persistent Login --------------------
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("dulzuraUser");
  const loginIcon = document.querySelector(".login-icon");

  if (user && loginIcon) {
    loginIcon.textContent = "Logout";
    loginIcon.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("dulzuraUser");
      alert("You have been logged out.");
      window.location.href = "index.html";
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please fill in both fields.");
        return;
      }

      localStorage.setItem("dulzuraUser", email);
      alert(`Welcome back, ${email.split("@")[0]}!`);
      window.location.href = "index.html";
    });
  }
});

// -------------------- Subscribe → Google Sheets (FIXED) --------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");

  if (!form) return;

  // Create editorial success message container
  const successMessage = document.createElement("p");
  successMessage.style.marginTop = "24px";
  successMessage.style.fontFamily = "Cormorant Garamond, serif";
  successMessage.style.fontSize = "18px";
  successMessage.style.color = "#7a0f1d";
  successMessage.style.textAlign = "center";
  successMessage.style.display = "none";
  successMessage.textContent = "You’re on the list. Welcome to Dulzura.";

  form.parentNode.appendChild(successMessage);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const payload = {
      name: form.querySelector('input[name="name"]').value.trim(),
      email: form.querySelector('input[name="email"]').value.trim()
    };

    fetch("https://script.google.com/macros/s/AKfycby_7enLgIX03FTiqYd0Sl5XG1Mm7e0RUP1y-U5AnCvOCr1x1cE4IbPlmJUZBdLGn9Xk/exec", {
  method: "POST",
  body: new FormData(form)
})
.then(response => response.text())
.then(result => {
  const success = document.getElementById("subscribe-success");
  const submitButton = form.querySelector(".subscribe-submit");

  if (result === "duplicate") {
    success.textContent = "You’re already on the list!";
  } else {
    success.textContent = "You’re on the list. Welcome to Dulzura.";
    submitButton.textContent = "Joined";
    submitButton.disabled = true;
    submitButton.style.opacity = "0.6";
    submitButton.style.cursor = "default";
    form.reset();
  }

  success.classList.add("show");
})

  });
});
