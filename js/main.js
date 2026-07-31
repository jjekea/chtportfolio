document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Expand/collapse all weeks on the syllabus schedule
  var expandAllBtn = document.querySelector('[data-expand-all]');
  var collapseAllBtn = document.querySelector('[data-collapse-all]');
  var weekItems = document.querySelectorAll('.week-item');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', function () {
      weekItems.forEach(function (item) { item.open = true; });
    });
  }
  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', function () {
      weekItems.forEach(function (item) { item.open = false; });
    });
  }
});
