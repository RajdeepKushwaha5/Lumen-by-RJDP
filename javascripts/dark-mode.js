// Dark mode toggle for Lumen theme
(function () {
  var storageKey = 'lumen-theme';
  var doc = document.documentElement;
  var toggleId = 'lumen-theme-toggle';

  function applyTheme(theme) {
    if (theme === 'dark') {
      doc.setAttribute('data-theme', 'dark');
    } else {
      doc.removeAttribute('data-theme');
    }
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(t) {
    try {
      localStorage.setItem(storageKey, t);
    } catch (e) { }
  }

  function toggleTheme() {
    var current = doc.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
    updateToggleButton(next);
  }

  function updateToggleButton(theme) {
    var btn = document.getElementById(toggleId);
    if (!btn) return;
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    // Update the inline SVG inside the button (element with .theme-icon)
    var svgEl = btn.querySelector('.theme-icon');
    if (svgEl) {
      if (theme === 'dark') {
        // moon icon
        svgEl.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>';
      } else {
        // sun icon (circle + rays)
        svgEl.innerHTML = '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4" fill="none" /><path stroke="currentColor" stroke-width="1.4" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />';
      }
    }
    // Update the button title so hover/assistive tech shows state
    try {
      btn.title = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    } catch (e) { }
  }

  function init() {
    var saved = getSavedTheme();
    if (saved) applyTheme(saved);
    else applyTheme('light');

    // wire up button
    var btn = document.getElementById(toggleId);
    if (!btn) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme();
    });

    btn.addEventListener('keydown', function (e) {
      // Space/Enter activate
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleTheme();
      }
    });

    updateToggleButton(doc.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }

  // initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
