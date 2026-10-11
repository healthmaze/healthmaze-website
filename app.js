/* HealthMaze site script. Plain JavaScript, no build step needed. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var CLINICS = window.HM_CLINICS || [], FOOD = window.HM_FOOD || [], ZIPS = window.HM_ZIPS || {};

  /* ---------- words used in generated content ---------- */
  var T = {
    en: {
      pay: { uninsured: 'No insurance', medicaid: 'Medicaid or CHIP', medicare: 'Medicare', map: 'MAP (Central Health)', private: 'Private insurance' },
      svc: { primary: 'Primary care', pediatrics: 'Kids', womens: "Women's health", dental: 'Dental', behavioral: 'Mental health', pharmacy: 'Pharmacy', vaccines: 'Vaccines', vision: 'Vision' },
      other: { free: 'Free only', spanish: 'Spanish spoken', walkin: 'Walk-ins welcome' },
      food: { pantry: 'Groceries', 'hot-meals': 'Hot meals', 'snap-help': 'SNAP help', hygiene: 'Showers / hygiene', 'groceries-delivery': 'Delivery', spanish: 'Spanish spoken' },
      tag: { free: 'Free', sliding: 'Sliding fee', medicaid: 'Medicaid', chip: 'CHIP', medicare: 'Medicare', map: 'MAP', private: 'Private insurance', spanish: 'Habla español', walkin: 'Walk-ins' },
      address: 'Address', phone: 'Phone', hours: 'Hours', directions: 'Directions', call: 'Call', website: 'Website',
      verify: 'We could not fully confirm this listing. Please call first.',
      clinics: function (n) { return n === 1 ? '1 clinic' : n + ' clinics'; },
      places: function (n) { return n === 1 ? '1 place' : n + ' places'; },
      near: function (z) { return ', closest to ' + z + ' first'; },
      nearYou: ', closest to you first',
      none: 'No matches. Try removing a filter.',
      badzip: "We don't have that ZIP code. Try an Austin-area ZIP like 78701.",
      locFail: "We couldn't get your location. Type your ZIP code instead.",
      search: 'Search by name or neighborhood',
      mi: ' mi',
      call1st: 'Call first',
      risk: function (y, n) { return y + ' in "higher risk", ' + n + ' in "lower risk"'; },
      riskHi: 'You checked more boxes in the "higher risk" column. Consider seeing a healthcare provider to look at your stroke risk more closely.',
      riskLo: 'You checked fewer boxes in the "higher risk" column. Keep screening yourself regularly.',
      riskStart: 'Answer the questions above to see your result.',
      findClinic: 'Find a low-cost clinic',
      yes: 'Yes', no: 'No',
      bio: 'Read bio',
      sent: "Thanks! Your message was sent. We'll reply by email.",
      notSent: "Your message couldn't be sent from here. Please email us at healthmaze23@gmail.com.",
      sending: 'Sending…',
      copied: 'Copied',
      fees: 'Fees', shots: 'Shots'
    },
    es: {
      pay: { uninsured: 'No tengo seguro', medicaid: 'Medicaid o CHIP', medicare: 'Medicare', map: 'MAP (Central Health)', private: 'Seguro privado' },
      svc: { primary: 'Atención primaria', pediatrics: 'Niños', womens: 'Salud de la mujer', dental: 'Dentista', behavioral: 'Salud mental', pharmacy: 'Farmacia', vaccines: 'Vacunas', vision: 'Visión' },
      other: { free: 'Solo gratis', spanish: 'Hablan español', walkin: 'Sin cita' },
      food: { pantry: 'Despensa', 'hot-meals': 'Comida caliente', 'snap-help': 'Ayuda con SNAP', hygiene: 'Regaderas / higiene', 'groceries-delivery': 'Entrega a domicilio', spanish: 'Hablan español' },
      tag: { free: 'Gratis', sliding: 'Tarifa según ingresos', medicaid: 'Medicaid', chip: 'CHIP', medicare: 'Medicare', map: 'MAP', private: 'Seguro privado', spanish: 'Habla español', walkin: 'Sin cita' },
      address: 'Dirección', phone: 'Teléfono', hours: 'Horario', directions: 'Cómo llegar', call: 'Llamar', website: 'Sitio web',
      verify: 'No pudimos confirmar todo sobre este lugar. Por favor llame antes.',
      clinics: function (n) { return n === 1 ? '1 clínica' : n + ' clínicas'; },
      places: function (n) { return n === 1 ? '1 lugar' : n + ' lugares'; },
      near: function (z) { return ', las más cercanas a ' + z + ' primero'; },
      nearYou: ', las más cercanas a usted primero',
      none: 'No hay resultados. Intente quitar un filtro.',
      badzip: 'No tenemos ese código postal. Pruebe uno del área de Austin, como 78701.',
      locFail: 'No pudimos obtener su ubicación. Escriba su código postal.',
      search: 'Buscar por nombre o vecindario',
      mi: ' mi',
      call1st: 'Llame antes',
      risk: function (y, n) { return y + ' en "más riesgo", ' + n + ' en "menos riesgo"'; },
      riskHi: 'Marcó más casillas en la columna de "más riesgo". Considere ver a un proveedor de salud para revisar su riesgo de derrame cerebral.',
      riskLo: 'Marcó menos casillas en la columna de "más riesgo". Siga revisándose seguido.',
      riskStart: 'Conteste las preguntas de arriba para ver su resultado.',
      findClinic: 'Buscar una clínica de bajo costo',
      yes: 'Sí', no: 'No',
      bio: 'Leer biografía',
      sent: '¡Gracias! Su mensaje fue enviado. Le contestaremos por correo.',
      notSent: 'No se pudo enviar su mensaje desde aquí. Escríbanos a healthmaze23@gmail.com.',
      sending: 'Enviando…',
      copied: 'Copiado',
      fees: 'Tarifas', shots: 'Vacunas'
    }
  };
  var lang = 'en';
  var t = function () { return T[lang]; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var L = function (o, k) { return (lang === 'es' && o[k + '_es']) || o[k]; };

  /* ---------- language ---------- */
  function setLang(l, save) {
    lang = l === 'es' ? 'es' : 'en';
    document.documentElement.lang = lang;
    $$('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)); });
    if (save) { try { localStorage.setItem('hm-lang', lang); } catch (e) {} }
    $('#care-q').placeholder = $('#food-q').placeholder = t().search;
    $('#food-zip').placeholder = lang === 'es' ? 'Escriba su código postal' : 'Enter your ZIP code';
    $('#care-zip').placeholder = lang === 'es' ? 'Escriba su código postal' : 'Enter your ZIP code';
    if (/^#clinic-/.test(location.hash)) renderClinic(location.hash.slice(8));
    renderAll();
  }
  $$('[data-set-lang]').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.setLang, true); }); });

  /* ---------- routing (one page at a time, #hash) ---------- */
  var PAGES = $$('.page').map(function (p) { return p.dataset.page; });
  function route() {
    var h = (location.hash || '#home').slice(1);
    if (h === 'main') return;
    if (h === 'directory') { h = 'find-care'; setTimeout(function () { var d = $('#directory'); if (d) d.scrollIntoView(); }, 30); }
    var clinicId = null;
    if (h.indexOf('clinic-') === 0) { clinicId = h.slice(7); h = 'clinic'; renderClinic(clinicId); }
    if (h.indexOf('hn-') === 0) h = 'health-navigator';
    if (PAGES.indexOf(h) < 0) h = 'home';
    $$('.page').forEach(function (p) { p.classList.toggle('on', p.dataset.page === h); });
    var navKey = { stroke: 'guides', vaccines: 'guides', prescriptions: 'guides', learn: 'guides', food: 'guides', hap: 'guides', team: 'about', 'austin-chapter': 'about' }[h] || (h.indexOf('clinic-') === 0 ? 'find-care' : h);
    $$('.nav > a, .nav .ddt').forEach(function (a) { if (a.getAttribute('href') === '#' + navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('.nav').classList.remove('open'); $('.menu-btn').setAttribute('aria-expanded', 'false');
    if ((location.hash || '') !== '#directory') window.scrollTo(0, 0);
    setTimeout(refreshMaps, 0);
    var titles = { home: 'HealthMaze', 'find-care': 'Find a clinic', food: 'Find food', guides: 'Health guides', stroke: 'Stroke risk check', vaccines: 'Affordable vaccines', prescriptions: 'Prescription help', learn: 'Learn', about: 'Our Mission', team: 'Our Team', 'austin-chapter': 'Austin Chapter', impact: 'Our impact', volunteer: 'Volunteer', donate: 'Donate', contact: 'Contact', 'health-navigator': 'Health Navigator' };
    document.title = h === 'home' ? 'HealthMaze' : titles[h] + ' · HealthMaze';
  }
  window.addEventListener('hashchange', route);
  $('.menu-btn').addEventListener('click', function () {
    var open = $('.nav').classList.toggle('open');
    this.setAttribute('aria-expanded', String(open));
  });

  /* ---------- distance ---------- */
  function miles(a, b) {
    if (!a || !b || b[0] == null) return null;
    var R = 3958.8, r = Math.PI / 180, dLa = (b[0] - a[0]) * r, dLo = (b[1] - a[1]) * r;
    var x = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }


  /* ---------- maps (Leaflet + free CARTO/OpenStreetMap tiles) ---------- */
  var Lf = window.L, maps = {}, lastList = {};
  var PIN = '<svg width="28" height="38" viewBox="0 0 40 50"><path d="M20 48C20 48 3 30 3 18a17 17 0 0 1 34 0c0 12-17 30-17 30Z" fill="#C0392B" stroke="#fff" stroke-width="2.5"/><circle cx="20" cy="18" r="6.5" fill="#fff"/></svg>';
  function getMap(key) {
    if (maps[key] || !Lf) return maps[key];
    var el = $('#' + key + '-map'); if (!el || !el.offsetParent) return null;
    var m = Lf.map(el, { scrollWheelZoom: false }).setView([30.29, -97.74], 10);
    if (location.protocol === 'file:') {
      // opened straight from a computer folder: OpenStreetMap needs a real web address, so use Esri's street map for local previews
      Lf.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri', maxZoom: 19 }).addTo(m);
    } else {
      // CARTO started answering with "API KEY REQUIRED" tiles (Oct 2026), so the site uses OpenStreetMap's free tiles
      Lf.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19 }).addTo(m);
    }
    if (window.ResizeObserver) {
      var rt; new ResizeObserver(function () { clearTimeout(rt); rt = setTimeout(function () { m.invalidateSize(); if (lastList[key]) drawMap(key, lastList[key][0], lastList[key][1]); }, 120); }).observe(el);
    }
    maps[key] = { m: m, layer: Lf.layerGroup().addTo(m), icon: Lf.divIcon({ className: 'pin', html: PIN, iconSize: [28, 38], iconAnchor: [14, 38], popupAnchor: [0, -32] }) };
    return maps[key];
  }
  function drawMap(key, list, origin) {
    lastList[key] = [list, origin];
    var M = getMap(key); if (!M) return;
    M.layer.clearLayers();
    var pts = [];
    list.forEach(function (c) {
      if (c.lat == null || c.lng == null) return;
      var html = '<b>' + esc(c.name) + '</b>' + (c.address ? '<br>' + esc(c.address) : '') + (c.phone ? '<br>' + esc(c.phone) : '') +
        (c.address ? '<br><a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(c.address) + '" target="_blank" rel="noopener">' + t().directions + '</a>' : '');
      Lf.marker([c.lat, c.lng], { icon: M.icon, title: c.name }).bindPopup(html).addTo(M.layer);
      pts.push([c.lat, c.lng]);
    });
    var fit = pts;
    if (origin) {
      Lf.circleMarker(origin, { radius: 8, color: '#fff', weight: 3, fillColor: '#1F5FBF', fillOpacity: 1 }).addTo(M.layer);
      fit = pts.slice().sort(function (a, b) { return miles(origin, a) - miles(origin, b); }).slice(0, 5).concat([origin]);
    }
    if (fit.length) M.m.fitBounds(fit, { padding: [30, 30], maxZoom: 13 });
  }
  function refreshMaps() {
    ['care', 'food'].forEach(function (k) {
      var M = getMap(k);
      if (M) { M.m.invalidateSize(); if (lastList[k]) drawMap(k, lastList[k][0], lastList[k][1]); }
    });
  }

  /* ---------- filter UI ---------- */
  function checks(container, group, labels, state) {
    container.innerHTML = Object.keys(labels).map(function (k) {
      var id = 'f-' + group + '-' + k;
      return '<label class="check" for="' + id + '"><input type="checkbox" id="' + id + '" data-g="' + group + '" value="' + k + '"' + (state[k] ? ' checked' : '') + '> <span>' + esc(labels[k]) + '</span></label>';
    }).join('');
  }

  var care = { pay: {}, svc: {}, other: {}, origin: null, originLabel: '', q: '', mode: 'all', radius: 20 };
  var food = { type: {}, origin: null, originLabel: '', q: '' };

  function clinicMatch(c) {
    if (care.mode === 'insured' && !c.insuredList) return false;
    if (care.mode === 'uninsured' && !c.uninsuredList) return false;
    if (care.origin && care.radius < 20) { var dd = miles(care.origin, [c.lat, c.lng]); if (dd == null || dd > care.radius) return false; }
    var payKeys = Object.keys(care.pay).filter(function (k) { return care.pay[k]; });
    if (payKeys.length) {
      var ok = payKeys.some(function (k) {
        if (k === 'uninsured') return c.pay.indexOf('uninsured') > -1 || c.pay.indexOf('sliding') > -1 || c.pay.indexOf('free') > -1;
        if (k === 'medicaid') return c.pay.indexOf('medicaid') > -1 || c.pay.indexOf('chip') > -1;
        return c.pay.indexOf(k) > -1;
      });
      if (!ok) return false;
    }
    for (var s in care.svc) if (care.svc[s] && c.services.indexOf(s) < 0) return false;
    if (care.other.free && c.pay.indexOf('free') < 0) return false;
    if (care.other.spanish && !c.spanish) return false;
    if (care.other.walkin && !c.walkin) return false;
    if (care.q) {
      var hay = (c.name + ' ' + (c.org || '') + ' ' + (c.area || '') + ' ' + (c.address || '')).toLowerCase();
      if (hay.indexOf(care.q) < 0) return false;
    }
    return true;
  }

  function placeCard(c, kind, origin) {
    var d = origin ? miles(origin, [c.lat, c.lng]) : null;
    var tags = [];
    if (kind === 'clinic') {
      if (c.pay.indexOf('free') > -1) tags.push('<li class="tag free">' + t().tag.free + '</li>');
      if (c.pay.indexOf('sliding') > -1) tags.push('<li class="tag">' + t().tag.sliding + '</li>');
      ['medicaid', 'chip', 'medicare', 'map', 'private'].forEach(function (k) { if (c.pay.indexOf(k) > -1) tags.push('<li class="tag">' + t().tag[k] + '</li>'); });
      if (c.spanish) tags.push('<li class="tag es">' + t().tag.spanish + '</li>');
      if (c.walkin) tags.push('<li class="tag walk">' + t().tag.walkin + '</li>');
    } else {
      c.type.forEach(function (k) { if (t().food[k]) tags.push('<li class="tag' + (k === 'pantry' || k === 'hot-meals' ? ' free' : '') + '">' + t().food[k] + '</li>'); });
      if (c.spanish) tags.push('<li class="tag es">' + t().tag.spanish + '</li>');
    }
    var svc = kind === 'clinic' && c.services.length ? '<p class="sub">' + c.services.map(function (s) { return t().svc[s] || ''; }).filter(Boolean).join(' · ') + '</p>' : '';
    var facts = '';
    if (c.address) facts += '<dt>' + t().address + '</dt><dd>' + esc(c.address) + '</dd>';
    if (c.phone) facts += '<dt>' + t().phone + '</dt><dd>' + esc(c.phone) + '</dd>';
    var hrs = L(c, 'hours');
    if (hrs) facts += '<dt>' + t().hours + '</dt><dd>' + esc(hrs) + '</dd>';
    var note = L(c, 'note');
    var acts = [];
    if (c.address) acts.push('<a class="btn sm" href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(c.address) + '" target="_blank" rel="noopener">' + t().directions + '</a>');
    if (c.phone) acts.push('<a class="btn sm ghost" href="tel:+1' + c.phone.replace(/\D/g, '').replace(/^1(?=\d{10})/, '').slice(0, 10) + '">' + t().call + '</a>');
    if (c.website) acts.push('<a class="btn sm ghost" href="' + esc(c.website) + '" target="_blank" rel="noopener">' + t().website + '</a>');
    return '<article class="card">' +
      '<div class="card-h"><div><h3>' + esc(c.name) + '</h3><p class="sub">' + esc([c.org !== 'independent' ? c.org : '', c.area].filter(Boolean).join(' · ')) + '</p></div>' +
      (d != null ? '<span class="dist">' + d.toFixed(1) + t().mi + '</span>' : '') + '</div>' +
      (tags.length ? '<ul class="tags">' + tags.join('') + '</ul>' : '') + svc +
      (facts ? '<dl class="facts">' + facts + '</dl>' : '') +
      (note ? '<p class="note">' + esc(note) + '</p>' : '') +
      (c.verify ? '<p class="note verify">' + t().verify + '</p>' : '') +
      '<div class="acts">' + acts.join('') + '</div></article>';
  }

  function sortByOrigin(list, origin) {
    if (!origin) return list.slice().sort(function (a, b) { if (care.mode === 'insured' && a.insOrder != null && b.insOrder != null) return a.insOrder - b.insOrder; return (a.order != null && b.order != null) ? a.order - b.order : ((a.verify - b.verify) || a.name.localeCompare(b.name)); });
    return list.slice().sort(function (a, b) {
      var da = miles(origin, [a.lat, a.lng]), db = miles(origin, [b.lat, b.lng]);
      return (da == null ? 9999 : da) - (db == null ? 9999 : db);
    });
  }

  function renderCare() {
    checks($('#f-pay'), 'pay', t().pay, care.pay);
    checks($('#f-svc'), 'svc', t().svc, care.svc);
    checks($('#f-other'), 'other', t().other, care.other);
    var list = sortByOrigin(CLINICS.filter(clinicMatch), care.origin);
    var n = Object.keys(care.pay).concat(Object.keys(care.svc), Object.keys(care.other)).filter(function (k) { return care.pay[k] || care.svc[k] || care.other[k]; }).length;
    $('#care-filters .fcount').textContent = n ? '(' + n + ')' : '';
    $('#care-count').textContent = t().clinics(list.length) + (care.origin ? (care.originLabel ? t().near(care.originLabel) : t().nearYou) : '');
    $('#care-results').innerHTML = list.length ? list.map(function (c) {
      var d = care.origin ? miles(care.origin, [c.lat, c.lng]) : null;
      return '<a class="ccard" href="#clinic-' + c.id + '"><div class="ph">' + (c.img ? '<img src="' + c.img + '" alt="" loading="lazy">' : '') + '</div><h3>' + esc((care.mode === 'insured' && c.insTitle) || c.ogTitle || c.name) + '</h3>' + (d != null ? '<span class="dist">' + d.toFixed(1) + t().mi + '</span>' : '') + '</a>';
    }).join('') : '<div class="empty" style="grid-column:1/-1;color:var(--ink)">' + t().none + '</div>';
    var tt = { all: ['Clinic Directory', 'Directorio de Clínicas'], insured: ['Insured Clinics', 'Clínicas con Seguro'], uninsured: ['Out-of-Pocket Clinics', 'Clínicas sin Seguro'] }[care.mode];
    $('#care-title').textContent = tt[lang === 'es' ? 1 : 0];
    $$('[data-ins]').forEach(function (b) { if (b.classList.contains('bigpill')) b.setAttribute('aria-pressed', String(b.dataset.ins === care.mode)); });
    $('#care-radius-label').textContent = care.origin ? (care.radius < 20 ? (lang === 'es' ? 'Dentro de ' : 'Within ') + care.radius + (lang === 'es' ? ' millas' : ' miles') : (lang === 'es' ? 'Cualquier distancia' : 'Any distance')) : (lang === 'es' ? 'Escriba su código postal para usar la distancia.' : 'Enter a ZIP code to use distance.');
    drawMap('care', list, care.origin);
  }

  function renderFood() {
    checks($('#f-food'), 'type', t().food, food.type);
    var keys = Object.keys(food.type).filter(function (k) { return food.type[k]; });
    var list = FOOD.filter(function (f) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === 'spanish') { if (!f.spanish) return false; }
        else if (f.type.indexOf(keys[i]) < 0) return false;
      }
      if (food.q && (f.name + ' ' + (f.area || '') + ' ' + (f.address || '')).toLowerCase().indexOf(food.q) < 0) return false;
      return true;
    });
    list = sortByOrigin(list, food.origin);
    $('#food-filters .fcount').textContent = keys.length ? '(' + keys.length + ')' : '';
    $('#food-count').textContent = t().places(list.length) + (food.origin ? (food.originLabel ? t().near(food.originLabel) : t().nearYou) : '');
    $('#food-results').innerHTML = list.length ? list.map(function (f) { return placeCard(f, 'food', food.origin); }).join('') : '<div class="empty">' + t().none + '</div>';
    drawMap('food', list, food.origin);
  }

  function wireFilters(root, state, render) {
    root.addEventListener('change', function (e) {
      var i = e.target; if (!i.dataset || !i.dataset.g) return;
      state[i.dataset.g][i.value] = i.checked; render();
    });
  }
  wireFilters($('#care-filters'), care, renderCare);
  wireFilters($('#food-filters'), food, renderFood);
  $('#care-clear').addEventListener('click', function () { care.pay = {}; care.svc = {}; care.other = {}; care.mode = 'all'; care.radius = 20; $('#care-radius').value = 20; renderCare(); });
  $('#food-clear').addEventListener('click', function () { food.type = {}; renderFood(); });

  function wireZip(inputSel, locSel, state, render, countSel) {
    var inp = $(inputSel);
    inp.addEventListener('input', function () {
      var z = inp.value.replace(/\D/g, '').slice(0, 5); inp.value = z;
      if (z.length === 5) {
        if (ZIPS[z]) { state.origin = ZIPS[z]; state.originLabel = z; render(); }
        else { state.origin = null; render(); $(countSel).textContent = t().badzip; }
      } else if (!z && state.origin) { state.origin = null; render(); }
    });
    $(locSel).addEventListener('click', function () {
      if (!navigator.geolocation) { $(countSel).textContent = t().locFail; return; }
      navigator.geolocation.getCurrentPosition(function (p) {
        state.origin = [p.coords.latitude, p.coords.longitude]; state.originLabel = ''; inp.value = ''; render();
      }, function () { $(countSel).textContent = t().locFail; }, { timeout: 8000, maximumAge: 600000 });
    });
  }
  wireZip('#care-zip', '#care-loc', care, renderCare, '#care-count');
  wireZip('#food-zip', '#food-loc', food, renderFood, '#food-count');
  $('#care-q').addEventListener('input', function () { care.q = this.value.trim().toLowerCase(); renderCare(); });
  $('#food-q').addEventListener('input', function () { food.q = this.value.trim().toLowerCase(); renderFood(); });


  /* ---------- clinic detail page (content from the original HealthMaze clinic pages) ---------- */
  function renderClinic(id) {
    var c = CLINICS.filter(function (x) { return x.id === id; })[0];
    if (!c) { $('#cd-name').textContent = ''; $('#cd-body').innerHTML = ''; return; }
    $('#cd-name').textContent = c.ogTitle || c.name;
    var secs = (c.og || []).map(function (s) {
      return '<details><summary>' + esc(s[0]) + '</summary><div class="a">' + s[1].split('\n').map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('') + '</div></details>';
    }).join('');
    var acts = [];
    if (c.address) acts.push('<a class="btn redb" href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(c.address) + '" target="_blank" rel="noopener">' + t().directions + '</a>');
    if (c.website) acts.push('<a class="btn out" href="' + esc(c.website) + '" target="_blank" rel="noopener">' + t().website + '</a>');
    $('#cd-body').innerHTML = secs + (lang === 'es' && secs ? '<p class="small muted" style="margin-top:12px">Esta información está en inglés.</p>' : '') + '<div class="btns" style="margin-top:26px">' + acts.join('') + '</div>' + (c.verify ? '<p class="note verify" style="margin-top:18px">' + t().verify + '</p>' : '');
    $('#cd-img').innerHTML = c.img ? '<img src="' + c.img + '" alt="" style="border-radius:28%;width:100%">' : '';
  }
  $$('[data-ins]').forEach(function (b) { b.addEventListener('click', function () {
    care.mode = b.dataset.ins; care.pay = {}; renderCare();
    var d = $('#directory'); if (d) d.scrollIntoView({ behavior: 'smooth' });
  }); });
  $('#care-radius').addEventListener('input', function () { care.radius = +this.value; renderCare(); });
  $('#care-go').addEventListener('click', function () { var e = new Event('input'); $('#care-zip').dispatchEvent(e); var z = $('#care-zip').value; if (z.length !== 5) $('#care-count').textContent = t().badzip; });

  /* home search */
  var homePay = {};
  function renderHomeChips() {
    if (!$('#home-pay')) return;
    $('#home-pay').innerHTML = Object.keys(t().pay).map(function (k) {
      return '<button type="button" class="chip" data-k="' + k + '" aria-pressed="' + (!!homePay[k]) + '">' + esc(t().pay[k]) + '</button>';
    }).join('');
  }
  if ($('#home-search')) $('#home-pay').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    homePay[b.dataset.k] = !homePay[b.dataset.k]; b.setAttribute('aria-pressed', String(homePay[b.dataset.k]));
  });
  if ($('#home-search')) $('#home-search').addEventListener('submit', function (e) {
    e.preventDefault();
    var z = $('#home-zip').value.replace(/\D/g, '');
    care.pay = Object.assign({}, homePay);
    if (ZIPS[z]) { care.origin = ZIPS[z]; care.originLabel = z; $('#care-zip').value = z; }
    renderCare();
    location.hash = 'find-care';
  });
  $$('[data-svc]').forEach(function (a) { a.addEventListener('click', function () { care.svc = {}; care.svc[a.dataset.svc] = true; renderCare(); }); });

  /* ---------- weekly schedule (edit here) ---------- */
  var SCHEDULE = [
    { d: ['Monday', 'Lunes'], time: '7:00 pm', place: 'Socks for the Sole', pub: true },
    { d: ['Tuesday', 'Martes'], time: '11:00 am', place: 'Sunrise Homeless Navigation Center', pub: true },
    { d: ['Wednesday', 'Miércoles'], time: '7:00 pm', place: ['General meeting (members)', 'Reunión general (miembros)'], pub: false },
    { d: ['Friday', 'Viernes'], time: '11:00 am', place: 'Trinity Center', pub: true }
  ];
  function renderSchedule() {
    var row = function (s) {
      var place = Array.isArray(s.place) ? s.place[lang === 'es' ? 1 : 0] : s.place;
      return '<li><span class="d">' + s.d[lang === 'es' ? 1 : 0] + '</span><span>' + esc(place) + ' · ' + s.time + '</span></li>';
    };
    if ($('#schedule')) $('#schedule').innerHTML = SCHEDULE.filter(function (s) { return s.pub; }).map(row).join('');
    if ($('#schedule2')) $('#schedule2').innerHTML = SCHEDULE.map(row).join('');
  }

  /* ---------- stroke checklist ---------- */
  var RISK = [
    ['Is your blood pressure greater than 120/80 mm Hg?', '¿Su presión es mayor de 120/80 mm Hg?'],
    ['Is your blood sugar greater than 100 mg/dL?', '¿Su azúcar en la sangre es mayor de 100 mg/dL?'],
    ['Is your diet high in saturated fat, trans fat, sweetened drinks, salt, and extra calories?', '¿Su dieta tiene mucha grasa saturada, grasa trans, bebidas azucaradas, sal y calorías de más?'],
    ['Have you been diagnosed with diabetes?', '¿Le han diagnosticado diabetes?'],
    ['Do you get less than 150 minutes of moderate to vigorous activity a week?', '¿Hace menos de 150 minutos de actividad moderada o intensa a la semana?'],
    ['Do you have a personal or family history of stroke or heart attack?', '¿Usted o alguien de su familia ha tenido un derrame cerebral o un ataque al corazón?'],
    ['Do you use tobacco or vape?', '¿Fuma o usa vapeador?'],
    ['Are you older than 55?', '¿Tiene más de 55 años?'],
    ['Are you considered overweight?', '¿Tiene sobrepeso?'],
    ['(Women only) Do you take birth control pills?', '(Solo mujeres) ¿Toma pastillas anticonceptivas?']
  ];
  var riskAns = {};
  function renderRisk() {
    $('#risk tbody').innerHTML = RISK.map(function (q, i) {
      return '<tr><td>' + esc(q[lang === 'es' ? 1 : 0]) + '</td>' +
        '<td class="c"><label><input type="radio" name="rq' + i + '" id="rq' + i + 'y" value="y"' + (riskAns[i] === 'y' ? ' checked' : '') + '> ' + t().yes + '</label></td>' +
        '<td class="c"><label><input type="radio" name="rq' + i + '" id="rq' + i + 'n" value="n"' + (riskAns[i] === 'n' ? ' checked' : '') + '> ' + t().no + '</label></td></tr>';
    }).join('');
    riskResult();
  }
  function riskResult() {
    var y = 0, n = 0; Object.keys(riskAns).forEach(function (k) { if (riskAns[k] === 'y') y++; else n++; });
    var box = $('#risk-result');
    if (!y && !n) { box.className = 'result box'; box.textContent = t().riskStart; return; }
    var hi = y > n;
    box.className = 'result ' + (hi ? 'hi' : 'lo');
    box.innerHTML = '<p style="margin-bottom:6px"><b>' + t().risk(y, n) + '</b></p><p>' + (hi ? t().riskHi : t().riskLo) + '</p>' +
      (hi ? '<p style="margin-top:10px"><a class="btn sm" href="#find-care">' + t().findClinic + '</a></p>' : '');
  }
  $('#risk').addEventListener('change', function (e) {
    var m = /^rq(\d+)/.exec(e.target.name || ''); if (!m) return;
    riskAns[m[1]] = e.target.value; riskResult();
  });

  /* ---------- vaccine clinics (from the Feb 2023 guide) ---------- */
  var VAX = [
    { name: 'Shots for Tots: Far South Health Center', org: 'Austin Public Health', address: '405 W Stassney Ln, Austin, TX 78745', phone: '(512) 972-5520', website: 'https://www.austintexas.gov/department/immunizations',
      fee: ['Free COVID-19 vaccines. $10 per vaccine for kids, $25 for adults.', 'Vacunas COVID-19 gratis. $10 por vacuna para niños, $25 para adultos.'],
      hours: ['Mon 10am–1:30pm & 3–7pm; Tue–Thu 8am–12:30pm & 2–5pm; Fri 8–11:30am; 1st Sat 8am–12pm', 'lun 10am–1:30pm y 3–7pm; mar–jue 8am–12:30pm y 2–5pm; vie 8–11:30am; 1er sáb 8am–12pm'] },
    { name: 'Shots for Tots: St. Johns Clinic', org: 'Austin Public Health', address: '7500 Blessing Ave, Austin, TX 78752', phone: '(512) 972-5520', website: 'https://www.austintexas.gov/department/immunizations',
      fee: ['Free COVID-19 vaccines. $10 per vaccine for kids, $25 for adults.', 'Vacunas COVID-19 gratis. $10 por vacuna para niños, $25 para adultos.'],
      hours: ['Mon 10am–1:30pm & 3–7pm; Tue–Thu 8am–12:30pm & 2–5pm; Fri 8–11:30am; 3rd Sat 8am–12pm', 'lun 10am–1:30pm y 3–7pm; mar–jue 8am–12:30pm y 2–5pm; vie 8–11:30am; 3er sáb 8am–12pm'] },
    { name: 'UT Children’s Wellness Center', org: 'UT School of Nursing', address: '5301 Ross Rd, Del Valle, TX 78617', phone: '(512) 386-3335', website: 'https://nursing.utexas.edu/wellness-centers/children-wellness-center',
      fee: ['$10 per vaccine for kids (including flu), $25 for adults.', '$10 por vacuna para niños (incluye la gripe), $25 para adultos.'], hours: ['Mon–Fri 8am–12pm & 1–5pm', 'lun–vie 8am–12pm y 1–5pm'] },
    { name: 'UT Family Wellness Center', org: 'UT School of Nursing', address: '2901 N IH-35, Suite 1.301, Austin, TX 78722', phone: '(512) 232-3900', website: 'https://nursing.utexas.edu/wellness-centers/family-wellness-center',
      fee: ['$13.75 per vaccine for kids, $25 for adults and flu shots.', '$13.75 por vacuna para niños, $25 para adultos y vacuna de la gripe.'], hours: ['Mon 8am–8pm; Tue–Thu 8am–5pm; Fri 8am–12pm', 'lun 8am–8pm; mar–jue 8am–5pm; vie 8am–12pm'] },
    { name: 'Lone Star Circle of Care', org: ['Several Austin locations', 'Varias ubicaciones en Austin'], address: null, phone: '(877) 800-5722', website: 'https://lonestarcares.org/',
      fee: ['Sliding fee based on household income.', 'Tarifa según los ingresos de su hogar.'], hours: ['Mon–Fri 8am–5pm', 'lun–vie 8am–5pm'] },
    { name: 'People’s Community Clinic', org: ['Austin and Manor', 'Austin y Manor'], address: '1101 Camino La Costa, Austin, TX 78752', phone: '(512) 478-4939', website: 'https://www.austinpcc.org/',
      fee: ['Sliding fee based on household income. Flu shots for current patients.', 'Tarifa según ingresos. Vacuna de la gripe para pacientes actuales.'], hours: null },
    { name: 'Volunteer Healthcare Clinic', org: ['Free clinic', 'Clínica gratis'], address: '4215 Medical Pkwy, Austin, TX 78756', phone: '(512) 459-6002', website: 'https://www.volclinic.org/',
      fee: ['Free flu shots for kids and adults.', 'Vacuna de la gripe gratis para niños y adultos.'], hours: null },
    { name: 'Round Rock Public Health Center', org: 'Williamson County', address: '355 Texas Ave, Round Rock, TX 78664', phone: '(512) 248-3257', website: 'https://www.wcchd.org/',
      fee: ['$13 per vaccine for ages 0–18, $25 for adults. Free flu shots.', '$13 por vacuna de 0 a 18 años, $25 para adultos. Vacuna de la gripe gratis.'], hours: ['Mon–Thu 7am–12pm & 1–5pm; Fri 8am–12pm', 'lun–jue 7am–12pm y 1–5pm; vie 8am–12pm'] },
    { name: 'Cedar Park Public Health Center', org: 'Williamson County', address: '350 Discovery Blvd #102, Cedar Park, TX 78613', phone: '(512) 260-4240', website: 'https://www.wcchd.org/',
      fee: ['$13 per vaccine for ages 0–18, $25 for adults. Free flu shots.', '$13 por vacuna de 0 a 18 años, $25 para adultos. Vacuna de la gripe gratis.'], hours: ['Mon–Thu 7am–12pm & 1–5pm; Fri 8am–12pm', 'lun–jue 7am–12pm y 1–5pm; vie 8am–12pm'] },
    { name: 'Georgetown Public Health Center', org: 'Williamson County', address: '100 W 3rd St, Georgetown, TX 78626', phone: '(512) 943-3640', website: 'https://www.wcchd.org/',
      fee: ['$13 per vaccine for ages 0–18, $25 for adults. Free flu shots.', '$13 por vacuna de 0 a 18 años, $25 para adultos. Vacuna de la gripe gratis.'], hours: ['Mon–Thu 7am–12pm & 1–5pm; Fri 8am–12pm', 'lun–jue 7am–12pm y 1–5pm; vie 8am–12pm'] },
    { name: 'Taylor Public Health Center', org: 'Williamson County', address: '115 W 6th St, Taylor, TX 76574', phone: '(512) 238-2121', website: 'https://www.wcchd.org/',
      fee: ['$13 per vaccine for ages 0–18, $25 for adults. Free flu shots.', '$13 por vacuna de 0 a 18 años, $25 para adultos. Vacuna de la gripe gratis.'], hours: ['Tuesdays only, 7am–12pm & 1–5pm', 'Solo martes, 7am–12pm y 1–5pm'] }
  ];
  function renderVax() {
    var i = lang === 'es' ? 1 : 0;
    $('#vax-list').innerHTML = VAX.map(function (v) {
      return placeCard({ name: v.name, org: Array.isArray(v.org) ? v.org[i] : v.org, area: '', address: v.address, phone: v.phone, website: v.website,
        hours: v.hours ? v.hours[i] : null, note: v.fee[i], type: [], verify: false }, 'food', null);
    }).join('');
  }

  /* ---------- prescription programs ---------- */
  var RX = [
    ['CancerCare Co-Payment Assistance Foundation', 'https://www.cancercarecopay.org/', ['Certain cancer treatment drugs', 'Ciertas medicinas para el cáncer'], '866-552-6729'],
    ['Good Days', 'https://www.mygooddays.org/', ['Medicine for certain chronic conditions', 'Medicinas para ciertas enfermedades crónicas'], '877-968-7233'],
    ['HealthWell Foundation', 'https://www.healthwellfoundation.org/', ['Copays, premiums and deductibles for chronic illness', 'Copagos, primas y deducibles para enfermedades crónicas'], '800-675-8416'],
    ['The Leukemia & Lymphoma Society', 'https://www.lls.org/', ['Blood cancer treatment copays and premiums', 'Copagos y primas para tratamiento de cáncer de la sangre'], '877-557-2672'],
    ['National Organization for Rare Disorders (NORD)', 'https://rarediseases.org/', ['Premiums and copays for rare diseases', 'Primas y copagos para enfermedades raras'], '800-999-6673'],
    ['Patient Advocate Foundation Co-Pay Relief', 'https://copays.org/', ['Prescription copays for specific conditions', 'Copagos de medicinas para ciertas condiciones'], '866-512-3861'],
    ['PAN Foundation', 'https://panfoundation.org/', ['Out-of-pocket costs for chronic and rare diseases', 'Gastos de bolsillo para enfermedades crónicas y raras'], '866-316-7263'],
    ['Patient Services Incorporated (PSI)', 'https://www.patientservicesinc.org/', ['Copays for specific conditions, regardless of income', 'Copagos para ciertas condiciones, sin importar los ingresos'], '800-366-7741']
  ];
  function renderRx() {
    var i = lang === 'es' ? 1 : 0;
    $('#rx-table tbody').innerHTML = RX.map(function (r) {
      return '<tr><td><a href="' + r[1] + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a></td><td>' + esc(r[2][i]) + '</td><td style="white-space:nowrap">' + r[3] + '</td></tr>';
    }).join('');
  }

  /* ---------- Health Access Project filter ---------- */
  $$('.hcats button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.hcats button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var c = b.getAttribute('data-cat');
      $$('.vcard').forEach(function (v) { v.hidden = !(c === 'all' || v.getAttribute('data-cat') === c); });
    });
  });

  /* ---------- team (edit here) ---------- */
  var TEAM = {
    chapter: [
      { name: 'Eliana Remtulla', img: 'img/og/austin-eliana.webp', role: ['President', 'Presidenta'],
        bio: ["Eliana is a Public Health major at the University of Texas at Austin on the pre-med track. Through her studies in social determinants of health and health equity, she has developed a systems-level understanding of the barriers that prevent underserved communities from accessing care. After serving as a volunteer intern with HealthMaze and applying her clinical experience as a patient care technician during community health screenings, Eliana became committed to the organization's mission of improving healthcare access. Now serving as Volunteer Director, she is passionate about training and supporting volunteers and ensuring respectful, effective interactions with the communities HealthMaze serves. In her free time, Eliana enjoys exploring Austin, playing tennis, and reading.",
              "Eliana estudia Salud Pública en la Universidad de Texas en Austin y se prepara para medicina. Por sus estudios sobre los determinantes sociales de la salud y la equidad en salud, entiende a fondo las barreras que impiden a las comunidades desatendidas recibir atención. Después de ser pasante voluntaria con HealthMaze y usar su experiencia como técnica de atención al paciente en revisiones comunitarias, Eliana se comprometió con la misión de mejorar el acceso a la salud. Ahora es Directora de Voluntarios y le apasiona capacitar y apoyar a los voluntarios y asegurar un trato respetuoso y eficaz con las comunidades que HealthMaze atiende. En su tiempo libre, a Eliana le gusta explorar Austin, jugar tenis y leer."] },
      { name: 'Jenna Chuan', img: 'img/og/austin-jenna.webp', role: ['Project Manager', 'Gerente de Proyectos'],
        bio: ["Jenna Chuan is a junior in the Dean’s Scholars honors program at UT Austin, majoring in Biology with a minor in Business. She has volunteered in Panama and Taiwan, and in Austin she volunteers at St. David’s ER and the Micah 6 food pantry. Working at food pantries, she saw how hard it was for low-income and homeless clients to get enough food, and how many of them had no insurance or regular clinic to go to when something was wrong. As a Project Manager at HealthMaze, Jenna focuses on getting people from a screening to a free clinic. She is building Health Navigator, a tool that gives everyone screened a personal guide to low-cost clinics, coverage programs they may qualify for, and bus directions to their appointment. In her free time, she enjoys pilates, running, and baking banana bread.",
              "Jenna Chuan está en su tercer año en el programa de honores Dean’s Scholars de UT Austin, estudia Biología con una especialidad menor en Negocios. Ha sido voluntaria en Panamá y Taiwán, y en Austin es voluntaria en la sala de emergencias de St. David’s y en la despensa de comida Micah 6. Trabajando en despensas de comida, vio lo difícil que era para las personas de bajos ingresos y sin hogar conseguir suficiente comida, y cuántas no tenían seguro médico ni una clínica a la que ir cuando algo andaba mal. Como Gerente de Proyectos en HealthMaze, Jenna se enfoca en llevar a las personas de una evaluación de salud a una clínica gratis. Está creando Health Navigator, una herramienta que le da a cada persona evaluada una guía personal de clínicas de bajo costo, programas de cobertura para los que podría calificar y cómo llegar en autobús a su cita. En su tiempo libre, le gusta el pilates, correr y hornear pan de plátano."] },
      { name: 'Anuja Manjrekar', img: 'img/og/austin-anuja.webp', role: ['Public Relations Director', 'Directora de Relaciones Públicas'],
        bio: ["Anuja is a senior at UT Austin majoring in Psychology with a minor in Healthcare Reform, and is especially interested in how policy, access, and community engagement intersect in healthcare. Through her work in the Fonzo Lab, where she works closely with veteran populations in clinical neuroscience research, she has been exposed to the realities of limited healthcare access, delayed treatment, and deep-rooted distrust in medical systems. These experiences have shaped her commitment to promoting preventive care and building more transparent, community-centered approaches to health education. As PR Director, Anuja hopes to lead initiatives that bridge knowledge gaps and make health information more digestible for diverse populations. Outside of HealthMaze, she helps run Dogs Without Borders Foundation in Austin, a nonprofit rescuing and rehabilitating dogs in Central Mexico and Central Texas. In her free time, she enjoys fishing, hiking, and watching NASCAR.",
              "Anuja está en su último año en UT Austin, estudia Psicología con una especialidad menor en Reforma de Salud, y le interesa cómo se conectan las políticas, el acceso y la participación comunitaria en la salud. En el Fonzo Lab trabaja con veteranos en investigación de neurociencia clínica, y ahí ha visto de cerca el acceso limitado a la salud, los tratamientos retrasados y la desconfianza en el sistema médico. Estas experiencias la motivaron a promover la atención preventiva y una educación de salud más clara y centrada en la comunidad. Como Directora de Relaciones Públicas, Anuja quiere liderar proyectos que cierren brechas de conocimiento y hagan la información de salud más fácil de entender. Fuera de HealthMaze, ayuda a dirigir Dogs Without Borders Foundation en Austin, una organización que rescata y rehabilita perros en el centro de México y el centro de Texas. En su tiempo libre le gusta pescar, caminar en la naturaleza y ver NASCAR."] },
      { name: 'Ishan Arora', img: 'img/og/austin-ishan.webp', role: ['External Finance', 'Finanzas Externas'],
        bio: ["Ishan Arora joined HealthMaze after witnessing firsthand the inequities in healthcare faced by individuals experiencing homelessness, an experience that shaped his commitment to advocacy and service. Motivated by a desire to create meaningful change, he aims to help empower underserved populations to have a stronger voice in their healthcare decisions. Through HealthMaze, Ishan hopes to support initiatives that expand access, promote equity, and address gaps in care within the Austin community. He is especially passionate about community centered solutions and believes that future healthcare leaders must prioritize compassion, accessibility, and lasting systemic impact.",
              "Ishan Arora se unió a HealthMaze después de ver de cerca las desigualdades en la salud que viven las personas sin hogar, una experiencia que marcó su compromiso con la defensa y el servicio. Quiere ayudar a que las poblaciones desatendidas tengan más voz en sus decisiones de salud. Con HealthMaze, Ishan espera apoyar proyectos que amplíen el acceso, promuevan la equidad y cierren brechas de atención en Austin. Le apasionan las soluciones centradas en la comunidad y cree que los futuros líderes de la salud deben dar prioridad a la compasión, el acceso y el impacto duradero."] },
      { name: 'Ananya Bhutani', img: 'img/og/austin-ananya.webp', role: ['Internal Finance', 'Finanzas Internas'],
        bio: ["",
              ""] },
      { name: 'Rishab Manoj', img: 'img/og/austin-rishab.webp', role: ['External Outreach', 'Alcance Externo'],
        bio: ["Rishab is a junior Public Health major at the University of Texas at Austin pursuing the pre med track. Through his clinical experiences at Ascension Dell Seton in the Cardiac and Stroke Unit and Houston Methodist in the Liver Transplant ICU, he has seen firsthand how overwhelming the healthcare system can be for patients and families. These experiences strengthened his commitment to improving access to care and ensuring communities are informed about the resources available to them. His passion for service came from experience in India, Rishab helped raise funds to provide scholarships for students from underprivileged backgrounds and contributed to the development of a library to support long term educational growth. Working with rural communities deepened his interest in addressing gaps in both healthcare and education. Outside of academics and leadership, he enjoys playing soccer and basketball, and exploring coffee shops around Austin.",
              "Rishab está en su tercer año de Salud Pública en la Universidad de Texas en Austin y se prepara para medicina. Por su experiencia clínica en la Unidad Cardiaca y de Derrames de Ascension Dell Seton y en la UCI de Trasplante de Hígado de Houston Methodist, ha visto de cerca lo abrumador que puede ser el sistema de salud para pacientes y familias. Estas experiencias reforzaron su compromiso de mejorar el acceso a la atención y de asegurar que las comunidades conozcan los recursos que tienen. Su pasión por servir empezó en India, donde Rishab ayudó a recaudar fondos para becas de estudiantes de bajos recursos y a construir una biblioteca. Trabajar con comunidades rurales aumentó su interés en cerrar brechas en salud y educación. Fuera de la escuela, le gusta jugar fútbol y básquetbol y conocer cafeterías de Austin."] },
      { name: 'Courtney Yee', img: 'img/og/austin-courtney.webp', role: ['Internal Outreach', 'Alcance Interno'],
        bio: ["",
              ""] }
    ],
    founders: [
      { name: 'Rhea Lazar', img: 'img/og/team-rhea.webp', role: ['Founder', 'Fundadora'],
        bio: ["Rhea Lazar is a passionate biology major at the University of Texas at Austin with a deep commitment to revolutionizing healthcare accessibility through the intersection of art and medicine. Originally from Seattle, Washington, and having grown up in both Abu Dhabi and Katy, Texas, Rhea brings a unique perspective shaped by her diverse upbringing. After moving to Austin, her volunteer work at local food banks revealed a critical challenge—many individuals were unaware of nearby clinics offering low-cost services or lacked the knowledge to take the first step toward treatment. This realization sparked the creation of HealthMaze, a nonprofit dedicated to bridging the healthcare information gap and empowering underserved communities with the tools to access quality care. When she's not immersed in her classes, or lab work, Rhea finds joy in expressing her creativity through drawing or staying active on the tennis court.",
              "Rhea Lazar estudia biología en la Universidad de Texas en Austin y tiene un gran compromiso con el acceso a la salud a través del arte y la medicina. Nació en Seattle, Washington, y creció en Abu Dabi y en Katy, Texas, lo que le dio una perspectiva diversa. Al mudarse a Austin, como voluntaria en bancos de comida notó un problema serio: muchas personas no conocían las clínicas de bajo costo cerca de ellas ni sabían cómo dar el primer paso para recibir tratamiento. Así nació HealthMaze, una organización sin fines de lucro dedicada a cerrar la brecha de información de salud y dar a las comunidades desatendidas las herramientas para recibir atención de calidad. Cuando no está en clase o en el laboratorio, a Rhea le gusta dibujar y jugar tenis."] },
      { name: 'Neha Arvinth', img: 'img/og/team-neha.webp', role: ['Vice President', 'Vicepresidenta'],
        bio: ["Neha Arvinth is a Neuroscience major at the University of Texas at Austin, motivated by her passion for advancing healthcare accessibility. Having volunteered at the Salvation Army and in the emergency surgical unit in a rural area in India, she has developed valuable skills in patient care. Neha's dedication to community service shines through her work to support vulnerable populations. With a strong interest in health education and equity, she actively seeks to address disparities in healthcare access. Outside of her academic and leadership roles, she enjoys traveling and learning about new cultures and food.",
              "Neha Arvinth estudia Neurociencia en la Universidad de Texas en Austin y le motiva mejorar el acceso a la salud. Fue voluntaria en el Salvation Army y en la unidad quirúrgica de emergencias de una zona rural en India, donde desarrolló habilidades de atención al paciente. Su dedicación al servicio comunitario se ve en su trabajo con poblaciones vulnerables. Le interesan mucho la educación y la equidad en salud, y trabaja para reducir las desigualdades en el acceso. Fuera de la escuela, le gusta viajar y conocer nuevas culturas y comidas."] },
      { name: 'Kate Seno', img: 'img/og/team-kate.webp', role: ['Public Relations Director', 'Directora de Relaciones Públicas'],
        bio: ["Kate is a Neuroscience major at the University of Texas on the pre-med track. After volunteering with unhoused communities in Austin and facing her own challenges in navigating the healthcare system, Kate sought to address the financial and logistical barriers to healthcare that many face. She joined Health Maze to advocate for underserved populations and work toward more equitable healthcare access. In her free time, Kate enjoys playing volleyball, exploring photography, and diving into creative design projects!",
              "Kate estudia Neurociencia en la Universidad de Texas y se prepara para medicina. Después de ser voluntaria con personas sin hogar en Austin y de vivir sus propias dificultades con el sistema de salud, Kate decidió enfrentar las barreras económicas y prácticas que muchas personas tienen para recibir atención. Se unió a HealthMaze para defender a las poblaciones desatendidas y trabajar por un acceso más justo a la salud. En su tiempo libre, a Kate le gusta jugar voleibol, la fotografía y los proyectos de diseño."] }
    ],
    interns: [
      [['Outreach Interns', 'Pasantes de alcance'], ['Emilia Rodriguez', 'Hareem Tariq', 'Rishab Manoj']],
      [['Finance Interns', 'Pasantes de finanzas'], ['Kiymiya Lamea', 'Emaan Chhatriwala', 'Ishan Arora']],
      [['Public Relations Interns', 'Pasantes de relaciones públicas'], ['Argentina Mora', 'Anuja Manjrekar']],
      [['Volunteer Interns', 'Pasantes de voluntariado'], ['Kristen Cobio', 'Amy', 'Puneet Singh', 'Eliana Remtulla']]
    ]
  };
  function renderTeam() {
    var i = lang === 'es' ? 1 : 0;
    var card = function (p) {
      return '<div class="person"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"><h3>' + esc(p.name) + '</h3><p class="role">' + esc(p.role[i]) + '</p>' +
        (p.bio[i] ? '<p>' + esc(p.bio[i]) + '</p>' : '') + '</div>';
    };
    $('#team-chapter').innerHTML = TEAM.chapter.map(card).join('');
    var f = TEAM.founders;
    $('#team-founders').innerHTML = '<div class="founder person"><img src="' + f[0].img + '" alt="' + esc(f[0].name) + '" loading="lazy"><h4>' + esc(f[0].name) + '</h4><p class="role">' + esc(f[0].role[i]) + '</p><p>' + esc(f[0].bio[i]) + '</p></div>' +
      '<div class="duo2">' + f.slice(1).map(function (p) { return '<div class="person"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"><h3>' + esc(p.name) + '</h3><p class="role">' + esc(p.role[i]) + '</p><p>' + esc(p.bio[i]) + '</p></div>'; }).join('') + '</div>';
    $('#interns').innerHTML = TEAM.interns.map(function (g) {
      return '<div class="center"><h2>' + esc(g[0][i]) + '</h2><ul class="plain">' + g[1].map(function (n) { return '<li>- ' + esc(n) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  }

  /* ---------- contact forms (FormSubmit, free; first message triggers a one-time confirm email) ---------- */
  $$('.cform').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var box = f.querySelector('.formmsg');
      if (f._honey.value) return;
      box.hidden = false; box.style.background = 'var(--gray)'; box.textContent = t().sending;
      fetch('https://formsubmit.co/ajax/healthmaze23@gmail.com', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify((function () { var o = { name: f.first.value + ' ' + f.last.value, _subject: 'New message from health-maze.org', _template: 'table' }; Array.prototype.forEach.call(f.elements, function (el) { if (el.name && el.name !== '_honey' && el.name !== 'first' && el.name !== 'last') o[el.name] = el.value; }); return o; })())
      }).then(function (r) { if (!r.ok) throw 0; return r.json(); })
        .then(function (j) { if (!j || String(j.success) !== 'true') throw 0; box.style.background = 'var(--ok-soft)'; box.textContent = t().sent; f.reset(); })
        .catch(function () { box.style.background = 'var(--warn-soft)'; box.textContent = t().notSent; });
    });
  });

  /* copy buttons */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]'); if (!b) return;
    var done = function () { var o = b.innerHTML; b.textContent = t().copied; setTimeout(function () { b.innerHTML = o; }, 1500); };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, function () {}); } catch (err) {}
  });


  /* ---------- live directory from Google Sheets ----------
     The "HealthMaze Website Directory" sheet (tabs: Clinics, Food) is read on every visit.
     If it can't be reached, the site keeps the built-in list from data.js. */
  var SHEET_ID = '1qcjdJSaLs4KEw5qpea1ep-OM6Gxox2VmdKYYqDJJjeU';
  function parseCSV(text) {
    var rows = [], row = [], f = '', q = false, i, ch;
    for (i = 0; i < text.length; i++) {
      ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { row.push(f); f = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += ch;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    var head = (rows.shift() || []).map(function (h) { return h.trim(); });
    return rows.filter(function (r) { return r.some(function (v) { return v.trim() !== ''; }); }).map(function (r) {
      var o = {}; head.forEach(function (h, k) { o[h] = (r[k] || '').trim(); }); return o;
    });
  }
  var yes = function (v) { return /^(yes|y|true|si|sí|1)$/i.test(v || ''); };
  var num = function (v) { var n = parseFloat(v); return isNaN(n) ? null : n; };
  var slugify = function (t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60); };
  function keys(v, map) {
    return (v || '').split(',').map(function (x) { return map[x.trim().toLowerCase()]; }).filter(Boolean);
  }
  var PAYK = { 'no insurance': 'uninsured', 'sliding fee': 'sliding', 'free': 'free', 'medicaid': 'medicaid', 'chip': 'chip', 'medicare': 'medicare', 'map': 'map', 'private insurance': 'private' };
  var SVCK = { 'primary care': 'primary', 'kids': 'pediatrics', "women's health": 'womens', 'women’s health': 'womens', 'dental': 'dental', 'mental health': 'behavioral', 'pharmacy': 'pharmacy', 'vaccines': 'vaccines', 'vision': 'vision', 'specialty care': 'specialty' };
  var FOODK = { 'groceries': 'pantry', 'hot meals': 'hot-meals', 'snap help': 'snap-help', 'showers / hygiene': 'hygiene', 'delivery': 'groceries-delivery' };
  function details(v) {
    var out = [], cur = null;
    (v || '').split(/\r?\n/).forEach(function (line) {
      var m = /^\s*\[(.+)\]\s*$/.exec(line);
      if (m) { cur = [m[1].trim(), []]; out.push(cur); }
      else if (cur) cur[1].push(line);
      else if (line.trim()) { cur = ['Details', [line]]; out.push(cur); }
    });
    return out.map(function (s) { return [s[0], s[1].join('\n').trim()]; }).filter(function (s) { return s[1]; });
  }
  function sheetClinics(rows) {
    return rows.filter(function (r) { return r['Name'] && yes(r['Show on site']); }).map(function (r, i) {
      var io = num(r['Insured list order']);
      return { id: r['ID'] || slugify(r['Name']), name: r['Name'], ogTitle: r['Name'], insTitle: r['Name on insured list'] || null,
        uninsuredList: yes(r['On out-of-pocket list']), insuredList: yes(r['On insured list']), order: i, insOrder: io == null ? null : io - 1,
        area: r['Area'], address: r['Address'], lat: num(r['Latitude']), lng: num(r['Longitude']), phone: r['Phone'], website: r['Website'],
        pay: keys(r['Payment types'], PAYK), services: keys(r['Services'], SVCK), spanish: yes(r['Spanish spoken']), walkin: yes(r['Walk-ins']),
        og: details(r['Details']), img: r['Photo'] ? 'img/clinics/' + r['Photo'] : '', verify: false };
    });
  }
  function sheetFood(rows) {
    return rows.filter(function (r) { return r['Name'] && yes(r['Show on site']); }).map(function (r) {
      return { id: r['ID'] || slugify(r['Name']), name: r['Name'], org: r['Organization'] || null, area: r['Area'], address: r['Address'],
        lat: num(r['Latitude']), lng: num(r['Longitude']), phone: r['Phone'], website: r['Website'], hours: r['Hours'], hours_es: r['Hours (Spanish)'] || r['Hours'],
        note: r['Note'], note_es: r['Note (Spanish)'] || r['Note'], type: keys(r['Type'], FOODK), spanish: yes(r['Spanish spoken']), verify: false };
    });
  }
  function loadSheet() {
    if (!SHEET_ID || !window.fetch) return;
    var url = function (tab) { return 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?tqx=out:csv&headers=1&sheet=' + encodeURIComponent(tab); };
    var get = function (tab) { return fetch(url(tab), { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }); };
    Promise.all([get('Clinics'), get('Food')]).then(function (t2) {
      if (/^\s*</.test(t2[0])) throw new Error('not shared');
      var c = sheetClinics(parseCSV(t2[0])), f = sheetFood(parseCSV(t2[1]));
      if (c.length < 5 || !c.every(function (x) { return x.og && x.lat != null; }) && c.filter(function (x) { return x.lat != null; }).length < c.length / 2) throw new Error('sheet looks wrong');
      CLINICS = window.HM_CLINICS = c; if (f.length) FOOD = window.HM_FOOD = f;
      window.HM_SOURCE = 'sheet';
      renderAll();
      var h = location.hash || '';
      if (h.indexOf('#clinic-') === 0) renderClinic(h.slice(8));
    }).catch(function (e) { window.HM_SOURCE = 'built-in (' + e.message + ')'; });
  }

  function renderAll() {
    renderHomeChips(); renderCare(); renderFood(); renderSchedule(); renderRisk(); renderVax(); renderRx(); renderTeam();
    $$('[data-count="clinics"]').forEach(function (s) { s.textContent = CLINICS.length; });
    $$('[data-count="food"]').forEach(function (s) { s.textContent = FOOD.length; });
  }

  /* filters start collapsed on phones */
  if (window.matchMedia('(max-width:900px)').matches) { $$('.filters').forEach(function (d) { d.open = false; }); }

  var saved = null;
  try { saved = localStorage.getItem('hm-lang'); } catch (e) {}
  var qlang = /[?&]lang=(es|en)/.exec(location.search);
  setLang(qlang ? qlang[1] : saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en'), false);
  route();
  loadSheet();
})();
