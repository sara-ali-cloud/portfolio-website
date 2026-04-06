document.addEventListener('DOMContentLoaded', ()=>{
  // Load any partials (header/footer) into elements marked with data-include
  const includeEls = document.querySelectorAll('[data-include]');
  const includePromises = Array.from(includeEls).map(el => {
    const name = el.getAttribute('data-include');
    return fetch(`partials/${name}.html`)
      .then(resp => resp.text())
      .then(html => { el.innerHTML = html; });
  });

  Promise.all(includePromises).then(() => {
    initNav();
    initPageBehaviors();
    highlightNav();
  }).catch(()=>{
    // still attempt to init behaviors even if includes fail
    initNav();
    initPageBehaviors();
    highlightNav();
  });

  function highlightNav(){
    const path = window.location.pathname.split('/').pop();
    const nav = document.getElementById('main-nav');
    if(nav){
      Array.from(nav.querySelectorAll('a')).forEach(a=>{
        const href = a.getAttribute('href');
        if(href === path || (path === '' && href === 'index.html')){
          a.classList.add('active');
        }
      });
    }
  }

  function initNav(){
    const navToggle=document.getElementById('nav-toggle');
    const nav=document.getElementById('main-nav');
    if(navToggle && nav){
      navToggle.addEventListener('click',()=>{
        const shown = getComputedStyle(nav).display !== 'none';
        nav.style.display = shown ? 'none' : 'block';
      });
      // close nav on link click (mobile)
      nav.addEventListener('click', e => {
        if(e.target.tagName === 'A' && window.innerWidth <= 900) nav.style.display = 'none';
      });
    }
  }

  function initPageBehaviors(){
    const form=document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit',e=>{
        e.preventDefault();
        const msg=document.getElementById('form-msg');
        if(msg) msg.textContent='Thanks — message sent (demo)';
        form.reset();
      });
    }

    // Download resume as PDF via print dialog (user can Save as PDF)
    const downloadBtn = document.getElementById('download');
    if(downloadBtn){
      downloadBtn.addEventListener('click', e => {
        e.preventDefault();
        window.print();
      });
    }
  }
});
