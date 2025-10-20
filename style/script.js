window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabContent'),
          tabContent = document.querySelectorAll('.tabb'),
          tabParent = document.querySelector('.tab-parent');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target.closest('.tabContent');
        if (target) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


  
    const slides = document.querySelectorAll('.name');
    const prev = document.querySelector('.arrow-l');
    const next = document.querySelector('.arrow-r');
    const indicatorsContainer = document.getElementById('sliderIndicators');



    let SlideIndex = 0,

        SlideIndexz = 0;

    function slid(m){
        m.forEach(item=>{
            item.style.display="none";
            item.classList.remove('slide-fade-in', 'slide-fade-out');
        });
        m[SlideIndex].style.display="block";
        m[SlideIndex].classList.add('slide-fade-in');
    }
    





    function showSlides(n){
        if(n>slides.length-1){
            SlideIndex=0
        }
        if(n<0){
            SlideIndex=slides.length-1
        }
        slid(slides)
    }
    showSlides(SlideIndex)




    function plusSlide(n){

        const currentSlide = slides[SlideIndex];
        if (currentSlide) {
            currentSlide.classList.add('slide-fade-out');
        }
        
      
        setTimeout(() => {
            showSlides(SlideIndex+=n);
        }, 250); 
    }
    next.addEventListener('click', ()=>{
        plusSlide(1)
    })
    prev.addEventListener('click', ()=>{
        plusSlide(-1)
    })
    
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
             document.addEventListener('click', function(event) {
                if (burgerMenu.classList.contains('active') && 
                    !burgerMenu.contains(event.target) && 
                    !event.target.closest('.burger-open-button')) {
                    burgerMenu.classList.remove('active');
                }
            });
            




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