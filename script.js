// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

// Simple fake search
function searchSite() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    alert("Search function coming soon for: " + query);
  } else {
    alert("Search Dulzura");
  }
}
