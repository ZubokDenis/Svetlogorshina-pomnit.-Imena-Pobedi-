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


    const slides = document.querySelectorAll('.name'),
        prev = document.querySelector('.arrow-l'),
        next = document.querySelector('.arrow-r');



    let SlideIndex = 0,

        SlideIndexz = 0;

    function slid(m){
        m.forEach(item=>item.style.display="none");
        m[SlideIndex].style.display="block";
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
        showSlides(SlideIndex+=n)
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
            
            // Открытие меню
            openButtons.forEach(button => {
                button.addEventListener('click', function() {
                    burgerMenu.classList.add('active');
                });
            });
            
            // Закрытие меню
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    burgerMenu.classList.remove('active');
                });
            });
            




    const galleryImages = document.querySelectorAll('img:not(.no-open-img)');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    let isZoomed = false;
    
    // Открытие модального окна при клике на фото (кроме .no-open-img)
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.classList.add('active');
            isZoomed = false;
        });
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    // Закрытие при клике на затемненную область
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Приближение/отдаление при клике на изображение
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
    
    // Закрытие по клавише ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
})