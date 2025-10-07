window.addEventListener('DOMContentLoaded', ()=>{











    
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
})