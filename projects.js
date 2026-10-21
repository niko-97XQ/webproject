// 用按钮筛选项目，aria-pressed 告诉辅助技术当前选择。
const bar = document.querySelector('.filter-bar');
const cards = [...document.querySelectorAll('[data-category]')];
if (bar) {
  bar.hidden = false;
  bar.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      bar.querySelectorAll('button').forEach(item => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      let count = 0;
      cards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
        if (!card.hidden) count += 1;
      });
      document.getElementById('filter-status').textContent = `显示 ${count} 个项目`;
    });
  });
}
