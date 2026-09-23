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

  const tabs = $$('[data-tab]');
  function showTab(key, focus = false) {
    tabs.forEach(tab => {
      const active = tab.dataset.tab === key;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      $('#panel-' + tab.dataset.tab).hidden = !active;
      if (active && focus) tab.focus();
    });
    track('bc_demo_tab', { tab: key });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showTab(tab.dataset.tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
      if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); showTab(tabs[next].dataset.tab, true); }
    });
  });
  const form = $('#demo-form');
  const services = {
    corte: { name: 'Corte', price: 15000 },
    combo: { name: 'Corte + barba', price: 20000 },
    barba: { name: 'Barba', price: 10000 }
  };
  const appointments = [
    { client: 'Lucas Pérez', professional: 'Federico', service: 'corte', time: '10:00', status: 'Pendiente' },
    { client: 'Martín Díaz', professional: 'Joaquín', service: 'barba', time: '10:00', status: 'Realizado' },
    { client: 'Tomás Ruiz', professional: 'Gero', service: 'combo', time: '11:00', status: 'Pendiente' },
    { client: 'Mateo López', professional: 'Federico', service: 'corte', time: '11:30', status: 'Pendiente' },
    { client: 'Nicolás Ríos', professional: 'Joaquín', service: 'corte', time: '12:00', status: 'Pendiente' },
    { client: 'Diego Vega', professional: 'Gero', service: 'barba', time: '12:30', status: 'Pendiente' },
    { client: 'Bruno Silva', professional: 'Federico', service: 'combo', time: '13:00', status: 'Pendiente' }
  ];
  const initialStatuses = appointments.map(a => a.status);
  let attendingId = null;
  let records = [];
  let client = 'Lucas';
  let submitted = false;
  const submitButton = $('.demo-submit');
  function allowSubmission() {
    submitted = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Registrar en la demo ↗';
    $('#demo-feedback').textContent = '';
    $('#see-cash').hidden = true;
  }
  form.addEventListener('change', () => {
    const service = services[new FormData(form).get('service')];
    $('#demo-total').textContent = money(service.price);
    allowSubmission();
  });
  function renderCash() {
    const cash = 70000 + records.filter(r => r.payment === 'cash').reduce((sum, r) => sum + r.price, 0);
    const transfer = 50000 + records.filter(r => r.payment === 'transfer').reduce((sum, r) => sum + r.price, 0);
    $('#cash-total').textContent = money(cash + transfer);
    $('#cash-cash').textContent = money(cash);
    $('#cash-transfer').textContent = money(transfer);
    $('#cash-count').textContent = `${8 + records.length} servicios`;
    $('#cash-bar').style.width = `${cash / (cash + transfer) * 100}%`;
    const movements = $('#demo-movements');
    movements.replaceChildren();
    if (!records.length) {
      const p = document.createElement('p');
      p.className = 'empty-movements';
      p.textContent = 'Registrá un servicio en el primer paso para verlo acá.';
      movements.append(p);
    }
    records.slice().reverse().forEach(record => {
      const row = document.createElement('div'); row.className = 'movement';
      const label = document.createElement('span');
      label.textContent = `${record.client} · ${record.name}`;
      const detail = document.createElement('small');
      detail.textContent = `${record.professional} · ${record.payment === 'cash' ? 'Efectivo' : 'Transferencia'}`;
      label.append(detail);
      const amount = document.createElement('strong'); amount.textContent = money(record.price);
      row.append(label, amount); movements.append(row);
    });
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (submitted) return;
    const data = new FormData(form);
    const service = services[data.get('service')];
    records.push({ ...service, client, professional: data.get('professional'), payment: data.get('payment') });
    submitted = true; submitButton.disabled = true; submitButton.textContent = 'Registrado en la demo ✓';
    $('#demo-feedback').textContent = `${service.name}: ${money(service.price)} registrados. La caja de ejemplo se actualizó.`;
    $('#see-cash').hidden = false;
    if (attendingId !== null) { appointments[attendingId].status = 'Realizado'; renderCalendar(); attendingId = null; }
    renderCash(); renderReports(); track('bc_demo_service_registered');
  });
  $('#see-cash').addEventListener('click', () => showTab('cash', true));
  $('#reset-demo').addEventListener('click', () => {
    records = []; client = 'Lucas'; form.reset();
    $('#demo-client-name').textContent = client;
    $('#demo-total').textContent = money(services.corte.price);
    attendingId = null; appointments.forEach((a, i) => { a.status = initialStatuses[i]; });
    allowSubmission(); renderCash(); renderReports(); renderCalendar(); track('bc_demo_reset');
  });

  const professionals = ['Federico', 'Joaquín', 'Gero'];
  const colors = ['#ff893e', '#42b980', '#a57cf0'];
  const exampleDate = new Date(2026, 8, 18, 12);
  let dateOffset = 0, calendarView = 'day', selectedAppointment = null;
  const dateAt = offset => { const d = new Date(exampleDate); d.setDate(d.getDate() + offset); return d; };
  const shortDate = d => d.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric' });
  function element(tag, className, text) { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; }
  function selectAppointment(index, focus = true) {
    selectedAppointment = index;
    const a = appointments[index];
    $('#appointment-detail').hidden = false;
    $('#appointment-client').textContent = a.client;
    $('#appointment-time').textContent = a.time + ' – ' + (a.time.endsWith('30') ? String(Number(a.time.slice(0, 2)) + 1).padStart(2, '0') + ':00' : a.time.slice(0, 3) + '30');
    $('#appointment-service').textContent = services[a.service].name;
    $('#appointment-professional').textContent = a.professional;
    $('#appointment-price').textContent = money(services[a.service].price);
    $('#appointment-status').textContent = a.status;
    $('#attend-appointment').disabled = a.status === 'Realizado';
    $('#attend-appointment').textContent = a.status === 'Realizado' ? 'Servicio ya realizado' : 'Registrar realizado ↗';
    $$('.calendar-event').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.index) === index)));
    if (focus) $('#close-appointment').focus({ preventScroll: true });
  }
  function renderCalendar() {
    const date = dateAt(dateOffset), filter = $('#calendar-professional').value;
    const shownProfessionals = filter === 'all' ? professionals : [filter];
    const grid = $('#calendar-grid'); grid.replaceChildren();
    const monday = new Date(date); monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    const dates = Array.from({ length: 7 }, (_, i) => { const d = new Date(monday); d.setDate(d.getDate() + i); return d; });
    const columns = calendarView === 'week' ? dates : shownProfessionals;
    grid.style.setProperty('--calendar-columns', columns.length);
    grid.classList.toggle('week-grid', calendarView === 'week');
    $('#calendar-date').textContent = calendarView === 'week' ? `${shortDate(dates[0])} – ${shortDate(dates[6])}` : date.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
    const corner = element('div', 'calendar-corner', 'Hora'); grid.append(corner);
    columns.forEach(col => {
      const header = element('div', 'calendar-col-head');
      if (calendarView === 'week') header.textContent = shortDate(col);
      else {
        const avatar = element('span', 'calendar-avatar', col[0]); avatar.style.background = colors[professionals.indexOf(col)];
        const label = element('span', '', col);
        label.append(element('small', '', `${dateOffset === 0 ? appointments.filter(a => a.professional === col).length : 0} turnos`));
        header.append(avatar, label);
      }
      grid.append(header);
    });
    for (let slot = 0; slot < 7; slot++) {
      const hour = `${10 + Math.floor(slot / 2)}:${slot % 2 ? '30' : '00'}`;
      grid.append(element('div', 'calendar-time', hour));
      columns.forEach(col => {
        const cell = element('div', 'calendar-cell');
        appointments.forEach((a, index) => {
          const matchesDate = calendarView === 'week' ? col.toDateString() === exampleDate.toDateString() : dateOffset === 0;
          if (!matchesDate || a.time !== hour || (filter !== 'all' && a.professional !== filter) || (calendarView === 'day' && a.professional !== col)) return;
          const button = element('button', 'calendar-event'); button.type = 'button';button.dataset.index = index;
          button.style.setProperty('--event-color', colors[professionals.indexOf(a.professional)]);
          button.setAttribute('aria-label', `${a.time}, ${a.client}, ${services[a.service].name}, ${a.professional}, ${a.status}`);
          button.setAttribute('aria-pressed', String(selectedAppointment === index));
          button.append(element('strong', '', a.client), element('span', '', services[a.service].name), element('small', '', `${a.time} · ${a.professional}`), element('em', a.status === 'Realizado' ? 'status-done' : '', a.status));
          button.addEventListener('click', () => selectAppointment(index)); cell.append(button);
        });
        grid.append(cell);
      });
    }
    $('#appointment-detail').hidden = true;
    selectedAppointment = null;
  }
  $('#calendar-prev').addEventListener('click', () => { dateOffset -= calendarView === 'week' ? 7 : 1; renderCalendar(); });
  $('#calendar-next').addEventListener('click', () => { dateOffset += calendarView === 'week' ? 7 : 1; renderCalendar(); });
  $('#calendar-today').addEventListener('click', () => { dateOffset = 0; renderCalendar(); });
  $('#calendar-professional').addEventListener('change', renderCalendar);
  $$('[data-calendar-view]').forEach(button => button.addEventListener('click', () => {
    calendarView = button.dataset.calendarView;
    $$('[data-calendar-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    renderCalendar();
  }));
  $('#close-appointment').addEventListener('click', () => {
    $('#appointment-detail').hidden = true;
    const target = $(`.calendar-event[data-index="${selectedAppointment}"]`); if (target) target.focus({ preventScroll: true });
  });
  $('#attend-appointment').addEventListener('click', () => {
    if (selectedAppointment === null || appointments[selectedAppointment].status === 'Realizado') return;
    const a = appointments[selectedAppointment]; attendingId = selectedAppointment; client = a.client;
    $('#demo-client-name').textContent = client;
    form.querySelectorAll('input[name=professional]').forEach(input => { input.checked = input.value === a.professional; });
    form.querySelectorAll('input[name=service]').forEach(input => { input.checked = input.value === a.service; });
    $('#demo-total').textContent = money(services[a.service].price);
    allowSubmission(); showTab('service', true);
  });
  function renderReports() {
    const weekly = $('#report-period').value === 'week';
    const extra = records.reduce((sum, r) => sum + r.price, 0);
    const values = weekly ? [65000, 90000, 75000, 110000, 95000, 140000, 120000 + extra] : [120000 + extra];
    const labels = weekly ? ['Sáb', 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie'] : ['Hoy'];
    const income = values.reduce((a, b) => a + b, 0), count = (weekly ? 47 : 8) + records.length;
    $('#report-income').textContent = money(income); $('#report-count').textContent = count;
    $('#report-ticket').textContent = money(income / count);
    const chart = $('#report-chart'); chart.replaceChildren();
    values.forEach((value, i) => {
      const col = element('div', 'report-bar-column'); const bar = element('span', 'report-bar');
      bar.style.height = `${Math.round(value / Math.max(...values) * 115)}px`;
      col.setAttribute('aria-label', `${labels[i]}: ${money(value)}`);
      col.append(element('small', '', money(value)), bar, element('span', 'report-bar-label', labels[i])); chart.append(col);
    });
    const team = $('#report-team'); team.replaceChildren();
    professionals.forEach((name, i) => {
      const n = (weekly ? [18, 16, 13] : [3, 3, 2])[i] + records.filter(r => r.professional === name).length;
      const row = element('div', 'report-team-row'); row.append(element('span', '', name), element('strong', '', n + ' servicios'));
      const track = element('div', 'report-team-track'), fill = element('span'); fill.style.width = `${n / count * 100}%`; fill.style.background = colors[i]; track.append(fill); row.append(track);team.append(row);
    });
  }
  $('#report-period').addEventListener('change', renderReports);
  renderCalendar(); renderReports();
  // Optional actual screenshots. Missing/failed files retain a clean, labelled slot.
  const screenshots = window.BC_LANDING?.screenshots || {};
  $$('[data-screenshot]').forEach(frame => {
    const entry = screenshots[frame.dataset.screenshot];
    if (!entry?.src) return;
    const img = new Image(); img.alt = entry.alt || 'Captura de BarberosControl'; img.loading = 'lazy';
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
