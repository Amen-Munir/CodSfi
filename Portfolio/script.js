// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('#navbar');
  
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
      console.log('Button clicked'); // Add this line
    });
  });
  