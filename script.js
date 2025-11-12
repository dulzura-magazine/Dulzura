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

  // Handle persistent session
  if (user) {
    loginIcon.textContent = "Logout";
    loginIcon.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("dulzuraUser");
      alert("You have been logged out.");
      window.location.href = "index.html";
    });
  }

  // Handle login form submission
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

      // Save user locally
      localStorage.setItem("dulzuraUser", email);
      alert(`Welcome back, ${email.split("@")[0]}!`);
      window.location.href = "index.html";
    });
  }
});
// -------------------- Subscribe Page --------------------
document.addEventListener("DOMContentLoaded", () => {
  const subscribeForm = document.getElementById("subscribe-form");
  const subscribeMessage = document.getElementById("subscribe-message");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      if (!email) return;

      // For now, just show a confirmation
      subscribeMessage.textContent = `🎉 Thanks for subscribing, ${email}!`;
      subscribeMessage.style.color = "green";
      subscribeForm.reset();
    });
  }
});
