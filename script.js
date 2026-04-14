// 1. Находим элементы
const goalInput = document.getElementById('goalInput');
const addGoalButton = document.getElementById('addGoalButton');
const goalsContainer = document.getElementById('goalsContainer');

// --- ФУНКЦИЯ 1: Отрисовка карточки ---
// Вынесли в отдельную функцию, чтобы вызывать её и при клике, и при загрузке
function createGoalCard(text) {
    const newGoal = document.createElement('div');
    newGoal.classList.add('goal-item');
    newGoal.textContent = `🚀 ${text}`;
    goalsContainer.appendChild(newGoal);
}

// --- ФУНКЦИЯ 2: Загрузка из памяти ---
function loadGoals() {
    // Берем данные из хранилища под именем 'myGoals'
    const savedGoals = JSON.parse(localStorage.getItem('myGoals')) || [];
    // Для каждой сохраненной цели запускаем отрисовку
    savedGoals.forEach(goalText => createGoalCard(goalText));
}

// 2. Логика кнопки "Добавить"
addGoalButton.addEventListener('click', () => {
    const goalText = goalInput.value;

    if (goalText) {
        // Рисуем на экране
        createGoalCard(goalText);

        // СОХРАНЕНИЕ:
        // Достаем старый список, добавляем новую цель, сохраняем обратно
        const savedGoals = JSON.parse(localStorage.getItem('myGoals')) || [];
        savedGoals.push(goalText);
        localStorage.setItem('myGoals', JSON.stringify(savedGoals));

        goalInput.value = '';
    } else {
        alert('Сначала напиши цель!');
    }
});

// 3. ЗАПУСК: Как только скрипт загрузился, проверяем память
loadGoals();
const clearGoalsButton = document.getElementById('clearGoalsButton');

clearGoalsButton.addEventListener('click', () => {
    if (confirm('Точно удалить все цели?')) { // Спрашиваем подтверждение
        // 1. Очищаем память браузера
        localStorage.removeItem('myGoals');
        
        // 2. Очищаем экран (удаляем все дочерние элементы контейнера)
        goalsContainer.innerHTML = '';
        
        // 3. (Опционально) Если хочешь вернуть дефолтные цели, можно их прописать тут
        // Но сейчас мы просто делаем чистый лист.
    }
});
