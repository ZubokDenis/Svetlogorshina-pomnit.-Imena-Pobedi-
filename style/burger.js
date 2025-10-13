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
            modalImage.classList.remove('zoomed');
            isZoomed = false;
        });
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    modalImage.addEventListener('click', function(e) {
        e.stopPropagation(); 
        
        if (!isZoomed) {
            this.classList.add('zoomed');
            isZoomed = true;
        } else {
            
            this.classList.remove('zoomed');
            isZoomed = false;
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        modalImage.classList.remove('zoomed');
        isZoomed = false;
    }


    


    
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