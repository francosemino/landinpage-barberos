(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const money = (value) => '$' + new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(value);
  // These events measure intent, never a completed signup. No external tracker is loaded.
  function track(event, detail = {}) {
    const payload = { event, ...detail };
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
    window.dispatchEvent(new CustomEvent('bc:analytics', { detail: payload }));
  }
  $$('[data-cta]').forEach(link => link.addEventListener('click', () => track('bc_cta_click', { placement: link.dataset.cta })));
  $('#year').textContent = new Date().getFullYear();

  const menuButton = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileNav.hidden = !open;
  }
  menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  window.matchMedia('(min-width:851px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  // Optional actual screenshots. Missing/failed files retain a clean, labelled slot.
  const screenshots = window.BC_LANDING?.screenshots || {};
  $$('[data-screenshot]').forEach(frame => {
    const entry = screenshots[frame.dataset.screenshot];
    if (!entry?.src) return;
    const img = new Image(); img.alt = entry.alt || 'Captura de BarberosControl'; img.decoding = 'async';
    img.addEventListener('load', () => { frame.classList.add('has-screenshot'); });
    img.addEventListener('error', () => { img.remove(); frame.classList.remove('has-screenshot'); });
    img.src = entry.src; frame.append(img);
  });

  // Precios por país: Argentina en pesos, el resto en dólares. Elige solo
  // según la zona horaria del navegador y se puede cambiar con los botones.
  const regionButtons = $$('.price-region button');
  if (regionButtons.length) {
    let timeZone = '';
    try { timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (error) { timeZone = ''; }
    const isMxOrUs = /^America\/(Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Mazatlan|Bahia_Banderas|Hermosillo|Tijuana|New_York|Chicago|Denver|Phoenix|Los_Angeles|Anchorage|Detroit|Boise|Indiana\/.*|Kentucky\/.*)$|^Pacific\/Honolulu$/.test(timeZone);
    const setRegion = (region, manual = false) => {
      regionButtons.forEach(button => {
        const active = button.dataset.region === region;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      $$('.plan-price').forEach(price => {
        const value = region === 'usd' && isMxOrUs ? price.dataset.usdMx : price.dataset[region];
        const label = price.querySelector('small');
        if (price.firstChild && value) price.firstChild.textContent = value;
        if (label && label.dataset[region]) label.textContent = label.dataset[region];
      });
      const note = $('[data-region-note]');
      if (note) note.hidden = region !== 'usd' || isMxOrUs;
      if (manual) track('bc_price_region', { region });
    };
    regionButtons.forEach(button => button.addEventListener('click', () => setRegion(button.dataset.region, true)));
    if (timeZone && !/^America\/(Argentina\/.*|Buenos_Aires|Cordoba|Mendoza)$/.test(timeZone)) setRegion('usd');
  }

  const videoConfig = window.BC_LANDING?.video || {};
  if (videoConfig.src) {
    const trigger = $('[data-open-video]');
    const dialog = $('#video-dialog');
    const video = $('#product-video');
    trigger.hidden = false;
    video.src = videoConfig.src;
    if (videoConfig.poster) video.poster = videoConfig.poster;
    if (videoConfig.captions) {
      const trackElement = document.createElement('track');
      trackElement.kind = 'captions'; trackElement.label = 'Español'; trackElement.srclang = 'es';
      trackElement.src = videoConfig.captions; trackElement.default = true; video.append(trackElement);
    }
    if (videoConfig.transcript) { $('#video-transcript').href = videoConfig.transcript; $('#video-transcript').hidden = false; }
    trigger.addEventListener('click', () => {
      dialog.showModal(); document.body.classList.add('video-open');
      video.play().catch(() => {}); track('bc_video_open');
    });
    $('.close-video').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
    dialog.addEventListener('close', () => { video.pause(); document.body.classList.remove('video-open'); trigger.focus(); });
    video.addEventListener('error', () => { $('#video-error').hidden = false; });
    video.addEventListener('ended', () => track('bc_video_complete'));
  }
  // Reseñas: solo se muestran las aprobadas en el sistema. Nada se inventa:
  // si no hay reseñas o la API falla, la sección sigue oculta.
  const reviewsSection = $('#resenas');
  const reviewsApi = window.BC_LANDING?.reviewsApi;
  if (reviewsSection && reviewsApi && 'fetch' in window) {
    const starString = (value) => '★★★★★'.slice(0, value) + '☆☆☆☆☆'.slice(0, 5 - value);
    const el = (tag, className, text) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    };
    fetch(reviewsApi, { headers: { Accept: 'application/json' } })
      .then(response => (response.ok ? response.json() : null))
      .then(data => {
        const reviews = Array.isArray(data?.reviews) ? data.reviews : [];
        if (!reviews.length) return;
        const list = $('#reviews-list');
        reviews.forEach(review => {
          const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
          const card = el('figure', 'review-card');
          card.setAttribute('role', 'listitem');
          const stars = el('span', 'reviews-stars', starString(rating));
          stars.setAttribute('aria-label', rating + ' de 5 estrellas');
          card.append(stars, el('blockquote', '', review.text));
          const caption = el('figcaption');
          caption.append(el('strong', '', review.author_name), el('span', '', [review.shop_name, review.city].filter(Boolean).join(' · ')));
          card.append(caption);
          list.append(card);
        });
        if (data.average) {
          $('#reviews-average').textContent = Number(data.average).toFixed(1).replace('.', ',');
          $('#reviews-average-stars').textContent = starString(Math.round(data.average));
          $('#reviews-count').textContent = data.count === 1 ? '1 reseña' : data.count + ' reseñas';
        } else {
          $('.reviews-score').hidden = true;
        }
        reviewsSection.hidden = false;
        track('bc_reviews_shown', { count: reviews.length });
      })
      .catch(() => {});
  }
})();
