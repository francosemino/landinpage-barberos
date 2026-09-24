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
})();
