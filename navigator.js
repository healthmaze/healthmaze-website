/* Health Navigator (MVP) for health-maze.org
   Ported from the Health Navigator tablet prototype (Sept 24, 2026).
   Nothing is saved. The only thing kept on the device is which screening site a tablet is set to (hm_site).
   Clinics come from the same list as Find a Clinic (window.HM_CLINICS, or the Google Sheet once it loads).
   Language follows the site's EN/ES switch. */
(function () {
  var root = document.getElementById('hn');
  if (!root) return;

  /* Screening sites from the HealthMaze Members calendar (Oct 2026). addr is the start point for bus directions. */
  var SITES = [
    { id: '', name: { en: 'No site (website use)', es: 'Sin sitio (uso en la web)' }, addr: '' },
    { id: 'socks', name: { en: 'Socks for the Sole (CAVA parking lot on Guadalupe)', es: 'Socks for the Sole (estacionamiento de CAVA en Guadalupe)' }, addr: '2426 Guadalupe St, Austin, TX 78705' },
    { id: 'sunrise', name: { en: 'Sunrise Homeless Navigation Center', es: 'Sunrise Homeless Navigation Center' }, addr: '4430 Menchaca Rd, Austin, TX 78745' },
    { id: 'ffh', name: { en: 'Foundation for the Homeless', es: 'Foundation for the Homeless' }, addr: '1300 Lavaca St, Austin, TX 78701' },
    { id: 'trinity', name: { en: 'Trinity Center', es: 'Trinity Center' }, addr: '304 E 7th St, Austin, TX 78701' }
  ];

  /* MAP monthly income limits at 200% FPL (Central Health, FY2026). Update every March 1. */
  var MAP_LIMIT = { 1: 2660, 2: 3607.07, 3: 4554, 4: 5500 };
  function limit200(n) { n = n || 1; return MAP_LIMIT[n] || (5500 + (n - 4) * 946.5); }

  /* ZIP to county. PROTOTYPE LIST, needs checking before launch. */
  var TRAVIS = ['78701', '78702', '78703', '78704', '78705', '78712', '78719', '78721', '78722', '78723', '78724', '78725',
    '78727', '78731', '78741', '78742', '78744', '78745', '78746', '78751', '78752', '78753', '78754', '78756', '78757', '78758', '78617', '78653'];
  function zipStatus(z) {
    if (!z || z.length !== 5) return 'unknown';
    if (TRAVIS.indexOf(z) >= 0) return 'yes';
    if (/^78[67]/.test(z)) return 'maybe';
    return 'no';
  }

  var T = {
    en: {
      back: 'Back', skip: 'Skip', next: 'Next', start: 'Start', make: 'Make my guide', seeMore: 'See what else I might qualify for',
      yes: 'Yes', no: 'No',
      welcomeQ: 'Find free and low-cost help near you',
      welcomeHint: 'Only takes a minute. Every question is optional. No personal information is saved.',
      settings: 'Volunteer settings', siteLabel: 'This tablet is at:',
      programsQ: 'Are you in any of these programs?', programsHint: 'Tap all that apply.',
      p_medicaid: 'Medicaid', p_medicare: 'Medicare', p_other: 'Other health insurance', p_snap: 'SNAP (food stamps)', p_wic: 'WIC', p_ssi: 'SSI', p_none: 'None of these',
      householdQ: 'How many people live with you?', householdHint: 'Count yourself, your spouse, and your kids.',
      groupsQ: 'Is anyone in your household:', g_kids: 'Under 18', g_preg: 'Pregnant', g_senior: '65 or older',
      zipQ: "What's your ZIP code?", zipHint: 'This helps us find clinics and buses near you.',
      incomeQ: 'About how much money came into your household in the last 30 days?',
      incomeHint: 'For a household of {n}. Count pay from work, benefits, and any other money.',
      inc_zero: 'No money', inc_low: 'Up to {a}', inc_mid: '{a} to {b}', inc_high: 'More than {b}',
      housingQ: 'Are you staying at a shelter or getting help from a housing program?',
      clinicQ: 'Would you like help finding a low-cost clinic?',
      numbersQ: "Today's numbers", numbersHint: "We'll put these on your guide so you can show the clinic.",
      bp: 'Blood pressure', glucose: 'Glucose', ate: 'Ate in the last 2 hours',
      guideTitle: 'Your health guide', fromHM: 'Health Navigator by HealthMaze',
      numBox: 'Your numbers from today', numNote: 'Show this to the clinic at your visit.', ateYes: 'Ate in the last 2 hours',
      startHere: 'Start here',
      id_t: 'Need a photo ID?',
      id_b: "To sign up for MAP, you can use an Austin Public Library card with your photo, a Service Point Card, or an ID or passport from another country. If you're under 25 and don't have a home, you may be able to get a free Texas ID. Ask your shelter or caseworker.",
      map_t: 'Get free care with MAP',
      map_b: 'You may be able to get free doctor visits, dental care, and medicine through MAP from Central Health.',
      map_maybe: 'This is for people who live in Travis County.',
      map_imm: "Anyone in Travis County without insurance can apply, no matter their immigration status. It won't affect a green card.",
      map_do: 'Call 512-978-8130, option 1 (Monday to Friday, 8 am to 5 pm).',
      map_bring: 'Bring a photo ID, something that shows you live in Travis County, and proof of income from the last 30 days. No income or no lease? Ask about their forms for that.',
      other_t: 'Find care in your county',
      other_b: 'MAP is only for people who live in Travis County. Call 2-1-1 to find free or low-cost care where you live.',
      mkt_t: 'Look at health insurance plans',
      mkt_b: 'Your income may be above the MAP limit. You can shop for health insurance at HealthCare.gov from November 1, 2026 to January 15, 2027. Pick a plan by December 15 to be covered starting January 1.',
      medicare_b: "If you're 65 or older, you may be able to get Medicare. Call 1-800-633-4227.",
      kids_t: 'Health coverage for kids and pregnancy',
      kids_b: 'Your kids may be able to get free or low-cost health insurance through Medicaid or CHIP.',
      preg_b: "If you're pregnant, you may be able to get Medicaid for your pregnancy.",
      benefits_do: 'Apply at YourTexasBenefits.com, or call 2-1-1 and choose option 2.',
      food_t: 'Help with groceries',
      snap_b: 'You may be able to get money for groceries every month through SNAP.',
      wic_b: "If you're pregnant or have a child under 5, WIC can help with healthy food. Visit TexasWIC.org.",
      food_find: 'See food pantries and free meals near you',
      bus_t: 'Pay less for the bus',
      bus_shelter: "Ask your caseworker about a free 2-year CapMetro bus pass for people getting help from Austin's housing programs.",
      bus_b: "You may be able to ride for less with Equifare. Get a CapMetro Reloadable Fare Card at the Transit Store (1705 Guadalupe St.) or download the Umo app, then apply on CapMetro's website.",
      bus_proof_have: 'Your {p} card or letter can be your proof.',
      bus_proof: 'Bring proof of a program like SNAP or Medicaid, or a recent check stub.',
      mapLabel: 'Map of your clinics', you: 'You', yourZip: 'Your ZIP code',
      clinics_t: 'Your clinics', clinics_bring: 'Bring your numbers from today.', clinics_more: 'See all clinics on the map',
      cost_free: 'Free', cost_map: 'Free with MAP', cost_sliding: 'Price based on your income', cost_uninsured: 'For people without insurance',
      cost_medicaid: 'Takes Medicaid', cost_medicare: 'Takes Medicare', cost_private: 'Takes private insurance',
      spanish: 'Spanish spoken', away: '{m} miles from {z}', details: 'Clinic details',
      ride_t: 'Get there by bus', ride_b: 'Scan the code or tap the button for bus directions to {c}.', ride_btn: 'Open bus directions',
      med_t: 'Pay less for medicine',
      med_b: 'Ask the clinic if they have their own pharmacy, since clinic pharmacies often cost less. Ask for the generic version of your medicine. A free discount card like GoodRx can also lower the price at most pharmacies.',
      bills_t: 'Pay less on utility bills',
      bills_b: 'If you have an Austin Energy or City of Austin water account, you may get a discount through the Customer Assistance Program. Signing up for SNAP, Medicaid, or MAP usually turns it on automatically. Questions? Call 512-494-9400.',
      mind_t: 'Someone to talk to',
      mind_b: 'Integral Care helps people in Austin with stress, sadness, drug or alcohol use, and more, no matter what you can pay. Call 512-472-4357 any time, day or night.',
      mind_988: 'In a crisis, call or text 988.',
      keep: 'Scan to keep this guide on your phone',
      print: 'Print', nextPerson: 'Done, next person', startOver: 'Start over',
      fine: 'HealthMaze is not a medical provider. This guide is general information, not medical advice. Questions? Email healthmaze23@gmail.com.'
    },
    es: {
      back: 'Atrás', skip: 'Saltar', next: 'Siguiente', start: 'Empezar', make: 'Crear mi guía', seeMore: 'Ver para qué más podría calificar',
      yes: 'Sí', no: 'No',
      welcomeQ: 'Encuentre ayuda gratis o de bajo costo cerca de usted',
      welcomeHint: 'Solo toma un minuto. Todas las preguntas son opcionales. No se guarda ninguna información personal.',
      settings: 'Ajustes para voluntarios', siteLabel: 'Esta tableta está en:',
      programsQ: '¿Está inscrito en alguno de estos programas?', programsHint: 'Toque todos los que apliquen.',
      p_medicaid: 'Medicaid', p_medicare: 'Medicare', p_other: 'Otro seguro médico', p_snap: 'SNAP (estampillas de comida)', p_wic: 'WIC', p_ssi: 'SSI', p_none: 'Ninguno',
      householdQ: '¿Cuántas personas viven con usted?', householdHint: 'Cuéntese a usted, a su pareja y a sus hijos.',
      groupsQ: '¿Alguien en su hogar:', g_kids: 'Es menor de 18 años', g_preg: 'Está embarazada', g_senior: 'Tiene 65 años o más',
      zipQ: '¿Cuál es su código postal?', zipHint: 'Nos ayuda a encontrar clínicas y autobuses cerca de usted.',
      incomeQ: 'Más o menos, ¿cuánto dinero entró a su hogar en los últimos 30 días?',
      incomeHint: 'Para un hogar de {n}. Cuente el pago del trabajo, beneficios y cualquier otro dinero.',
      inc_zero: 'Nada', inc_low: 'Hasta {a}', inc_mid: 'De {a} a {b}', inc_high: 'Más de {b}',
      housingQ: '¿Se está quedando en un albergue o recibe ayuda de un programa de vivienda?',
      clinicQ: '¿Le gustaría ayuda para encontrar una clínica de bajo costo?',
      numbersQ: 'Sus números de hoy', numbersHint: 'Los pondremos en su guía para que se los pueda mostrar a la clínica.',
      bp: 'Presión arterial', glucose: 'Glucosa', ate: 'Comió en las últimas 2 horas',
      guideTitle: 'Su guía de salud', fromHM: 'Health Navigator de HealthMaze',
      numBox: 'Sus números de hoy', numNote: 'Muéstrele esto a la clínica en su cita.', ateYes: 'Comió en las últimas 2 horas',
      startHere: 'Empiece aquí',
      id_t: '¿Necesita una identificación con foto?',
      id_b: 'Para inscribirse en MAP, puede usar una tarjeta de la Biblioteca Pública de Austin con su foto, una tarjeta Service Point, o una identificación o pasaporte de otro país. Si tiene menos de 25 años y no tiene hogar, es posible que pueda obtener una identificación de Texas gratis. Pregunte en su albergue o a su trabajador social.',
      map_t: 'Reciba atención gratis con MAP',
      map_b: 'Es posible que pueda recibir consultas médicas, atención dental y medicinas gratis por medio de MAP de Central Health.',
      map_maybe: 'Esto es para personas que viven en el condado de Travis.',
      map_imm: 'Cualquier persona sin seguro en el condado de Travis puede solicitarlo, sin importar su estatus migratorio. No afecta su trámite de green card.',
      map_do: 'Llame al 512-978-8130, opción 1 (lunes a viernes, 8 am a 5 pm).',
      map_bring: 'Traiga una identificación con foto, algo que muestre que vive en el condado de Travis y comprobante de ingresos de los últimos 30 días. ¿No tiene ingresos o contrato de renta? Pregunte por los formularios para eso.',
      other_t: 'Encuentre atención en su condado',
      other_b: 'MAP es solo para personas que viven en el condado de Travis. Llame al 2-1-1 para encontrar atención gratis o de bajo costo donde vive.',
      mkt_t: 'Revise planes de seguro médico',
      mkt_b: 'Es posible que sus ingresos estén por encima del límite de MAP. Puede buscar seguro médico en HealthCare.gov del 1 de noviembre de 2026 al 15 de enero de 2027. Escoja un plan antes del 15 de diciembre para tener cobertura desde el 1 de enero.',
      medicare_b: 'Si tiene 65 años o más, es posible que pueda recibir Medicare. Llame al 1-800-633-4227.',
      kids_t: 'Seguro médico para niños y embarazo',
      kids_b: 'Es posible que sus hijos puedan recibir seguro médico gratis o de bajo costo por medio de Medicaid o CHIP.',
      preg_b: 'Si está embarazada, es posible que pueda recibir Medicaid durante su embarazo.',
      benefits_do: 'Solicítelo en YourTexasBenefits.com, o llame al 2-1-1 y escoja la opción 2.',
      food_t: 'Ayuda para comprar comida',
      snap_b: 'Es posible que pueda recibir dinero para comida cada mes por medio de SNAP.',
      wic_b: 'Si está embarazada o tiene un niño menor de 5 años, WIC puede ayudarle con comida saludable. Visite TexasWIC.org.',
      food_find: 'Vea despensas de comida y comidas gratis cerca de usted',
      bus_t: 'Pague menos por el autobús',
      bus_shelter: 'Pregúntele a su trabajador social por un pase gratis de CapMetro por 2 años para personas que reciben ayuda de los programas de vivienda de Austin.',
      bus_b: 'Es posible que pueda viajar por menos con Equifare. Consiga una tarjeta recargable de CapMetro en la Transit Store (1705 Guadalupe St.) o descargue la app Umo, y luego solicítelo en el sitio web de CapMetro.',
      bus_proof_have: 'Su tarjeta o carta de {p} puede servir como comprobante.',
      bus_proof: 'Traiga comprobante de un programa como SNAP o Medicaid, o un talón de pago reciente.',
      mapLabel: 'Mapa de sus clínicas', you: 'Usted', yourZip: 'Su código postal',
      clinics_t: 'Sus clínicas', clinics_bring: 'Traiga sus números de hoy.', clinics_more: 'Ver todas las clínicas en el mapa',
      cost_free: 'Gratis', cost_map: 'Gratis con MAP', cost_sliding: 'Precio según sus ingresos', cost_uninsured: 'Para personas sin seguro',
      cost_medicaid: 'Acepta Medicaid', cost_medicare: 'Acepta Medicare', cost_private: 'Acepta seguro privado',
      spanish: 'Hablan español', away: 'A {m} millas de {z}', details: 'Detalles de la clínica',
      ride_t: 'Cómo llegar en autobús', ride_b: 'Escanee el código o toque el botón para ver cómo llegar en autobús a {c}.', ride_btn: 'Ver cómo llegar',
      med_t: 'Pague menos por medicinas',
      med_b: 'Pregunte en la clínica si tienen su propia farmacia, porque las farmacias de las clínicas muchas veces cobran menos. Pida la versión genérica de su medicina. Una tarjeta de descuento gratis como GoodRx también puede bajar el precio en la mayoría de las farmacias.',
      bills_t: 'Pague menos en sus facturas de luz y agua',
      bills_b: 'Si tiene una cuenta de Austin Energy o de agua de la Ciudad de Austin, es posible que reciba un descuento por medio del Customer Assistance Program. Inscribirse en SNAP, Medicaid o MAP normalmente lo activa automáticamente. ¿Preguntas? Llame al 512-494-9400.',
      mind_t: 'Alguien con quien hablar',
      mind_b: 'Integral Care ayuda a personas en Austin con estrés, tristeza, uso de drogas o alcohol y más, sin importar lo que pueda pagar. Llame al 512-472-4357 a cualquier hora, de día o de noche.',
      mind_988: 'En una crisis, llame o mande un texto al 988.',
      keep: 'Escanee para guardar esta guía en su teléfono',
      print: 'Imprimir', nextPerson: 'Listo, siguiente persona', startOver: 'Empezar de nuevo',
      fine: 'HealthMaze no es un proveedor médico. Esta guía es información general, no consejo médico. ¿Preguntas? Escriba a healthmaze23@gmail.com.'
    }
  };

  /* ---------------- state ---------------- */
  var lang = document.documentElement.lang === 'es' ? 'es' : 'en';
  var mode = 'survey'; // or 'view' when opened from a saved guide link
  var stepIdx = 0, showSettings = false, siteId = '';
  try { siteId = localStorage.getItem('hm_site') || ''; } catch (e) {}
  function blank() {
    return { programs: [], size: null, groups: [], zip: '', income: null, shelter: null, clinic: null,
      bps: '', bpd: '', glu: '', ate: false, date: new Date().toISOString().slice(0, 10) };
  }
  var A = blank();
  var mapClinics = [];

  function t(key, vars) {
    var s = T[lang][key] != null ? T[lang][key] : (T.en[key] != null ? T.en[key] : key);
    if (vars) for (var k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(x) { return '$' + Math.round(x).toLocaleString('en-US'); }
  function site() { return SITES.filter(function (s) { return s.id === siteId; })[0] || SITES[0]; }
  function has(arr, v) { return arr.indexOf(v) >= 0; }
  function $(sel) { return root.querySelector(sel); }

  /* ---------------- steps ---------------- */
  function steps() {
    var s = ['welcome', 'programs', 'household', 'zip'];
    if (!has(A.programs, 'medicaid')) s.push('income');
    s.push('housing', 'clinic');
    if (A.clinic === true) s.push('numbers');
    s.push('guide');
    return s;
  }
  function current() { return steps()[stepIdx]; }
  function go(delta) {
    stepIdx = Math.max(0, Math.min(steps().length - 1, stepIdx + delta));
    render(true);
  }
  function skipCurrent() {
    var k = current();
    if (k === 'programs') A.programs = [];
    if (k === 'household') { A.size = null; A.groups = []; }
    if (k === 'zip') A.zip = '';
    if (k === 'income') A.income = null;
    if (k === 'housing') A.shelter = null;
    if (k === 'clinic') A.clinic = null;
    if (k === 'numbers') { A.bps = ''; A.bpd = ''; A.glu = ''; A.ate = false; }
    go(1);
  }
  function reset() {
    A = blank(); stepIdx = 0; showSettings = false;
    if (mode === 'view') { mode = 'survey'; history.replaceState(null, '', location.pathname + location.search + '#health-navigator'); }
    render(true);
  }

  /* ---------------- screens ---------------- */
  function tile(label, pressed, attrs) {
    return '<button type="button" class="hn-opt" aria-pressed="' + pressed + '" ' + attrs + '><span class="hn-tick"></span><span>' + label + '</span></button>';
  }
  function viewWelcome() {
    var opts = SITES.map(function (s) { return '<option value="' + s.id + '"' + (s.id === siteId ? ' selected' : '') + '>' + esc(s.name[lang]) + '</option>'; }).join('');
    return '<div class="hn-welcome"><p class="hn-brand">Health Navigator <span>by HealthMaze</span></p>' +
      '<h2 class="hn-q">' + t('welcomeQ') + '</h2><p class="hn-hint">' + t('welcomeHint') + '</p>' +
      '<button type="button" class="hn-settings-link" data-act="settings">' + t('settings') + '</button>' +
      (showSettings ? '<div class="hn-settings"><label for="hn-site">' + t('siteLabel') + '</label><select id="hn-site">' + opts + '</select></div>' : '') +
      '</div>';
  }
  function viewPrograms() {
    var keys = ['medicaid', 'medicare', 'other', 'snap', 'wic', 'ssi', 'none'];
    return '<h2 class="hn-q">' + t('programsQ') + '</h2><p class="hn-hint">' + t('programsHint') + '</p>' +
      '<div class="hn-opts">' + keys.map(function (k) { return tile(t('p_' + k), has(A.programs, k), 'data-prog="' + k + '"'); }).join('') + '</div>' +
      '<p class="hn-cue" aria-hidden="true">' + t('seeMore') + ' <span>→</span></p>';
  }
  function viewHousehold() {
    return '<h2 class="hn-q">' + t('householdQ') + '</h2><p class="hn-hint">' + t('householdHint') + '</p>' +
      '<div class="hn-opts hn-row">' + [1, 2, 3, 4, 5, 6].map(function (n) { return tile(n === 6 ? '6+' : String(n), A.size === n, 'data-size="' + n + '"'); }).join('') + '</div>' +
      '<p class="hn-sub">' + t('groupsQ') + '</p>' +
      '<div class="hn-opts">' + ['kids', 'preg', 'senior'].map(function (g) { return tile(t('g_' + g), has(A.groups, g), 'data-group="' + g + '"'); }).join('') + '</div>';
  }
  function viewZip() {
    return '<h2 class="hn-q">' + t('zipQ') + '</h2><p class="hn-hint">' + t('zipHint') + '</p>' +
      '<div class="hn-field"><input class="hn-big" id="hn-zip" data-f="zip" inputmode="numeric" autocomplete="off" maxlength="5" placeholder="78701" value="' + esc(A.zip) + '" aria-label="' + esc(t('zipQ')) + '"></div>';
  }
  function viewIncome() {
    var n = A.size || 1, b = limit200(n), a = b / 2;
    var rows = [['zero', t('inc_zero')], ['low', t('inc_low', { a: money(a) })], ['mid', t('inc_mid', { a: money(a), b: money(b) })], ['high', t('inc_high', { b: money(b) })]];
    return '<h2 class="hn-q">' + t('incomeQ') + '</h2><p class="hn-hint">' + t('incomeHint', { n: A.size === 6 ? '6+' : n }) + '</p>' +
      '<div class="hn-opts">' + rows.map(function (r) { return tile(r[1], A.income === r[0], 'data-income="' + r[0] + '"'); }).join('') + '</div>';
  }
  function viewYesNo(q, field) {
    return '<h2 class="hn-q">' + t(q) + '</h2><div class="hn-opts">' +
      tile(t('yes'), A[field] === true, 'data-yn="' + field + '" data-v="1"') + tile(t('no'), A[field] === false, 'data-yn="' + field + '" data-v="0"') + '</div>';
  }
  function viewNumbers() {
    return '<h2 class="hn-q">' + t('numbersQ') + '</h2><p class="hn-hint">' + t('numbersHint') + '</p>' +
      '<div class="hn-field"><label>' + t('bp') + '</label><div class="hn-bp">' +
      '<input class="hn-big" data-f="bps" inputmode="numeric" maxlength="3" placeholder="120" value="' + esc(A.bps) + '" aria-label="' + esc(t('bp')) + ' 1">' +
      '<span class="hn-slash">/</span><input class="hn-big" data-f="bpd" inputmode="numeric" maxlength="3" placeholder="80" value="' + esc(A.bpd) + '" aria-label="' + esc(t('bp')) + ' 2"></div></div>' +
      '<div class="hn-field"><label for="hn-glu">' + t('glucose') + '</label><div class="hn-bp"><input class="hn-big" id="hn-glu" data-f="glu" inputmode="numeric" maxlength="3" placeholder="100" value="' + esc(A.glu) + '"><span class="hn-unit">mg/dL</span></div></div>' +
      '<div class="hn-opts" style="max-width:460px">' + tile(t('ate'), A.ate, 'data-ate="1"') + '</div>';
  }

  /* ---------------- clinics: the same list as Find a Clinic ---------------- */
  function miles(a, b) {
    var R = 3958.8, r = Math.PI / 180, dLa = (b[0] - a[0]) * r, dLo = (b[1] - a[1]) * r;
    var x = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function pickClinics() {
    var P = A.programs, all = (window.HM_CLINICS || []).filter(function (c) { return c.address && c.lat != null; });
    var ins = has(P, 'medicaid') ? 'medicaid' : has(P, 'medicare') ? 'medicare' : has(P, 'other') ? 'private' : null;
    var origin = (window.HM_ZIPS || {})[A.zip] || null;
    var list = all.filter(function (c) { return ins ? has(c.pay, ins) : (has(c.pay, 'free') || has(c.pay, 'map') || has(c.pay, 'sliding') || has(c.pay, 'uninsured')); })
      .map(function (c) {
        var tier = ins ? 0 : has(c.pay, 'free') ? 0 : has(c.pay, 'map') ? 1 : has(c.pay, 'sliding') ? 2 : 3;
        var tag = ins ? 'cost_' + ins : ['cost_free', 'cost_map', 'cost_sliding', 'cost_uninsured'][tier];
        return { c: c, tier: tier, tag: tag, d: origin ? miles(origin, [c.lat, c.lng]) : null };
      });
    list.sort(function (x, y) {
      if (lang === 'es' && x.c.spanish !== y.c.spanish) return x.c.spanish ? -1 : 1;
      if (x.tier !== y.tier) return x.tier - y.tier;
      if (x.d != null && y.d != null) return x.d - y.d;
      return (x.c.order || 0) - (y.c.order || 0);
    });
    if (origin) { // free care first, but not across the county: keep it within 15 miles when we can
      var near = list.filter(function (x) { return x.d <= 15; });
      if (near.length >= 2) list = near;
    }
    return list.slice(0, 2);
  }
  function dirUrl(dest) {
    var origin = site().addr || (A.zip.length === 5 ? A.zip + ' TX' : '');
    return 'https://www.google.com/maps/dir/?api=1' + (origin ? '&origin=' + encodeURIComponent(origin) : '') +
      '&destination=' + encodeURIComponent(dest) + '&travelmode=transit';
  }
  /* The phone needs a real web address. When the page is opened from a computer folder (file://) or a preview,
     the QR points to the live site instead. Change SITE_URL if the site lives somewhere else. */
  var SITE_URL = 'https://health-maze.org/';
  function baseUrl() {
    var h = location.hostname;
    if (/^https?:$/.test(location.protocol) && h && h !== 'localhost' && h !== '127.0.0.1' && !/claude\.ai$|claudeusercontent\.com$/.test(h)) return location.href.split('#')[0];
    return SITE_URL;
  }
  function hasNumbers() { return A.bps || A.bpd || A.glu; }

  function buildStops() {
    var P = A.programs, stops = [];
    var insured = has(P, 'medicaid') || has(P, 'medicare') || has(P, 'other');
    var z = zipStatus(A.zip);
    var kids = has(A.groups, 'kids'), preg = has(A.groups, 'preg'), senior = has(A.groups, 'senior');
    var p = function (s, cls) { return '<p' + (cls ? ' class="' + cls + '"' : '') + '>' + s + '</p>'; };

    if (A.shelter === true) stops.push({ t: t('id_t'), b: p(t('id_b')) });
    if (!insured) {
      if (z === 'no') stops.push({ t: t('other_t'), b: p(t('other_b')) });
      else if (A.income === 'high') stops.push({ t: t('mkt_t'), b: p(t('mkt_b')) });
      else stops.push({ t: t('map_t'), b: p(t('map_b') + (z !== 'yes' ? ' ' + t('map_maybe') : '')) + p(t('map_imm')) + p(t('map_do'), 'hn-do') + p(t('map_bring')) });
      if (senior && !has(P, 'medicare')) stops[stops.length - 1].b += p(t('medicare_b'));
    }
    if ((kids || preg) && !has(P, 'medicaid')) {
      stops.push({ t: t('kids_t'), b: (kids ? p(t('kids_b')) : '') + (preg ? p(t('preg_b')) : '') + p(t('benefits_do'), 'hn-do') });
    }
    var food = [];
    if (!has(P, 'snap')) food.push(p(t('snap_b')) + p(t('benefits_do'), 'hn-do'));
    if ((kids || preg) && !has(P, 'wic')) food.push(p(t('wic_b')));
    food.push('<p class="hn-noprint"><a href="#food">' + t('food_find') + ' →</a></p>');
    stops.push({ t: t('food_t'), b: food.join('') });

    if (A.shelter === true) stops.push({ t: t('bus_t'), b: p(t('bus_shelter')) });
    else {
      var pp = ['snap', 'medicaid', 'ssi'].filter(function (x) { return has(P, x); })[0];
      var proof = pp ? t('bus_proof_have', { p: pp === 'snap' ? 'SNAP' : pp === 'ssi' ? 'SSI' : 'Medicaid' }) : t('bus_proof');
      stops.push({ t: t('bus_t'), b: p(t('bus_b')) + p(proof) });
    }

    if (A.clinic === true) {
      var cs = pickClinics(); mapClinics = cs;
      if (cs.length) {
        var list = cs.map(function (x, i) {
          var c = x.c, hrs = (lang === 'es' && c.hours_es) || c.hours;
          return '<div class="hn-clinic"><strong><span class="hn-num">' + (i + 1) + '</span>' + esc(c.ogTitle || c.name) + '</strong>' +
            '<span class="hn-tag">' + t(x.tag) + '</span>' + (c.spanish ? '<span class="hn-tag">' + t('spanish') + '</span>' : '') +
            '<div>' + esc(c.address) + '</div>' + (c.phone ? '<div>' + esc(c.phone) + '</div>' : '') + (hrs ? '<div>' + esc(hrs) + '</div>' : '') +
            (x.d != null ? '<div class="hn-muted">' + t('away', { m: x.d < 10 ? x.d.toFixed(1) : Math.round(x.d), z: esc(A.zip) }) + '</div>' : '') +
            '<div class="hn-noprint"><a href="#clinic-' + esc(c.id) + '">' + t('details') + ' →</a></div></div>';
        }).join('');
        stops.push({ t: t('clinics_t'), b: '<div class="hn-map"></div>' + list + (hasNumbers() ? p(t('clinics_bring'), 'hn-do') : '') + '<p class="hn-noprint" style="margin-top:12px"><a href="#find-care">' + t('clinics_more') + ' →</a></p>' });
        var first = cs[0].c, url = dirUrl(first.address);
        stops.push({ t: t('ride_t'), b: p(t('ride_b', { c: esc(first.ogTitle || first.name) })) +
          '<div class="hn-ride"><div class="hn-qr" data-qr="' + esc(url) + '" data-size="120"></div>' +
          '<a class="btn out sm hn-noprint" href="' + esc(url) + '" target="_blank" rel="noopener">' + t('ride_btn') + '</a></div>' });
      }
    }
    stops.push({ t: t('med_t'), b: p(t('med_b')) });
    if (A.shelter !== true) stops.push({ t: t('bills_t'), b: p(t('bills_b')) });
    stops.push({ t: t('mind_t'), b: p(t('mind_b')) + p(t('mind_988'), 'hn-do') });
    return stops;
  }

  function encodeGuide() {
    var o = { l: lang, p: A.programs, n: A.size, g: A.groups, z: A.zip, i: A.income, h: A.shelter, c: A.clinic,
      s: A.bps, d: A.bpd, u: A.glu, a: A.ate ? 1 : 0, t: siteId, dt: A.date };
    return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function decodeGuide(str) {
    try {
      var o = JSON.parse(decodeURIComponent(escape(atob(str.replace(/-/g, '+').replace(/_/g, '/')))));
      var d = function (v, n) { return String(v || '').replace(/\D/g, '').slice(0, n); };
      A = blank();
      A.programs = Array.isArray(o.p) ? o.p : []; A.size = o.n == null ? null : o.n; A.groups = Array.isArray(o.g) ? o.g : [];
      A.zip = d(o.z, 5); A.income = o.i == null ? null : o.i; A.shelter = o.h == null ? null : o.h; A.clinic = o.c == null ? null : o.c;
      A.bps = d(o.s, 3); A.bpd = d(o.d, 3); A.glu = d(o.u, 3); A.ate = !!o.a; A.date = o.dt || A.date;
      if (SITES.some(function (s) { return s.id === o.t; })) siteId = o.t;
      return o.l === 'es' ? 'es' : 'en';
    } catch (e) { return null; }
  }

  function viewGuide() {
    var dt = new Date(A.date + 'T12:00:00');
    var dateStr = dt.toLocaleDateString(lang === 'es' ? 'es-US' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    var where = site().id ? site().name[lang] : '';
    var nums = (A.clinic === true && hasNumbers()) ? '<div class="hn-numbers"><h3>' + t('numBox') + '</h3><dl>' +
      ((A.bps || A.bpd) ? '<div><dt>' + t('bp') + '</dt><dd>' + esc(A.bps || '?') + '/' + esc(A.bpd || '?') + '</dd></div>' : '') +
      (A.glu ? '<div><dt>' + t('glucose') + '</dt><dd>' + esc(A.glu) + ' <small>mg/dL</small></dd></div>' : '') +
      '</dl>' + (A.ate && A.glu ? '<p>' + t('ateYes') + '</p>' : '') + '<p>' + t('numNote') + '</p></div>' : '';
    var guideUrl = baseUrl() + '#hn-' + encodeGuide();
    return '<div class="hn-ghead"><h2>' + t('guideTitle') + '</h2><p class="hn-muted">' + t('fromHM') + ', ' + esc(dateStr) + (where ? ', ' + esc(where) : '') + '</p></div>' +
      nums + '<div class="hn-route"><div class="hn-stop hn-cap"><h3>' + t('startHere') + '</h3></div>' +
      buildStops().map(function (s) { return '<div class="hn-stop"><h3>' + s.t + '</h3>' + s.b + '</div>'; }).join('') +
      '</div>' +
      (mode === 'survey' ? '<div class="hn-keep hn-noprint"><div class="hn-qr" data-qr="' + esc(guideUrl) + '" data-size="148"></div><p>' + t('keep') + '</p></div>' : '') +
      '<p class="hn-fine">' + t('fine') + '</p>';
  }

  /* ---------------- map on the guide (prints, and redraws from the saved link) ---------------- */
  function drawMap(el) {
    /* A picture of the map (not a draggable map), so it prints the same size every time and can be saved on a phone. */
    if (!el || !mapClinics.length) { if (el) el.remove(); return; }
    var W = 800, H = 380, R = 2, Z = 256;
    var pts = mapClinics.map(function (x) { return [x.c.lat, x.c.lng]; });
    var o = (window.HM_ZIPS || {})[A.zip];
    if (o) pts.push(o);
    function px(ll, z) { var s = Z * Math.pow(2, z), si = Math.sin(ll[0] * Math.PI / 180);
      return [(ll[1] + 180) / 360 * s, (0.5 - Math.log((1 + si) / (1 - si)) / (4 * Math.PI)) * s]; }
    var z = 14, a, b;
    for (; z > 3; z--) {
      var P = pts.map(function (q) { return px(q, z); });
      a = [Math.min.apply(0, P.map(function (q) { return q[0]; })), Math.min.apply(0, P.map(function (q) { return q[1]; }))];
      b = [Math.max.apply(0, P.map(function (q) { return q[0]; })), Math.max.apply(0, P.map(function (q) { return q[1]; }))];
      if (b[0] - a[0] <= W - 140 && b[1] - a[1] <= H - 110) break;
    }
    var tl = [(a[0] + b[0]) / 2 - W / 2, (a[1] + b[1]) / 2 - H / 2];
    var cv = document.createElement('canvas'); cv.width = W * R; cv.height = H * R;
    var g = cv.getContext('2d'); g.scale(R, R); g.fillStyle = '#EEECEB'; g.fillRect(0, 0, W, H);
    var local = location.protocol === 'file:';
    function url(x, y) {
      return local ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/' + z + '/' + y + '/' + x
        : 'https://tile.openstreetmap.org/' + z + '/' + x + '/' + y + '.png';
    }
    var jobs = [], ok = 0;
    for (var tx = Math.floor(tl[0] / Z); tx <= Math.floor((tl[0] + W) / Z); tx++)
      for (var ty = Math.floor(tl[1] / Z); ty <= Math.floor((tl[1] + H) / Z); ty++) (function (tx, ty) {
        jobs.push(new Promise(function (done) {
          var im = new Image(); im.crossOrigin = 'anonymous';
          im.onload = function () { g.drawImage(im, tx * Z - tl[0], ty * Z - tl[1], Z, Z); ok++; done(); };
          im.onerror = function () { done(); };
          im.src = url(tx, ty);
        }));
      })(tx, ty);
    el.innerHTML = '<p class="hn-muted hn-maploading">…</p>';
    var timer = new Promise(function (done) { setTimeout(done, 8000); });
    Promise.race([Promise.all(jobs), timer]).then(function () {
      if (!ok || !document.contains(el)) { el.remove(); return; } // no street tiles (offline, or a preview that blocks them): skip the map, the list still works
      function dot(q, fill, label, w) {
        var c = px(q, z), x = c[0] - tl[0], y = c[1] - tl[1], h = 30; w = w || 30;
        g.save(); g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = 6; g.shadowOffsetY = 2;
        g.fillStyle = '#fff'; g.beginPath(); g.roundRect(x - w / 2 - 3, y - h / 2 - 3, w + 6, h + 6, (h + 6) / 2); g.fill(); g.restore();
        g.fillStyle = fill; g.beginPath(); g.roundRect(x - w / 2, y - h / 2, w, h, h / 2); g.fill();
        g.fillStyle = '#fff'; g.font = '600 14px Poppins, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, x, y + 1);
      }
      if (o) dot(o, '#151414', t('you'), 58);
      mapClinics.forEach(function (x, i) { dot([x.c.lat, x.c.lng], '#8B211E', String(i + 1)); });
      g.font = '300 10px Poppins, sans-serif'; g.textAlign = 'right'; g.textBaseline = 'bottom';
      var cr = local ? 'Tiles © Esri' : '© OpenStreetMap contributors', cw = g.measureText(cr).width;
      g.fillStyle = 'rgba(255,255,255,.85)'; g.fillRect(W - cw - 12, H - 17, cw + 12, 17); g.fillStyle = '#5D5654'; g.fillText(cr, W - 6, H - 3);
      var img = document.createElement('img'); img.alt = t('mapLabel');
      try { img.src = cv.toDataURL('image/png'); el.innerHTML = ''; el.appendChild(img); }
      catch (e) { el.innerHTML = ''; el.appendChild(cv); }
    });
  }

  /* ---------------- render ---------------- */
  function render(focus) {
    var k = mode === 'view' ? 'guide' : current(), list = steps();
    var back = $('.hn-back'), prog = $('.hn-progress'), body = $('.hn-body'), bar = $('.hn-bar');
    back.textContent = '← ' + t('back');
    back.style.visibility = (mode === 'view' || k === 'welcome') ? 'hidden' : 'visible';
    var qSteps = list.filter(function (s) { return s !== 'welcome' && s !== 'guide'; }), qi = qSteps.indexOf(k);
    prog.style.visibility = (k === 'welcome' || k === 'guide') ? 'hidden' : 'visible';
    prog.firstElementChild.style.width = qi >= 0 ? ((qi + 1) / qSteps.length * 100) + '%' : '0%';
    var views = { welcome: viewWelcome, programs: viewPrograms, household: viewHousehold, zip: viewZip, income: viewIncome,
      housing: function () { return viewYesNo('housingQ', 'shelter'); }, clinic: function () { return viewYesNo('clinicQ', 'clinic'); }, numbers: viewNumbers, guide: viewGuide };
    body.innerHTML = views[k]();
    root.classList.toggle('hn-is-guide', k === 'guide');

    if (k === 'welcome') bar.innerHTML = '<button type="button" class="btn hn-next" data-act="next">' + t('start') + '</button>';
    else if (k === 'guide') bar.innerHTML = '<button type="button" class="btn pill hn-skip" data-act="print">' + t('print') + '</button>' +
      '<button type="button" class="btn hn-next" data-act="reset">' + (mode === 'survey' ? t('nextPerson') : t('startOver')) + '</button>';
    else bar.innerHTML = '<button type="button" class="btn pill hn-skip" data-act="skip">' + t('skip') + '</button>' +
      '<button type="button" class="btn hn-next" data-act="next">' + (list[stepIdx + 1] === 'guide' ? t('make') : t('next')) + '</button>';

    body.querySelectorAll('[data-qr]').forEach(function (el) {
      if (typeof window.qrcode !== 'function') { el.remove(); return; }
      try {
        var q = window.qrcode(0, 'M'); q.addData(el.dataset.qr); q.make();
        el.innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
        var sv = el.firstElementChild, px = (+el.dataset.size || 140) + 'px';
        sv.setAttribute('width', px); sv.setAttribute('height', px); sv.setAttribute('role', 'img');
      } catch (e) { el.remove(); }
    });
    drawMap(body.querySelector('.hn-map'));
    if (focus) {
      var top = root.getBoundingClientRect().top + window.scrollY - 90;
      if (window.scrollY > top) window.scrollTo(0, top);
      body.focus({ preventScroll: true });
    }
  }

  /* ---------------- events (only inside the tool) ---------------- */
  root.addEventListener('click', function (e) {
    var el = e.target.closest('button');
    if (!el || !root.contains(el)) return;
    var act = el.dataset.act;
    if (el.classList.contains('hn-back')) return go(-1);
    if (act === 'next') return go(1);
    if (act === 'skip') return skipCurrent();
    if (act === 'reset') return reset();
    if (act === 'settings') { showSettings = !showSettings; return render(false); }
    if (act === 'print') { document.body.classList.add('hn-printing'); window.print(); setTimeout(function () { document.body.classList.remove('hn-printing'); }, 500); return; }
    if (el.dataset.prog) {
      var pg = el.dataset.prog;
      if (pg === 'none') A.programs = has(A.programs, 'none') ? [] : ['none'];
      else {
        A.programs = A.programs.filter(function (x) { return x !== 'none'; });
        A.programs = has(A.programs, pg) ? A.programs.filter(function (x) { return x !== pg; }) : A.programs.concat(pg);
      }
      return render(false);
    }
    if (el.dataset.size) { var n = +el.dataset.size; A.size = A.size === n ? null : n; return render(false); }
    if (el.dataset.group) { var g = el.dataset.group; A.groups = has(A.groups, g) ? A.groups.filter(function (x) { return x !== g; }) : A.groups.concat(g); return render(false); }
    if (el.dataset.income) { A.income = el.dataset.income; render(false); setTimeout(function () { go(1); }, 220); return; }
    if (el.dataset.yn) { A[el.dataset.yn] = el.dataset.v === '1'; render(false); setTimeout(function () { go(1); }, 220); return; }
    if (el.dataset.ate) { A.ate = !A.ate; return render(false); }
  });
  root.addEventListener('input', function (e) {
    var f = e.target.dataset && e.target.dataset.f;
    if (!f) return;
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, f === 'zip' ? 5 : 3);
    A[f] = e.target.value;
  });
  root.addEventListener('change', function (e) {
    if (e.target.id === 'hn-site') { siteId = e.target.value; try { localStorage.setItem('hm_site', siteId); } catch (err) {} }
  });
  root.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('hn-big')) go(1);
  });

  /* Clear everything if the tablet sits untouched for 3 minutes mid-survey */
  var idle;
  function poke() {
    clearTimeout(idle);
    if (mode === 'survey') idle = setTimeout(function () { if (stepIdx !== 0) reset(); }, 180000);
  }
  ['pointerdown', 'keydown', 'scroll'].forEach(function (ev) { document.addEventListener(ev, poke, { passive: true }); });

  /* Follow the site's EN/ES switch */
  new MutationObserver(function () {
    var l = document.documentElement.lang === 'es' ? 'es' : 'en';
    if (l !== lang) { lang = l; render(false); }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  /* Opened from a saved guide link (#hn-...)? */
  function fromHash() {
    var m = /^#hn-([A-Za-z0-9_-]+)/.exec(location.hash);
    if (!m) return;
    var l = decodeGuide(m[1]);
    if (!l) return;
    mode = 'view';
    if (l !== lang) {
      var b = document.querySelector('[data-set-lang="' + l + '"]');
      if (b) b.click(); else lang = l;
    }
    render(false);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
  render(false);
  poke();
})();
