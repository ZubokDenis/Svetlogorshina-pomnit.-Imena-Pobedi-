// Анимации при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Функция для проверки, виден ли элемент хотя бы частично
    function isElementPartiallyVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < windowHeight && rect.bottom > 0;
    }
    
    // Анимация для элементов с классом fade-in-up
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
        
        elements.forEach(element => {
            if (isElementPartiallyVisible(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }
    
    // Анимация для карточек людей с задержкой
    function animatePersonCards() {
        const personCards = document.querySelectorAll('.person .main');
        
        personCards.forEach((card, index) => {
            card.style.setProperty('--index', index);
            
            if (isElementPartiallyVisible(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
            }
        });
    }
    
    // Анимация для секций
    function animateSections() {
        const sections = document.querySelectorAll('section:not(.person)');
        
        sections.forEach(section => {
            if (isElementPartiallyVisible(section) && !section.classList.contains('section-visible')) {
                section.classList.add('section-visible');
                
                // Анимация для заголовков
                const headings = section.querySelectorAll('h2, h3');
                headings.forEach((heading, index) => {
                    setTimeout(() => {
                        heading.style.opacity = '0';
                        heading.style.transform = 'translateY(20px)';
                        heading.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        
                        setTimeout(() => {
                            heading.style.opacity = '1';
                            heading.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 100);
                });
            }
        });
    }
    
    // Инициализация при загрузке
    animateOnScroll();
    animatePersonCards();
    animateSections();
    
    // Обработчик скролла с throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                animateOnScroll();
                animatePersonCards();
                animateSections();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Повторная проверка при изменении размера окна
    window.addEventListener('resize', function() {
        animateOnScroll();
        animatePersonCards();
        animateSections();
    });
});

