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
})