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

  // If user already logged in, update login icon text
  if (user) {
    loginIcon.textContent = "Logout";
    loginIcon.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("dulzuraUser");
      alert("You have been logged out.");
      window.location.href = "index.html";
    });
  } else {
    // Regular login flow
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
          alert("Please fill in both fields.");
          return;
        }

        // Store user in localStorage to persist login
        localStorage.setItem("dulzuraUser", email);
        alert(`Welcome back, ${email.split("@")[0]}!`);
        window.location.href = "index.html"; // redirect to homepage
      });
    }
  }
});
