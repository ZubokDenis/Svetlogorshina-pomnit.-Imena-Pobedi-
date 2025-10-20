window.addEventListener('DOMContentLoaded', ()=>{





    


    
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

        document.addEventListener('click', function(event) {
            const target = event.target;
            if (burgerNav.classList.contains('active') &&
                !burgerNav.contains(target) &&
                !target.closest('#burgerBtn')) {
                burgerNav.classList.remove('active');
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


           document.addEventListener('click', function(event) {
                if (burgerMenu.classList.contains('active') && 
                    !burgerMenu.contains(event.target) && 
                    !event.target.closest('.burger-open-button')) {
                    burgerMenu.classList.remove('active');
                }
            });
})