// 共享导航、页脚分别写一次，再加载到每个页面（DRY）。
async function load(file, target) {
  const container = document.getElementById(target);
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`${file}: ${response.status}`);
    container.innerHTML = await response.text();
    if (target === 'site-header') {
      const page = location.pathname.split('/').pop() || 'index.html';
      container.querySelectorAll('.links a').forEach(link => {
        if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
      });
    }
  } catch (error) {
    const note = document.createElement('p');
    note.className = 'load-note';
    note.textContent = '共享内容暂时无法加载。请通过 Live Server 或网站地址访问，并刷新重试。';
    const home = document.createElement('a');
    home.href = 'index.html';
    home.textContent = '返回首页';
    container.replaceChildren(note, home);
    console.error(error);
  }
}
load('nav.html', 'site-header');
load('footer.html', 'site-footer');
