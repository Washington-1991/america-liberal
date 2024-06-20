// script.js

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });
});
