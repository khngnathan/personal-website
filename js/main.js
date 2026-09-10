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

  // Open off-site links (and the CV PDF) in a new tab. Internal page
  // navigation and in-page anchors stay in the same tab. rel="noopener"
  // keeps the new tab from getting a handle on this window.
  var links = document.querySelectorAll('a[href]');
  Array.prototype.forEach.call(links, function (a) {
    var isHttp = a.protocol === 'http:' || a.protocol === 'https:';
    var isOffSite = isHttp && a.host !== window.location.host;
    var isPdf = /\.pdf(\?|#|$)/i.test(a.getAttribute('href') || '');
    if (isOffSite || isPdf) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });

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
