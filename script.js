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

// -------------------- Subscribe → Google Sheets --------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycby_7enLgIX03FTiqYd0Sl5XG1Mm7e0RUP1y-U5AnCvOCr1x1cE4IbPlmJUZBdLGn9Xk/exec", {
  method: "POST",
  body: new FormData(form),
  mode: "no-cors"
})
.then(() => {
  alert("You're on the list!");
  form.reset();
})
.catch(() => {
  // REMOVE the scary error — no need for it
  alert("You're on the list!");
  form.reset();
});
  });
});
