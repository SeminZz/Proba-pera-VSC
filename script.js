// --- БЛОК 1: ПРИВЕТСТВИЕ (То, что у тебя уже было) ---
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput'); // Проверь, чтобы тут было nameInput, а не userName!
const welcomeMessage = document.getElementById('welcomeMessage');

greetButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        welcomeMessage.textContent = `Шалом, ${name}! Мы рады тебя видеть.`;
        nameInput.value = '';
    } else {
        alert('Пожалуйста, введи свое имя, мне важно знать кто Вы!');
    }
});

// --- БЛОК 2: ДОБАВЛЕНИЕ ЦЕЛЕЙ (Новое) ---

// 1. Находим новые элементы
const goalInput = document.getElementById('goalInput');
const addGoalButton = document.getElementById('addGoalButton');
const goalsContainer = document.getElementById('goalsContainer');

// 2. Вешаем событие на кнопку добавления
addGoalButton.addEventListener('click', () => {
    const goalText = goalInput.value; // Берем текст из поля

    if (goalText) {
        // Создаем новый элемент (карточку)
        const newGoal = document.createElement('div');
        
        // Даем ему класс для красоты (из CSS)
        newGoal.classList.add('goal-item');
        
        // Добавляем текст и иконку
        newGoal.textContent = `🚀 ${goalText}`;
        
        // Кладем новую карточку в наш контейнер
        goalsContainer.appendChild(newGoal);
        
        // Очищаем поле ввода
        goalInput.value = '';
    } else {
        alert('Сначала напиши название цели!');
    }
});