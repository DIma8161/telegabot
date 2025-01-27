document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container');
    const interpretationContainer = document.getElementById('interpretation-container');
    const initData = window.Telegram.WebApp.initData;
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    if (!initData || !initDataUnsafe) {
        alert("Ошибка: Нет данных для отображения расклада.");
        return;
    }

    const cardsData = initDataUnsafe.user.cards;
    const interpretation = initDataUnsafe.user.interpretation;

    cardsData.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const frontImg = document.createElement('img');
        frontImg.src = `images/${card.name.replace(' ', '_')}.png`;
        frontImg.alt = card.name;

        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.textContent = `${card.name} (${card.orientation})`;

        cardDiv.appendChild(frontImg);
        cardDiv.appendChild(backDiv);

        cardDiv.addEventListener('click', () => {
            cardDiv.classList.toggle('flipped');
            alert(`${card.name} (${card.orientation}):\n${card.meaning}`);
        });

        cardsContainer.appendChild(cardDiv);
    });

    // Добавление интерпретации
    interpretationContainer.innerHTML = `<h2>Интерпретация:</h2><p>${interpretation}</p>`;
});