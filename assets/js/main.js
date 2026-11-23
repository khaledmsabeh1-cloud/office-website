(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  var y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
  document.getElementById('office-years').textContent = y - 2013;
})();

// معرض الأعمال: التصنيف والعرض المكبَّر
(function () {
  var works = Array.prototype.slice.call(document.querySelectorAll('.work'));
  if (!works.length) return;
  var btns = document.querySelectorAll('.filters button');
  Array.prototype.forEach.call(btns, function (b) {
    b.addEventListener('click', function () {
      Array.prototype.forEach.call(btns, function (x) { x.classList.toggle('is-on', x === b); });
      works.forEach(function (w) { w.hidden = b.dataset.f !== 'all' && w.dataset.cat.split(' ').indexOf(b.dataset.f) < 0; });
    });
  });
  var lb = document.getElementById('lightbox');
  if (!lb || typeof lb.showModal !== 'function') return;
  var img = lb.querySelector('img'), cap = lb.querySelector('.lb-cap'), cur = 0;
  function slides() {
    var out = [];
    works.forEach(function (w) { if (!w.hidden) out.push.apply(out, w.querySelectorAll('a')); });
    return out;
  }
  function show(i) {
    var v = slides(); cur = (i + v.length) % v.length;
    var a = v[cur];
    img.src = a.getAttribute('href'); img.alt = a.dataset.title; cap.textContent = a.dataset.title;
  }
  works.forEach(function (w) {
    var a = w.querySelector('a');
    a.addEventListener('click', function (e) {
      e.preventDefault(); show(slides().indexOf(a)); lb.showModal();
    });
  });
  lb.querySelector('.lb-close').addEventListener('click', function () { lb.close(); });
  lb.querySelector('.lb-prev').addEventListener('click', function () { show(cur - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { show(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.open) return;
    if (e.key === 'ArrowLeft') show(cur + 1);
    if (e.key === 'ArrowRight') show(cur - 1);
  });
})();
