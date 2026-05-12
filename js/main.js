const menuButton=document.querySelector('.menu-toggle');
const navPanel=document.querySelector('.nav-panel');
menuButton?.addEventListener('click',()=>{
  const open=navPanel.classList.toggle('is-open');
  menuButton.classList.toggle('is-open',open);
  menuButton.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.nav-panel a').forEach(link=>link.addEventListener('click',()=>{
  navPanel.classList.remove('is-open');
  menuButton?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const filterButtons=document.querySelectorAll('.filter-btn');
const portfolioItems=document.querySelectorAll('.portfolio-item');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(btn=>btn.classList.remove('is-active'));
  button.classList.add('is-active');
  portfolioItems.forEach(item=>{
    const show=filter==='all'||item.dataset.category===filter;
    item.classList.toggle('is-hidden',!show);
  });
}));
