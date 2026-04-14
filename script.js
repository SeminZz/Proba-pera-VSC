console.log("Связь установлена! Скрипт работает.");
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput'); // Было userName
const welcomeMessage = document.getElementById('welcomeMessage');

greetButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        welcomeMessage.textContent = `Шалом, ${name}! Мы рады видеть тебя, скинь денег на карту по номеру... Хотя ты же знаешь номер!`;
        nameInput.value = ''; // Очистить поле после нажатия
    } else {
        alert('Пожалуйста, введи свое имя');
    }
});