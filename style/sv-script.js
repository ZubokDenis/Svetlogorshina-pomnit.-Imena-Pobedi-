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