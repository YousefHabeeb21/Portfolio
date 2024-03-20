
// slides 
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[0].classList.add('active');
    let currentSlideIndex = 0;
  
    const buttons = document.querySelectorAll('.carousel-button');

    function changeSlide(newIndex) {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        const description = slide.querySelector('.description-flyout');
        if (img) {
            img.classList.remove('image-shrink');
            img.style.transform = '';
        }
        if (description) {
            description.classList.remove('description-visible');
            description.style.transform = 'translateX(100%)';
            description.style.visibility = 'hidden';
            description.style.opacity = '0';
        }
    });
    if (currentSlideIndex !== newIndex) {
        buttons.forEach(button => button.style.visibility = 'hidden'); 

        const currentSlide = slides[currentSlideIndex];
        const newSlide = slides[newIndex];

        currentSlide.style.animation = 'slideOutLeftFadeOut .5s forwards';

        
        newSlide.style.transform = 'translateX(100%)'; 
        newSlide.style.visibility = 'visible';
        newSlide.style.opacity = '1';

        setTimeout(() => {
            newSlide.style.animation = 'slideInRightFadeIn 1s forwards';
            newSlide.style.transform = 'translateX(0%)'; 
        }, 100);

        setTimeout(() => {
            currentSlide.classList.remove('active');
            currentSlide.style.visibility = 'hidden';
            currentSlide.style.opacity = '0';
            currentSlide.style.animation = '';
            newSlide.classList.add('active');
            currentSlideIndex = newIndex;

            buttons.forEach(button => button.style.visibility = 'visible');
            newSlide.scrollIntoView({behavior: 'smooth', block: 'center'});
        }, 500);
    }
}


    document.querySelector('[data-direction="prev"]').addEventListener('click', () => changeSlide((currentSlideIndex - 1 + slides.length) % slides.length));
    document.querySelector('[data-direction="next"]').addEventListener('click', () => changeSlide((currentSlideIndex + 1) % slides.length));

    slides[0].classList.add('active');
    slides[0].style.visibility = 'visible';
    slides[0].style.opacity = '1';
});







// description popout
function toggleDescription(event) {
    const infoButton = event.currentTarget;
    const slide = infoButton.closest('.carousel-slide');
    const img = slide.querySelector('img');
    const descriptionText = infoButton.getAttribute('data-description');

    
    img.classList.toggle('image-shrink');

   
    let description = slide.querySelector('.description-flyout');
    if (!description) {
        
        description = document.createElement('div');
        description.className = 'description-flyout';
        description.textContent = descriptionText; 
        slide.appendChild(description);
        
        void description.offsetHeight;
    }

    
    if (!description.style.visibility || description.style.visibility === 'hidden') {
        description.style.visibility = 'visible';
        description.style.opacity = '0';
    }

    
    if (description.classList.contains('description-visible')) {
        description.style.opacity = '0';
        setTimeout(() => {
            description.style.visibility = 'hidden';
        }, 500); 
    } else {
        description.style.visibility = 'visible';
        description.style.opacity = '1';
    }
    description.classList.toggle('description-visible');

    
    if (img.classList.contains('image-shrink')) {
        img.style.transform = 'scale(0.85) translateX(-50%)'; 
        
        const imgHeight = img.offsetHeight; 
        const descriptionHeight = description.offsetHeight; 
        const offset = (imgHeight - descriptionHeight) / 2; 
        description.style.top = `${offset}px`; 
        description.style.transform = 'translateX(90%)';
    } else {
        img.style.transform = ''; 
        description.style.top = '0'; 
        description.style.transform = ''; 
    }
}

document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', toggleDescription);
});


