function toggleMenu() {
    const menu = document.querySelector(
        '.menu-links');
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 6) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
  
  