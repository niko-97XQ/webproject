// nav.js — puts the nav and footer into every page
function load(file, target) {
  fetch(file)
    .then(r => r.text())
    .then(html => {
      document.getElementById(target).innerHTML = html;
      if (target === 'site-header') {
        const page = location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('nav .links a').forEach(link => {
          if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
        });
      }
    });
}

load('nav.html', 'site-header');
load('footer.html', 'site-footer');
