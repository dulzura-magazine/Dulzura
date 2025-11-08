// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('visible');
}

// Search toggle
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  searchBar.classList.toggle('show');
}

// Search placeholder function
function searchSite() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    alert(`Search for: ${query}`);
  } else {
    alert("Please type something to search Dulzura!");
  }
}
