
// navigation bar controls for media screens
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.querySelector('.navbar');
    const backArrow = document.querySelector('.back-arrow'); 

    
    navToggle.addEventListener('change', function() {
        if (navToggle.checked) {
            backArrow.style.display = 'block';
        } else {
            backArrow.style.display = 'none';
        }
        navBar.style.transition = navToggle.checked ? 'transform 0.3s ease-in-out' : 'none';
    });

    
    navBar.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.checked = false;
            backArrow.style.display = 'none'; 
        });
    });

    
    window.addEventListener('resize', function() {
        navBar.style.transition = 'none';
    });

    
    backArrow.addEventListener('click', function(e) {
        e.preventDefault();
        navToggle.checked = false; 
        backArrow.style.display = 'none';
    });
});