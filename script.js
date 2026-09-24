const root = document.documentElement;
const counter = document.querySelector('#scene-number');
let ticking = false;

function render() {
  const maxScroll = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
  root.style.setProperty('--scroll', progress.toFixed(4));
  counter.textContent = progress > 0.52 ? '02' : '01';
  ticking = false;
}

addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(render);
    ticking = true;
  }
}, { passive: true });

addEventListener('resize', render, { passive: true });
render();
