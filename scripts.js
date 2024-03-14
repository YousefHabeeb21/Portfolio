

 // gmail
    function openGmail() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            // Open Gmail app for Android
            window.open("intent://compose?to=yousefmh21@gmail.com#Intent;scheme=mailto;package=com.google.android.gm;end");
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Open Gmail app for iOS
            window.open("googlegmail://co?to=yousefmh21@gmail.com");
        } else {
            // Open Gmail web for other devices
            window.open("https://mail.google.com/mail/?view=cm&to=yousefmh21@gmail.com");
        }
    }




    //smooth scroll
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            let targetID = this.getAttribute('href');
            let targetSection = document.querySelector(targetID);
    
            // Check if the screen width is less than or equal to 768px for mobile devices
            if (window.innerWidth <= 768) {
                // For mobile devices, scroll to the top of the section
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Change from 'center' to 'start' to align with the top
                    });
                }
            } else {
                // For larger screens, keep the original behavior to scroll to the center
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }
        });
    });

   
    



// navigation bar
    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.getElementById('nav-toggle');
        const navBar = document.querySelector('.navbar');
        const backArrow = document.querySelector('.back-arrow'); // Get the back arrow

        // Show the back arrow when the menu is opened
        navToggle.addEventListener('change', function() {
            if (navToggle.checked) {
                backArrow.style.display = 'block';
            } else {
                backArrow.style.display = 'none';
            }
            navBar.style.transition = navToggle.checked ? 'transform 0.3s ease-in-out' : 'none';
        });

        // Close the navigation menu and hide the back arrow when a link is clicked
        navBar.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.checked = false;
                backArrow.style.display = 'none'; 
            });
        });

        
        window.addEventListener('resize', function() {
            navBar.style.transition = 'none';
        });

        // Close menu when the back arrow is clicked
        backArrow.addEventListener('click', function(e) {
            e.preventDefault();
            navToggle.checked = false; 
            backArrow.style.display = 'none';
        });
    });

