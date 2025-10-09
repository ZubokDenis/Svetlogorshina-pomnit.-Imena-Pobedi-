window.addEventListener('DOMContentLoaded', ()=>{






    const galleryImages = document.querySelectorAll('img:not(.no-open-img)');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    let isZoomed = false;
    
   
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.classList.add('active');
            isZoomed = false;
        });
    });
    
 
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
 
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
     document.addEventListener('click', function(event) {
                if (burgerMenu.classList.contains('active') && 
                    !burgerMenu.contains(event.target) && 
                    !event.target.closest('.burger-open-button')) {
                    burgerMenu.classList.remove('active');
                }
            });
    modalImage.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!isZoomed) {
            this.style.transform = 'scale(2)';
            this.style.cursor = 'zoom-out';
        } else {
            this.style.transform = 'scale(1)';
            this.style.cursor = 'zoom-in';
        }
        
        isZoomed = !isZoomed;
    });
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });




    
    const burgerMenu = document.querySelector('.burger-menu');
            const openButtons = document.querySelectorAll('.burger-open-button');
            const closeButtons = document.querySelectorAll('.burger-close-button');
          
            openButtons.forEach(button => {
                button.addEventListener('click', function() {
                    burgerMenu.classList.add('active');
                });
            });
            
          
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    burgerMenu.classList.remove('active');
                });
            });













            //----------------------------------------------



            const burgerBtn = document.getElementById('burgerBtn');
        const burgerNav = document.getElementById('burgerNav');
        const navLinks = document.querySelectorAll('.nav-link');
        const backToTop = document.getElementById('backToTop');
        
  
        burgerBtn.addEventListener('click', () => {
            burgerNav.classList.toggle('active');
        });
        
   
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                burgerNav.classList.remove('active');
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });




         const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
})