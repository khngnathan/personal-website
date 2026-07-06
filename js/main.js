(function () {
  // Mobile nav toggle.
  var navBtn = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  var navSocial = document.querySelector('.nav-social');
  if (navBtn && navLinks) {
    navBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      if (navSocial) navSocial.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Theme toggle. Initial theme is set by the inline script in <head>.
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (err) {}
    });
  }
})();
