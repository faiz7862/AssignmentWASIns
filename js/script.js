// Basic interactions: nav toggle, year update, form validation, quote form handling
document.addEventListener('DOMContentLoaded', () => {
  // Year placeholders
  const yearEls = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3')];
  const y = new Date().getFullYear();
  yearEls.forEach(el => { if (el) el.textContent = y; });

  // Nav toggle for mobile drawer
  const navToggle = document.getElementById('nav-toggle');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navDrawer.getAttribute('aria-hidden') === 'false';
      if (isOpen) {
        navDrawer.setAttribute('aria-hidden', 'true');
        if (drawerOverlay) drawerOverlay.setAttribute('hidden', '');
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navDrawer.setAttribute('aria-hidden', 'false');
        if (drawerOverlay) drawerOverlay.removeAttribute('hidden');
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Close drawer on overlay or close button click
  if (drawerClose) {
    drawerClose.addEventListener('click', () => {
      navDrawer.setAttribute('aria-hidden', 'true');
      if (drawerOverlay) drawerOverlay.setAttribute('hidden', '');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => {
      navDrawer.setAttribute('aria-hidden', 'true');
      drawerOverlay.setAttribute('hidden', '');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Menu toggle for submenu expansion
  const menuToggles = document.querySelectorAll('.menu-toggle');
  menuToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const menuId = toggle.getAttribute('data-menu');
      const submenu = document.getElementById(menuId + '-menu');
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        if (submenu) submenu.setAttribute('aria-hidden', 'true');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        if (submenu) submenu.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Quote form tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Age increment/decrement
  const ageInput = document.getElementById('age');
  const minusBtn = document.querySelector('.age-btn.minus');
  const plusBtn = document.querySelector('.age-btn.plus');

  if (minusBtn) {
    minusBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = parseInt(ageInput.value) || 0;
      if (current > 0) ageInput.value = current - 1;
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = parseInt(ageInput.value) || 0;
      ageInput.value = current + 1;
    });
  }

  // Remove destination tag
  const removeBtns = document.querySelectorAll('.tag button');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.tag').remove();
    });
  });

  // Quote form submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(quoteForm);
      const destination = formData.get('destination');
      const departure = formData.get('departure');
      const returnDate = formData.get('return');
      const age = formData.get('age');

      if (!destination || !departure || !returnDate || !age) {
        alert('Please fill in all fields');
        return;
      }

      alert(`Quote requested for:\nDestination: ${destination}\nDeparture: ${departure}\nReturn: ${returnDate}\nAge: ${age}`);
      quoteForm.reset();
    });
  }

  // Contact form validation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      clearErrors();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      let ok = true;

      if (name.length < 2) { setError('err-name', 'Please enter at least 2 characters.'); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('err-email', 'Please enter a valid email.'); ok = false; }
      if (message.length < 10) { setError('err-message', 'Please write a short message (min 10 chars).'); ok = false; }

      const status = document.getElementById('form-status');
      if (!ok) {
        if (status) status.textContent = 'Please correct the errors above.';
        return;
      }

      if (status) status.textContent = 'Sending message…';
      setTimeout(() => {
        form.reset();
        if (status) status.textContent = 'Message sent. Thank you.';
      }, 1500);
    });
  }

  function setError(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function clearErrors() {
    ['err-name','err-email','err-message'].forEach(id=>{
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    const status = document.getElementById('form-status');
    if (status) status.textContent = '';
  }
});
