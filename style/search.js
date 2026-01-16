// Поиск людей на странице "Имена Победы"
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsCount = document.getElementById('searchResultsCount');
    const personCards = document.querySelectorAll('.person .main');
    
    if (!searchInput) return;
    
    // Функция нормализации текста для поиска (убирает лишние пробелы, приводит к нижнему регистру)
    function normalizeText(text) {
        return text.toLowerCase().trim().replace(/\s+/g, ' ');
    }
    
    // Функция поиска
    function performSearch() {
        const searchTerm = normalizeText(searchInput.value);
        let visibleCount = 0;
        
        personCards.forEach(card => {
            // Получаем имя из заголовка h3
            const nameElement = card.querySelector('.text h3');
            if (!nameElement) {
                card.classList.add('hidden');
                return;
            }
            
            const name = normalizeText(nameElement.textContent);
            const description = card.querySelector('.text p') 
                ? normalizeText(card.querySelector('.text p').textContent) 
                : '';
            
            // Ищем совпадения в имени или описании
            const matches = name.includes(searchTerm) || description.includes(searchTerm);
            
            if (searchTerm === '' || matches) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Обновляем счетчик результатов
        if (searchTerm === '') {
            searchResultsCount.textContent = '';
        } else {
            const total = personCards.length;
            searchResultsCount.textContent = `Найдено: ${visibleCount} из ${total}`;
        }
    }
    
    // Обработчик ввода
    searchInput.addEventListener('input', performSearch);
    
    // Обработчик очистки (при нажатии Escape)
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
            searchInput.blur();
        }
    });
});

