const toggleMenu = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("compact");
});
