// Language toggle (ko / ja)
(function () {
  var STORAGE_KEY = 'chingudachi-lang';

  function setLang(lang) {
    document.body.classList.toggle('lang-ja', lang === 'ja');
    document.documentElement.lang = lang;

    // Update toggle buttons
    var buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });

    // Update tech table — show correct th/td per language
    document.querySelectorAll('.tech-table tr').forEach(function (row) {
      var cells = row.querySelectorAll('th[data-lang], td[data-lang]');
      cells.forEach(function (cell) {
        cell.style.display = cell.getAttribute('data-lang') === lang ? '' : 'none';
      });
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable
    }
  }

  // Init from saved preference or default to 'ko'
  var saved = 'ko';
  try {
    saved = localStorage.getItem(STORAGE_KEY) || 'ko';
  } catch (e) {
    // localStorage unavailable
  }
  setLang(saved);

  // Bind toggle buttons
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });
})();
