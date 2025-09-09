document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('show');
    });
  }
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
