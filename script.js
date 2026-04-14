console.log("Связь установлена! Скрипт работает.");
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('userName');
const welcomeMessage = document.getElementById('welcomeMessage');

greetButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        welcomeMessage.textContent = `Шалом, ${name}! Мы рады видеть тебя, скинь денег на карту по номеру - +7 (999) 888-12-34`;
        nameInput.value = ''; // Очистить поле после нажатия
    } else {
        alert('Пожалуйста, введи свое имя');
    }
});