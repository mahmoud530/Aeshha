/* ============================================================
   AESHHA – main.js
   ============================================================ */

'use strict';

/* ── Sample Data ─────────────────────────────────────────── */
const EXPERIENCES = [
  { id:1, title:'Mama Fatma\'s Cairo Kitchen', category:'food', location:'Cairo, Khan el-Khalili', rating:4.9, reviews:128, price:350, duration:'3h', guests:'1–8', emoji:'🍲', badge:'Popular', desc:'Cook authentic Egyptian dishes in a traditional Khan el-Khalili home. Learn to make koshari, ful medames, and Om Ali dessert from scratch with Mama Fatma, a third-generation cook who learned from her grandmother.', included:['All ingredients','Recipe booklet','Welcome tea','Tasting feast','Cooking apron'], itinerary:[{time:'10:00',title:'Market tour',desc:'Visit the spice market for fresh ingredients'},{time:'11:00',title:'Cooking class',desc:'Learn to prepare three traditional dishes'},{time:'13:00',title:'Feast together',desc:'Enjoy the meal you prepared with the host family'}], host:{name:'Fatma Hassan', since:'2022', age:52, rating:4.9, trips:340, bio:'Cairo native who has been cooking traditional Egyptian food for 30 years. I love sharing our culinary heritage with visitors from around the world!'}, tags:['food','cairo','cooking'] },
  { id:2, title:'Nile Felucca Sunset Ride', category:'tours', location:'Aswan, Nile', rating:4.8, reviews:97, price:480, duration:'4h', guests:'1–12', emoji:'🚣', badge:'Top Rated', desc:'Sail the ancient Nile on a traditional wooden felucca at golden hour. Visit Elephantine Island, share tea with local fishermen, and watch the Nubian villages glow in the sunset.', included:['Traditional felucca','Local guide','Tea & snacks','Life jackets','Sunset photos'], itinerary:[{time:'16:00',title:'Departure',desc:'Board the felucca at Aswan waterfront'},{time:'17:00',title:'Island visit',desc:'Explore Elephantine Island on foot'},{time:'18:30',title:'Sunset',desc:'Watch the famous Aswan sunset on the Nile'}], host:{name:'Ahmed Nour', since:'2021', age:38, rating:4.8, trips:210, bio:'Born and raised on the Nile in Aswan. My family has operated feluccas for three generations. I know every hidden corner of the river!'}, tags:['tours','aswan','nile'] },
  { id:3, title:'Giza Pyramid Photography at Dawn', category:'photography', location:'Giza, Cairo', rating:5.0, reviews:64, price:750, duration:'3h', guests:'1–4', emoji:'📸', badge:'New', desc:'Capture the pyramids in the magical golden hour light with professional photographer Khaled. Get behind-the-scenes access to the best angles no tourist map shows.', included:['Pro photographer guide','Editing tips','Digital photos','Private transport','Breakfast'], itinerary:[{time:'05:00',title:'Pickup',desc:'Hotel pickup before sunrise'},{time:'05:45',title:'Shoot begins',desc:'Golden hour photography at Giza plateau'},{time:'08:00',title:'Review session',desc:'Review your best shots over breakfast'}], host:{name:'Khaled Samy', since:'2023', age:29, rating:5.0, trips:89, bio:'Professional photographer with 8 years experience. Featured in National Geographic Arabia. I know the perfect light for every monument in Egypt.'}, tags:['photography','giza','cairo'] },
  { id:4, title:'Nubian Pottery Workshop, Luxor', category:'crafts', location:'Luxor, East Bank', rating:4.7, reviews:53, price:290, duration:'2h', guests:'1–6', emoji:'🏺', badge:'', desc:'Learn the ancient art of Nubian pottery from master craftsman Hassan in his traditional workshop on the East Bank. Take home a piece you made yourself.', included:['Clay & tools','Firing & glazing','Finished pottery to take home','Tea & hospitality'], itinerary:[{time:'10:00',title:'Introduction',desc:'Learn about ancient Egyptian pottery traditions'},{time:'10:30',title:'Hands-on',desc:'Shape your own pot on the wheel'},{time:'11:30',title:'Decoration',desc:'Paint traditional Nubian designs'}], host:{name:'Hassan Abdel-Rahman', since:'2022', age:61, rating:4.7, trips:142, bio:'Third-generation Nubian potter from Luxor. My family has practiced this craft since before the Aswan Dam was built.'}, tags:['crafts','luxor','nubian'] },
  { id:5, title:'Alexandria Seafood & Port Tour', category:'food', location:'Alexandria', rating:4.6, reviews:41, price:420, duration:'5h', guests:'2–10', emoji:'🦐', badge:'', desc:'Explore Alexandria\'s historic port with a local fisherman, visit the fish market at dawn, then cook a fresh seafood feast together overlooking the Mediterranean sea.', included:['Fish market visit','All seafood','Cooking session','Mediterranean lunch','Port stories'], itinerary:[{time:'07:00',title:'Fish market',desc:'Early morning market with local fishermen'},{time:'08:30',title:'Cooking prep',desc:'Clean and prepare your chosen fish'},{time:'10:00',title:'Feast',desc:'Enjoy your Mediterranean seafood lunch'}], host:{name:'Omar Badr', since:'2023', age:44, rating:4.6, trips:67, bio:'Alexandria native and fisherman\'s son. I want to share the real Alexandria – not just Montaza Palace but the salty, noisy, wonderful port life.'}, tags:['food','alexandria','seafood'] },
  { id:6, title:'Calligraphy & Arabic Script Class', category:'crafts', location:'Cairo, Islamic Quarter', rating:4.8, reviews:76, price:320, duration:'2.5h', guests:'1–8', emoji:'🖋️', badge:'', desc:'Discover the art of Arabic calligraphy with master calligrapher Mona in the heart of Islamic Cairo. Learn basic strokes, write your name in Arabic, and create a framed artwork to take home.', included:['All calligraphy tools','Quality paper & ink','Framed artwork to keep','Tea & sweets','Certificate'], itinerary:[{time:'10:00',title:'History',desc:'Brief history of Arabic calligraphy'},{time:'10:30',title:'Basic strokes',desc:'Learn the foundational pen strokes'},{time:'11:30',title:'Your artwork',desc:'Create your personal calligraphy piece'}], host:{name:'Mona El-Sayed', since:'2021', age:47, rating:4.8, trips:198, bio:'Arabic calligraphy artist with 20 years of practice. I studied traditional scripts in Cairo and Istanbul and love introducing this beautiful art to new students.'}, tags:['crafts','cairo','calligraphy'] },
  { id:7, title:'Siwa Oasis Desert Safari', category:'tours', location:'Siwa Oasis, Matrouh', rating:4.9, reviews:38, price:1200, duration:'8h', guests:'2–8', emoji:'🌵', badge:'Adventure', desc:'Journey through the ancient Siwa Oasis in a 4x4, visit the Oracle Temple of Amun, swim in natural hot springs, and watch a desert sunset from a stunning sand dune.', included:['4x4 transport','Local Bedouin guide','Meals in desert','Spring swim','Dune sunset'], itinerary:[{time:'07:00',title:'Departure',desc:'Drive into the desert in open 4x4'},{time:'10:00',title:'Oracle Temple',desc:'Visit the temple where Alexander consulted the Oracle'},{time:'13:00',title:'Hot springs',desc:'Swim in Cleopatra\'s magical spring'},{time:'17:00',title:'Sunset dune',desc:'Climb the Great Sand Sea for sunset'}], host:{name:'Yusuf Barakat', since:'2020', age:35, rating:4.9, trips:156, bio:'Siwa-born Bedouin guide. My family has lived in this oasis for centuries. I share the secrets and stories of Siwa that no guidebook contains.'}, tags:['tours','siwa','desert'] },
  { id:8, title:'Dahab Coral Reef Snorkeling', category:'tours', location:'Dahab, South Sinai', rating:4.8, reviews:112, price:550, duration:'4h', guests:'1–10', emoji:'🤿', badge:'', desc:'Explore the legendary Blue Hole and Canyon reef in Dahab with a certified Bedouin guide. Perfect for beginners – no experience needed for this shallow water adventure.', included:['Snorkeling equipment','Guide','Underwater camera','Light lunch','Transport'], itinerary:[{time:'09:00',title:'Blue Hole',desc:'Snorkel the world-famous Blue Hole reef'},{time:'11:00',title:'The Canyon',desc:'Explore the dramatic Canyon dive site'},{time:'12:30',title:'Bedouin lunch',desc:'Fresh fish lunch on the beach'}], host:{name:'Ali Barakat', since:'2022', age:31, rating:4.8, trips:203, bio:'Dahab-born diver and snorkel guide with 10 years experience. My passion is showing people the underwater world of the Red Sea for the first time.'}, tags:['tours','dahab','sinai'] },
  { id:9, title:'Papyrus Making Workshop', category:'crafts', location:'Cairo, Giza', rating:4.5, reviews:29, price:280, duration:'2h', guests:'1–10', emoji:'📜', badge:'', desc:'Learn the 5,000-year-old art of making authentic papyrus paper from the papyrus plant. Create your own scroll with hieroglyphic paintings to take home.', included:['All materials','Painted scroll to keep','Tea','Certificate of authenticity'], itinerary:[{time:'10:00',title:'Plant to paper',desc:'See how papyrus reeds become paper'},{time:'10:45',title:'Painting',desc:'Paint your own hieroglyphs on papyrus'},{time:'11:30',title:'Framing',desc:'Frame and seal your artwork'}], host:{name:'Rania Fouad', since:'2022', age:39, rating:4.5, trips:87, bio:'Egyptologist and papyrus artist who studied at Cairo University. I make every workshop an adventure in ancient Egyptian history.'}, tags:['crafts','cairo','papyrus'] },
  { id:10, title:'Luxor Hot Air Balloon Ride', category:'photography', location:'Luxor, West Bank', rating:4.9, reviews:89, price:1800, duration:'3h', guests:'4–16', emoji:'🎈', badge:'Luxury', desc:'Float silently over the Valley of the Kings at sunrise in a traditional hot air balloon. Watch Luxor\'s temples and the Nile come alive in the golden morning light – an unmatched perspective on 3,000 years of history.', included:['Hot air balloon','Professional pilot','Sunrise views','Champagne toast','Certificate'], itinerary:[{time:'04:30',title:'Pickup',desc:'Hotel transfer to West Bank launch site'},{time:'05:30',title:'Inflation',desc:'Watch the balloon fill and prepare'},{time:'06:00',title:'Flight',desc:'1-hour sunrise flight over the Valley of the Kings'}], host:{name:'Captain Tarek', since:'2019', age:50, rating:4.9, trips:412, bio:'Certified hot air balloon pilot with 15 years flying over Luxor. Safety is everything. Beauty is guaranteed.'}, tags:['photography','luxor','balloon'] },
  { id:11, title:'El-Muizz Street Night Walk', category:'tours', location:'Cairo, Islamic Quarter', rating:4.7, reviews:55, price:300, duration:'3h', guests:'1–12', emoji:'🕌', badge:'', desc:'Walk through one of the world\'s oldest medieval streets at night with a local history guide. Discover hidden mosques, ancient fountains, and the stories behind Cairo\'s most atmospheric lane.', included:['Local guide','Fresh juice stops','Historical context','Photo spots'], itinerary:[{time:'19:00',title:'Bab el-Futuh',desc:'Start at the northern gate of Fatimid Cairo'},{time:'20:00',title:'Hidden gems',desc:'Visit mosques and khans off the tourist trail'},{time:'21:00',title:'Souq el-Attarin',desc:'Finish at the famous perfume bazaar'}], host:{name:'Dr. Sherif Nada', since:'2021', age:42, rating:4.7, trips:178, bio:'History PhD and passionate Cairene. I grew up in these streets and want to share their extraordinary stories with curious visitors.'}, tags:['tours','cairo','islamic'] },
  { id:12, title:'Alexandria Corniche Photography', category:'photography', location:'Alexandria', rating:4.6, reviews:33, price:450, duration:'3h', guests:'1–4', emoji:'🌅', badge:'', desc:'Capture the charm of Alexandria\'s grand Corniche boulevard at golden hour. From the Cecil Hotel to the Citadel of Qaitbay, photograph the Mediterranean city at its most beautiful.', included:['Photography coaching','Best locations map','Golden hour timing','Digital edits guide'], itinerary:[{time:'16:30',title:'Corniche walk',desc:'Walk and shoot along the seafront boulevard'},{time:'17:30',title:'Qaitbay',desc:'Photograph the medieval sea fortress'},{time:'18:30',title:'Sunset',desc:'Capture the Mediterranean sunset'}], host:{name:'Dina Wahba', since:'2023', age:33, rating:4.6, trips:48, bio:'Alexandria-born photographer who has documented this city for 8 years. My mission: help you see Alex through a local\'s eyes.'}, tags:['photography','alexandria'] }
];

const REVIEWS = [
  { name:'Sophie Laurent', from:'Paris', text:'Absolutely magical. Mama Fatma made us feel like family immediately.', rating:5, initials:'SL', date:'Jan 2025' },
  { name:'Marco Chen', from:'Shanghai', text:'The Nile felucca at sunset was the highlight of my Egypt trip. Ahmed is wonderful!', rating:5, initials:'MC', date:'Feb 2025' },
  { name:'Layla Mansour', from:'Dubai', text:'Khaled\'s photographic eye is incredible. My best travel photos ever!', rating:5, initials:'LM', date:'Jan 2025' },
  { name:'Tom Wilson', from:'London', text:'Hassan\'s pottery workshop was so therapeutic. I made something beautiful.', rating:4, initials:'TW', date:'Dec 2024' },
  { name:'Sara Kim', from:'Seoul', text:'The Arabic calligraphy class was outstanding. A true artistic experience.', rating:5, initials:'SK', date:'Feb 2025' }
];

const BOOKINGS = [
  { id:'BK001', expId:1, status:'upcoming',  date:'2025-03-15', guests:2, total:700,  points:140 },
  { id:'BK002', expId:3, status:'upcoming',  date:'2025-03-22', guests:1, total:750,  points:150 },
  { id:'BK003', expId:7, status:'completed', date:'2025-01-10', guests:3, total:3600, points:720 },
  { id:'BK004', expId:2, status:'completed', date:'2024-12-20', guests:2, total:960,  points:192 },
  { id:'BK005', expId:4, status:'cancelled', date:'2024-11-05', guests:2, total:580,  points:0   }
];

const POINTS_HISTORY = [
  { type:'earn',   label:'Siwa Desert Safari booking',    points:720,  date:'Jan 10, 2025' },
  { type:'earn',   label:'Nile Felucca Ride booking',     points:192,  date:'Dec 20, 2024' },
  { type:'redeem', label:'10% discount redeemed',         points:-300, date:'Dec 15, 2024' },
  { type:'earn',   label:'Welcome bonus',                 points:200,  date:'Nov 01, 2024' },
  { type:'earn',   label:'Referral bonus – Marco Chen',   points:300,  date:'Oct 20, 2024' },
  { type:'redeem', label:'Free cancellation used',        points:-300, date:'Oct 12, 2024' },
  { type:'earn',   label:'Pottery Workshop booking',      points:116,  date:'Sep 15, 2024' }
];

const WISHLIST_IDS = [5, 6, 9, 10];

/* ── Utilities ───────────────────────────────────────────── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmt(n) { return Number(n).toLocaleString(); }

function showToast(msg, type = 'info', duration = 3000) {
  const container = $('#toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function animateCount(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * ease).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function starsHTML(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating));
}

function categoryLabel(cat) {
  return { food:'Food & Cooking', crafts:'Local Crafts', tours:'Tours & Adventures', photography:'Photography' }[cat] || cat;
}

/* ── Card Builder ────────────────────────────────────────── */
function buildCard(exp, linkTarget = 'experience-details.html') {
  const wishlistIds = JSON.parse(localStorage.getItem('aeshha_wishlist') || '[]');
  const inWishlist = wishlistIds.includes(exp.id);
  return `
  <div class="experience-card" data-id="${exp.id}">
    <div class="card-image">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;background:var(--color-bg)">${exp.emoji}</div>
      <div class="card-overlay"></div>
      ${exp.badge ? `<span class="card-badge">${exp.badge}</span>` : ''}
      <button class="card-wishlist ${inWishlist?'active':''}" data-id="${exp.id}" title="${inWishlist?'Remove from wishlist':'Save to wishlist'}">
        ${inWishlist ? '♥' : '♡'}
      </button>
    </div>
    <div class="card-body">
      <div class="card-category">${categoryLabel(exp.category)}</div>
      <h3 class="card-title">${esc(exp.title)}</h3>
      <div class="card-meta"><span class="icon">📍</span>${esc(exp.location)}</div>
      <div class="card-rating">
        ${'★'.repeat(Math.floor(exp.rating))} ${exp.rating}
        <span>(${exp.reviews} reviews)</span>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-price"><sup>EGP </sup>${fmt(exp.price)}<small>/person</small></div>
      <a href="${linkTarget}?id=${exp.id}" class="btn btn-primary btn-sm">Book Now</a>
    </div>
  </div>`;
}

/* ── Wishlist Toggle ─────────────────────────────────────── */
function initWishlistButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-wishlist');
    if (!btn) return;
    e.preventDefault(); e.stopPropagation();
    const id = parseInt(btn.dataset.id);
    let wl = JSON.parse(localStorage.getItem('aeshha_wishlist') || '[]');
    if (wl.includes(id)) {
      wl = wl.filter(x => x !== id);
      btn.textContent = '♡'; btn.classList.remove('active');
      showToast('Removed from wishlist', 'info');
    } else {
      wl.push(id);
      btn.textContent = '♥'; btn.classList.add('active');
      showToast('Added to wishlist ♥', 'success');
    }
    localStorage.setItem('aeshha_wishlist', JSON.stringify(wl));
  });
}

/* ── Navbar ──────────────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const mobileNav = $('#mobile-nav');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target))
        mobileNav.classList.remove('open');
    });
  }
}

/* ── Scroll Top ──────────────────────────────────────────── */
function initScrollTop() {
  const btn = $('#scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Reveal on Scroll ────────────────────────────────────── */
function initReveal() {
  const els = $$('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ── Hero Stats Counter ──────────────────────────────────── */
function initHeroStats() {
  const nums = $$('[data-count]');
  if (!nums.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target, parseInt(e.target.dataset.count)); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => io.observe(el));
}

/* ── Homepage Featured ───────────────────────────────────── */
function initHomepage() {
  const grid = $('#featured-experiences');
  if (!grid) return;
  const featured = [1,2,3,4,5,6].map(id => EXPERIENCES.find(e => e.id === id));
  grid.innerHTML = featured.map(e => buildCard(e)).join('');
}

/* ── Experiences Page ────────────────────────────────────── */
function initExperiencesPage() {
  const grid = $('#all-experiences');
  if (!grid) return;

  // Read URL params for initial filter
  const params = new URLSearchParams(location.search);
  const initCat = params.get('category') || 'all';
  if (initCat !== 'all') {
    const radio = $(`input[name="category"][value="${initCat}"]`);
    if (radio) radio.checked = true;
  }

  let filtered = [...EXPERIENCES];
  let currentPage = 1;
  const perPage = 6;
  let isListView = false;

  const countEl = $('#exp-count');
  const emptyEl = $('#empty-state');
  const paginationEl = $('#pagination');
  const activeFiltersEl = $('#active-filters');

  function getFilters() {
    return {
      category: $('input[name="category"]:checked')?.value || 'all',
      location: $('#filter-location')?.value.toLowerCase().trim() || '',
      priceMax: parseInt($('#filter-price-max')?.value || 5000),
      priceMin: parseInt($('#filter-price-min')?.value || 0),
      rating: parseFloat($('input[name="rating"]:checked')?.value || 0),
      duration: $('input[name="duration"]:checked')?.value || 'all',
      sort: $('#sort-select')?.value || 'featured'
    };
  }

  function applyFilters() {
    const f = getFilters();
    filtered = EXPERIENCES.filter(e => {
      if (f.category !== 'all' && e.category !== f.category) return false;
      if (f.location && !e.location.toLowerCase().includes(f.location)) return false;
      if (e.price < f.priceMin || e.price > f.priceMax) return false;
      if (e.rating < f.rating) return false;
      if (f.duration !== 'all') {
        const h = parseInt(e.duration);
        if (f.duration === 'half' && h > 4) return false;
        if (f.duration === 'full' && (h <= 4 || h > 8)) return false;
        if (f.duration === 'multi' && h <= 8) return false;
      }
      return true;
    });

    if (f.sort === 'price-asc')  filtered.sort((a,b) => a.price - b.price);
    if (f.sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    if (f.sort === 'rating')     filtered.sort((a,b) => b.rating - a.rating);

    currentPage = 1;
    renderPage();
    renderChips(f);
  }

  function renderChips(f) {
    if (!activeFiltersEl) return;
    let chips = '';
    if (f.category !== 'all') chips += `<span class="filter-chip" data-remove="category">📍 ${categoryLabel(f.category)} <span class="chip-remove">×</span></span>`;
    if (f.location) chips += `<span class="filter-chip" data-remove="location">🔍 ${f.location} <span class="chip-remove">×</span></span>`;
    if (f.rating > 0) chips += `<span class="filter-chip" data-remove="rating">★ ${f.rating}+ <span class="chip-remove">×</span></span>`;
    activeFiltersEl.innerHTML = chips;
    $$('.filter-chip').forEach(chip => chip.addEventListener('click', () => clearChip(chip.dataset.remove)));
  }

  function clearChip(field) {
    if (field === 'category') { $('input[name="category"][value="all"]').checked = true; }
    if (field === 'location') { const el = $('#filter-location'); if(el) el.value = ''; }
    if (field === 'rating')   { $('input[name="rating"][value="0"]').checked = true; }
    applyFilters();
  }

  function renderPage() {
    const start = (currentPage - 1) * perPage;
    const pageData = filtered.slice(start, start + perPage);
    if (countEl) countEl.textContent = fmt(filtered.length);

    if (!filtered.length) {
      grid.innerHTML = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
    } else {
      if (emptyEl) emptyEl.classList.add('hidden');
      grid.innerHTML = pageData.map(e => buildCard(e)).join('');
      if (isListView) grid.classList.add('list-view');
      else grid.classList.remove('list-view');
    }
    renderPagination();
  }

  function renderPagination() {
    if (!paginationEl) return;
    const pages = Math.ceil(filtered.length / perPage);
    if (pages <= 1) { paginationEl.innerHTML = ''; return; }
    let html = `<button class="page-btn" ${currentPage===1?'disabled':''} data-page="${currentPage-1}">‹</button>`;
    for (let i = 1; i <= pages; i++) html += `<button class="page-btn ${i===currentPage?'active':''}" data-page="${i}">${i}</button>`;
    html += `<button class="page-btn" ${currentPage===pages?'disabled':''} data-page="${currentPage+1}">›</button>`;
    paginationEl.innerHTML = html;
    $$('.page-btn', paginationEl).forEach(btn => btn.addEventListener('click', () => {
      if (!btn.disabled) { currentPage = parseInt(btn.dataset.page); renderPage(); window.scrollTo({top:0,behavior:'smooth'}); }
    }));
  }

  // View toggle
  const viewGrid = $('#view-grid'), viewList = $('#view-list');
  if (viewGrid) viewGrid.addEventListener('click', () => { isListView=false; viewGrid.classList.add('active'); viewList?.classList.remove('active'); renderPage(); });
  if (viewList) viewList.addEventListener('click', () => { isListView=true; viewList.classList.add('active'); viewGrid?.classList.remove('active'); renderPage(); });

  // Apply & clear
  $('#apply-filters')?.addEventListener('click', applyFilters);
  $('#clear-filters')?.addEventListener('click', () => {
    $$('input[name="category"]')[0].checked = true;
    $$('input[name="rating"]')[0].checked = true;
    $$('input[name="duration"]')[0].checked = true;
    const loc = $('#filter-location'); if(loc) loc.value = '';
    const pMax = $('#filter-price-max'); if(pMax) pMax.value = 5000;
    const pMin = $('#filter-price-min'); if(pMin) pMin.value = 0;
    updatePriceDisplay(); applyFilters();
  });
  $('#sort-select')?.addEventListener('change', applyFilters);

  // Price range
  function updatePriceDisplay() {
    const mn = parseInt($('#filter-price-min')?.value||0), mx = parseInt($('#filter-price-max')?.value||5000);
    const elMin = $('#price-min-val'), elMax = $('#price-max-val');
    if(elMin) elMin.textContent = fmt(mn);
    if(elMax) elMax.textContent = fmt(mx);
  }
  $('#filter-price-min')?.addEventListener('input', updatePriceDisplay);
  $('#filter-price-max')?.addEventListener('input', updatePriceDisplay);

  // Mobile filter sidebar
  const mobileFilterBtn = $('#mobile-filter-btn');
  const filterSidebar = $('#filter-sidebar');
  if (mobileFilterBtn && filterSidebar) {
    mobileFilterBtn.addEventListener('click', () => filterSidebar.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!filterSidebar.contains(e.target) && !mobileFilterBtn.contains(e.target))
        filterSidebar.classList.remove('open');
    });
  }

  applyFilters();
}

/* ── Experience Details Page ─────────────────────────────── */
function initDetailsPage() {
  const content = $('#details-content');
  const loading = $('#details-loading');
  if (!content) return;

  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id') || 1);
  const exp = EXPERIENCES.find(e => e.id === id) || EXPERIENCES[0];

  document.title = `${exp.title} – Aeshha`;
  $('#breadcrumb-name').textContent = exp.title;

  setTimeout(() => {
    loading?.classList.add('hidden');
    content.classList.remove('hidden');
    renderDetails(exp);
  }, 400);
}

function renderDetails(exp) {
  // Gallery
  const colors = { food:'#C0654A', tours:'#2C4A7C', crafts:'#6B8C45', photography:'#5BB5C5' };
  const mainImg = $('#gallery-main-img');
  if (mainImg) {
    mainImg.style.cssText = `width:100%;height:100%;object-fit:cover;background:${colors[exp.category]+'22'};display:flex;align-items:center;justify-content:center;font-size:8rem;`;
    mainImg.src = '';
    mainImg.alt = exp.title;
    mainImg.parentElement.style.background = colors[exp.category] + '22';
    mainImg.style.display = 'none';
    mainImg.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:8rem;background:${colors[exp.category]+'22'}">${exp.emoji}</div>
      <div class="gallery-badges">${exp.badge ? `<span class="card-badge">${exp.badge}</span>` : ''}</div>
      <button class="gallery-wishlist" id="gallery-wishlist">♡</button>`;
  }

  const thumbs = $('#gallery-thumbs');
  if (thumbs) {
    thumbs.innerHTML = [exp.emoji, '🗺️', '⭐', '📍'].map((em,i) =>
      `<div class="gallery-thumb ${i===0?'active':''}" style="background:${colors[exp.category]}22;display:flex;align-items:center;justify-content:center;font-size:2rem">${em}</div>`
    ).join('');
  }

  // Core info
  el('exp-category', categoryLabel(exp.category));
  el('exp-title', exp.title);
  el('exp-stars', '★'.repeat(Math.floor(exp.rating)));
  el('exp-rating-num', exp.rating.toFixed(1));
  el('exp-reviews-count', `(${exp.reviews} reviews)`);
  el('exp-location', exp.location);
  el('exp-duration', exp.duration);
  el('exp-guests', exp.guests + ' guests');
  el('exp-description', exp.desc);

  // Included
  const incList = $('#included-list');
  if (incList) incList.innerHTML = exp.included.map(item =>
    `<li><span class="check-icon">✓</span>${esc(item)}</li>`
  ).join('');

  // Itinerary
  const itin = $('#itinerary');
  if (itin) itin.innerHTML = exp.itinerary.map(step => `
    <div class="itinerary-item">
      <div class="itinerary-time">${step.time}</div>
      <div class="itinerary-info"><h4>${esc(step.title)}</h4><p>${esc(step.desc)}</p></div>
    </div>`
  ).join('');

  // Host
  const hostCard = $('#host-card');
  const h = exp.host;
  if (hostCard) hostCard.innerHTML = `
    <div class="host-avatar">${h.name.split(' ').map(w=>w[0]).join('')}
      <span class="host-verified-badge">✓</span>
    </div>
    <div class="host-info">
      <h3>${esc(h.name)}</h3>
      <p class="host-since">Host since ${h.since} ·  Age ${h.age}</p>
      <div class="host-stats">
        <div class="host-stat"><strong>★ ${h.rating}</strong><span>Rating</span></div>
        <div class="host-stat"><strong>${h.trips}</strong><span>Trips</span></div>
        <div class="host-stat"><strong>✅</strong><span>Verified</span></div>
      </div>
      <p class="host-bio">${esc(h.bio)}</p>
    </div>`;

  // Reviews
  const revSum = $('#reviews-summary');
  if (revSum) {
    const bars = [5,4,3,2,1].map(star => {
      const pct = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
      return `<div class="rating-bar-row">
        <span class="label">${star}</span>
        <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%"></div></div>
        <span class="pct">${pct}%</span>
      </div>`;
    }).join('');
    revSum.innerHTML = `
      <div class="rating-big">
        <div class="num">${exp.rating}</div>
        <div class="stars">${'★'.repeat(5)}</div>
        <div class="total">${exp.reviews} reviews</div>
      </div>
      <div class="rating-bars">${bars}</div>`;
  }

  const revList = $('#reviews-list');
  if (revList) revList.innerHTML = REVIEWS.slice(0,3).map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-author">
          <div class="review-avatar">${r.initials}</div>
          <div class="review-author-info"><strong>${esc(r.name)}</strong><span>${esc(r.from)} · ${r.date}</span></div>
        </div>
        <div class="review-rating">${'★'.repeat(r.rating)}</div>
      </div>
      <p class="review-text">"${esc(r.text)}"</p>
    </div>`
  ).join('');

  // Booking widget
  el('booking-price', `EGP ${fmt(exp.price)}`);
  el('booking-rating-num', exp.rating.toFixed(1));
  el('booking-reviews', `(${exp.reviews})`);

  const today = new Date(); today.setDate(today.getDate()+3);
  const dateEl = $('#booking-date');
  if (dateEl) dateEl.value = today.toISOString().split('T')[0];

  let guests = 1;
  function updateBookingCalc() {
    const priceEl = $('#booking-price'); 
    const basePrice = exp.price;
    const subtotal = basePrice * guests;
    const fee = Math.round(subtotal * 0.1);
    const total = subtotal + fee;
    el('price-calc-label', `EGP ${fmt(basePrice)} × ${guests} guest${guests>1?'s':''}`);
    el('price-calc-subtotal', `EGP ${fmt(subtotal)}`);
    el('booking-fee', `EGP ${fmt(fee)}`);
    el('booking-total', `EGP ${fmt(total)}`);
  }

  $('#guests-minus')?.addEventListener('click', () => { if(guests>1){guests--; el('guests-count',guests); updateBookingCalc(); }});
  $('#guests-plus')?.addEventListener('click',  () => { if(guests<20){guests++; el('guests-count',guests); updateBookingCalc(); }});
  updateBookingCalc();

  // Book button
  const bookForm = $('#booking-form');
  if (bookForm) bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = $('#booking-date')?.value;
    if (!date) { showToast('Please select a date', 'error'); return; }
    const modal = $('#booking-modal');
    const modalText = $('#modal-text');
    if (modalText) modalText.innerHTML = `<strong>${esc(exp.title)}</strong><br>Date: ${date}<br>Guests: ${guests}<br>Total: EGP ${fmt(exp.price * guests + Math.round(exp.price * guests * 0.1))}<br><br>🎉 You earned <strong>${guests * 20} loyalty points!</strong>`;
    modal?.classList.add('open');
  });

  $('#modal-close')?.addEventListener('click', () => $('#booking-modal')?.classList.remove('open'));
  $('#booking-modal')?.addEventListener('click', (e) => { if(e.target === $('#booking-modal')) $('#booking-modal').classList.remove('open'); });

  // Share
  $('#share-btn')?.addEventListener('click', () => {
    if (navigator.share) navigator.share({ title: exp.title, url: location.href });
    else { navigator.clipboard.writeText(location.href); showToast('Link copied!', 'success'); }
  });

  // Wishlist btn
  const wlBtn = $('#wishlist-btn');
  if (wlBtn) {
    let wl = JSON.parse(localStorage.getItem('aeshha_wishlist')||'[]');
    wlBtn.textContent = wl.includes(exp.id) ? '♥ Saved' : '♡ Save to Wishlist';
    wlBtn.addEventListener('click', () => {
      let wl = JSON.parse(localStorage.getItem('aeshha_wishlist')||'[]');
      if (wl.includes(exp.id)) { wl = wl.filter(x=>x!==exp.id); wlBtn.textContent = '♡ Save to Wishlist'; showToast('Removed from wishlist'); }
      else { wl.push(exp.id); wlBtn.textContent = '♥ Saved'; showToast('Saved to wishlist ♥','success'); }
      localStorage.setItem('aeshha_wishlist', JSON.stringify(wl));
    });
  }

  // Similar
  const similar = $('#similar-experiences');
  if (similar) {
    const others = EXPERIENCES.filter(e => e.id !== exp.id && e.category === exp.category).slice(0,3);
    similar.innerHTML = (others.length ? others : EXPERIENCES.filter(e=>e.id!==exp.id).slice(0,3)).map(e => buildCard(e)).join('');
  }
}

function el(id, val) { const e = document.getElementById(id); if(e) e.textContent = val; }

/* ── Login / Register Page ───────────────────────────────── */
function initLoginPage() {
  const tabLogin = $('#tab-login'), tabReg = $('#tab-register');
  const formLogin = $('#form-login'), formReg = $('#form-register');
  if (!tabLogin) return;

  function switchTab(tab) {
    if (tab === 'login') {
      tabLogin.classList.add('active'); tabReg.classList.remove('active');
      formLogin.classList.remove('hidden'); formReg.classList.add('hidden');
    } else {
      tabReg.classList.add('active'); tabLogin.classList.remove('active');
      formReg.classList.remove('hidden'); formLogin.classList.add('hidden');
    }
  }

  tabLogin.addEventListener('click', () => switchTab('login'));
  tabReg.addEventListener('click',   () => switchTab('register'));
  $$('.switch-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.switch)));

  // Check for #register in URL
  if (location.hash === '#register') switchTab('register');

  // Password toggles
  $$('.toggle-pw').forEach(btn => btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.textContent = input.type === 'password' ? '👁️' : '🙈';
  }));

  // Password strength
  const pwInput = $('#reg-password');
  const fill = $('#strength-fill');
  const label = $('#strength-label');
  if (pwInput && fill && label) {
    pwInput.addEventListener('input', () => {
      const pw = pwInput.value;
      let score = 0;
      if (pw.length >= 8) score++;
      if (/[A-Z]/.test(pw)) score++;
      if (/[0-9]/.test(pw)) score++;
      if (/[^A-Za-z0-9]/.test(pw)) score++;
      const levels = [['0%','#e5e7eb','Enter a password'],['25%','#ef4444','Weak'],['50%','#f59e0b','Fair'],['75%','#3b82f6','Good'],['100%','#10b981','Strong']];
      const [w,c,t] = levels[score];
      fill.style.width = w; fill.style.background = c; label.textContent = t; label.style.color = c;
    });
  }

  // Role selector
  $$('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isHost = btn.dataset.role === 'host';
      $('#host-city-group')?.classList.toggle('hidden', !isHost);
    });
  });

  // Login submit
  $('#login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#login-email')?.value.trim();
    const pw = $('#login-password')?.value;
    if (!email || !pw) { showToast('Please fill in all fields', 'error'); return; }
    const btn = $('#login-btn');
    if(btn){ btn.textContent = 'Logging in…'; btn.disabled = true; }
    setTimeout(() => {
      localStorage.setItem('aeshha_user', JSON.stringify({ name:'Ahmed Mansour', email }));
      showToast('Welcome back! Redirecting…', 'success');
      setTimeout(() => { location.href = 'profile.html'; }, 1000);
    }, 1200);
  });

  // Register submit
  $('#register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = $('#reg-firstname')?.value.trim();
    const last  = $('#reg-lastname')?.value.trim();
    const email = $('#reg-email')?.value.trim();
    const pw    = $('#reg-password')?.value;
    const conf  = $('#reg-confirm')?.value;
    const terms = $('#agree-terms')?.checked;
    if (!first||!last||!email||!pw) { showToast('Please fill in all required fields', 'error'); return; }
    if (pw !== conf) { showToast('Passwords do not match', 'error'); return; }
    if (!terms) { showToast('Please agree to the Terms of Service', 'error'); return; }
    const btn = $('#register-btn');
    if(btn){ btn.textContent = 'Creating account…'; btn.disabled = true; }
    setTimeout(() => {
      localStorage.setItem('aeshha_user', JSON.stringify({ name: `${first} ${last}`, email, points: 200 }));
      showToast('Account created! Welcome to Aeshha 🎉', 'success');
      setTimeout(() => { location.href = 'profile.html'; }, 1200);
    }, 1400);
  });

  // Social buttons
  $('#google-login')?.addEventListener('click', () => showToast('Google login coming soon!', 'info'));
  $('#facebook-login')?.addEventListener('click', () => showToast('Facebook login coming soon!', 'info'));
}

/* ── Profile Page ────────────────────────────────────────── */
function initProfilePage() {
  if (!$('#tab-bookings')) return;

  // Tab switching
  $$('.profile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      $$('.profile-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const tab = item.dataset.tab;
      $$('.tab-pane').forEach(p => p.classList.add('hidden'));
      $(`#tab-${tab}`)?.classList.remove('hidden');
    });
  });

  // Loyalty points animation
  const pointsEl = $('.points-num');
  if (pointsEl) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ animateCount(e.target, 2850); io.unobserve(e.target); }});
    }, {threshold: 0.5});
    io.observe(pointsEl);
  }

  // Progress bar
  setTimeout(() => {
    const fill = $('#progress-fill');
    if (fill) fill.style.width = '57%';
  }, 500);

  // Render bookings
  const bookList = $('#bookings-list');
  if (bookList) {
    bookList.innerHTML = BOOKINGS.map(bk => {
      const exp = EXPERIENCES.find(e => e.id === bk.expId);
      if (!exp) return '';
      return `<div class="booking-card" data-status="${bk.status}">
        <div class="booking-img"><div class="emoji-img">${exp.emoji}</div></div>
        <div class="booking-info">
          <span class="booking-status-badge status-${bk.status}">${bk.status.charAt(0).toUpperCase()+bk.status.slice(1)}</span>
          <h3>${esc(exp.title)}</h3>
          <div class="booking-meta-row">
            <span>📅 ${bk.date}</span>
            <span>👥 ${bk.guests} guest${bk.guests>1?'s':''}</span>
            <span>📍 ${esc(exp.location)}</span>
            ${bk.points ? `<span>⭐ +${bk.points} pts</span>` : ''}
          </div>
        </div>
        <div class="booking-actions">
          <div class="booking-price-tag">EGP ${fmt(bk.total)}</div>
          <a href="experience-details.html?id=${bk.expId}" class="btn btn-outline btn-sm">View</a>
          ${bk.status==='upcoming'?'<button class="btn btn-sm" style="border:2px solid #dc2626;color:#dc2626;border-radius:var(--radius-full)">Cancel</button>':''}
          ${bk.status==='completed'?'<button class="btn btn-sm btn-secondary">Review</button>':''}
        </div>
      </div>`;
    }).join('');

    // Filter pills
    $$('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        $$('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter;
        $$('.booking-card').forEach(card => {
          card.style.display = (filter==='all' || card.dataset.status===filter) ? '' : 'none';
        });
      });
    });
  }

  // Render wishlist
  const wishlistGrid = $('#wishlist-grid');
  if (wishlistGrid) {
    const saved = JSON.parse(localStorage.getItem('aeshha_wishlist')||'[]');
    const wishlistExps = EXPERIENCES.filter(e => WISHLIST_IDS.includes(e.id) || saved.includes(e.id));
    if (wishlistExps.length) {
      wishlistGrid.innerHTML = wishlistExps.map(e => buildCard(e)).join('');
    } else {
      wishlistGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><span class="empty-icon">❤️</span><h3>No saved experiences</h3><p>Browse experiences and click ♡ to save them here.</p><a href="experiences.html" class="btn btn-primary">Explore Now</a></div>`;
    }
  }

  // Render my reviews
  const myRevList = $('#my-reviews-list');
  if (myRevList) myRevList.innerHTML = REVIEWS.slice(0,3).map(r => {
    const exp = EXPERIENCES[Math.floor(Math.random()*3)];
    return `<div class="review-item">
      <div class="review-header">
        <div class="review-author">
          <div class="review-avatar">${r.initials}</div>
          <div class="review-author-info"><strong>${esc(exp.title)}</strong><span>${r.date}</span></div>
        </div>
        <div class="review-rating">${'★'.repeat(r.rating)}</div>
      </div>
      <p class="review-text">"${esc(r.text)}"</p>
    </div>`;
  }).join('');

  // Points history
  const ptList = $('#points-history-list');
  if (ptList) ptList.innerHTML = POINTS_HISTORY.map(pt => `
    <div class="points-transaction">
      <div class="pt-icon ${pt.type}">${pt.type==='earn'?'📈':'🎁'}</div>
      <div class="pt-info"><strong>${esc(pt.label)}</strong><span>${pt.date}</span></div>
      <div class="pt-amount ${pt.type}">${pt.points>0?'+':''}${fmt(pt.points)} pts</div>
    </div>`
  ).join('');

  // Settings form
  $('#settings-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Profile updated successfully!', 'success');
  });

  $('#pw-change-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Password changed successfully!', 'success');
    e.target.reset();
  });

  // Password toggles
  $$('.toggle-pw').forEach(btn => btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.textContent = input.type === 'password' ? '👁️' : '🙈';
  }));

  // Redeem modal
  const redeemModal = $('#redeem-modal');
  const redeemOpts = $('#redeem-options');
  const redeemBtnOpen = $('#redeem-btn');
  if (redeemBtnOpen && redeemModal) {
    const options = [
      { label:'10% off your next booking', cost:500, icon:'🎫' },
      { label:'Free upgrade to 2 guests', cost:800, icon:'👥' },
      { label:'EGP 200 travel credit', cost:1000, icon:'💳' },
      { label:'Priority booking for popular experiences', cost:1500, icon:'⚡' }
    ];
    if (redeemOpts) redeemOpts.innerHTML = options.map(o => `
      <div class="redeem-option-item">
        <div class="roi-info"><strong>${o.icon} ${esc(o.label)}</strong><span>${o.cost<=2850?'✅ Available':'❌ Need more points'}</span></div>
        <div class="roi-cost">⭐ ${fmt(o.cost)} pts</div>
        <button class="btn btn-sm btn-${o.cost<=2850?'secondary':'outline'}" ${o.cost>2850?'disabled':''} onclick="showToast('${o.label} redeemed!','success');$('#redeem-modal').classList.remove('open')">
          ${o.cost<=2850?'Redeem':'Locked'}
        </button>
      </div>`
    ).join('');
    redeemBtnOpen.addEventListener('click', () => redeemModal.classList.add('open'));
    $('#redeem-modal-close')?.addEventListener('click', () => redeemModal.classList.remove('open'));
    redeemModal.addEventListener('click', (e) => { if(e.target===redeemModal) redeemModal.classList.remove('open'); });
  }

  // Logout
  $('#logout-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('aeshha_user');
    showToast('Logged out successfully', 'info');
    setTimeout(() => { location.href = 'index.html'; }, 1000);
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollTop();
  initReveal();
  initHeroStats();
  initWishlistButtons();

  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHomepage();
  if (page === 'experiences.html') initExperiencesPage();
  if (page === 'experience-details.html') initDetailsPage();
  if (page === 'login.html') initLoginPage();
  if (page === 'profile.html') initProfilePage();
});
