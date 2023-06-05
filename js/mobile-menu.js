(() => {
  const mobileMenu = document.querySelector('.header-mobile-menu');
  const openMenuBtn = document.querySelector('.header-burger');
  const closeMenuBtn = document.querySelectorAll('.menu-close');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
