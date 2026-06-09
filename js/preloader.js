(function () {
  'use strict';

  document.body.classList.add('preloader-active');

  var preloaderHTML =
    '<div class="preloader" id="preloader" role="alert" aria-live="polite" aria-label="Loading FreshMart">' +
      '<div class="preloader-leaves" aria-hidden="true">' +
        '<svg class="preloader-leaf" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.04-2.44C8.14 16.87 11.07 13 17 13V8z"/></svg>' +
        '<svg class="preloader-leaf" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.04-2.44C8.14 16.87 11.07 13 17 13V8z"/></svg>' +
        '<svg class="preloader-leaf" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.04-2.44C8.14 16.87 11.07 13 17 13V8z"/></svg>' +
        '<svg class="preloader-leaf" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.04-2.44C8.14 16.87 11.07 13 17 13V8z"/></svg>' +
      '</div>' +
      '<div class="preloader-content">' +
        '<div class="preloader-logo">' +
          '<img src="assets/stackly-store-logo.webp" alt="Stackly Mart" class="brand-logo">' +
        '</div>' +
        '<p class="preloader-tagline">Loading fresh deals&hellip;</p>' +
        '<div class="preloader-bar-wrap">' +
          '<div class="preloader-bar"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('afterbegin', preloaderHTML);

  var startTime = Date.now();
  var minDuration = 2000;

  function hidePreloader() {
    var elapsed = Date.now() - startTime;
    var remaining = Math.max(0, minDuration - elapsed);

    setTimeout(function () {
      var preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
        document.body.classList.remove('preloader-active');
        setTimeout(function () {
          preloader.remove();
        }, 600);
      }
    }, remaining);
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }
})();
