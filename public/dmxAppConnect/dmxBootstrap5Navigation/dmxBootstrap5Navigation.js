// Bootstrap 5 Navigation
document.addEventListener('DOMContentLoaded', function(event) {

  window.addEventListener('popstate', _update);
  window.addEventListener('pushstate', _update);

  _update();

  function _update() {
  	var url = window.location.href;

  	document.querySelectorAll('a.nav-link:not([data-bs-toggle]), a.dropdown-item').forEach(function(elem) {
   		elem.classList.toggle('active', elem.href == url || elem.href == url.split("?")[0].split("#")[0]);
  	});

    document.querySelectorAll('a.dropdown-item.active').forEach(function(elem) {
      var theItem = elem.closest('.nav-item.dropdown');
      if (theItem) {
        var theToggle = theItem.querySelector('.dropdown-toggle');
        if (theToggle) {
          theToggle.classList.toggle('active');
        }
      }
  	});
  }
});