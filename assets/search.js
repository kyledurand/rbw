document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.querySelector('.search-bar--top-bar');
  const searchToggle = document.querySelector('.search-toggle');
  
  document.addEventListener('click', function(event) {
    if (
      event.target.classList.contains('icon-search') || 
      event.target.classList.contains('search-toggle') ||
      event.target.classList.contains('input-group-field') ||
      event.target.classList.contains('site-nav__item')
    ) {} else {
      searchForm.classList.contains('visible') && searchForm.classList.remove('visible'); 
	}
  });
  
  searchToggle.onclick = () => {
    searchForm.classList.toggle('visible');
    searchForm.querySelector('input').focus();
  }
});
