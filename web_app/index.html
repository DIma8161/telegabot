<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Расклад Таро</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background: #0a0a0a;
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Анимированный фон */
        .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: radial-gradient(ellipse at top, #1a0e3e 0%, #0a0a0a 50%);
        }

        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s infinite ease-in-out;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 600px;
            width: 100%;
            min-height: 100vh;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h1 {
            font-family: 'Cinzel', serif;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite, floatTitle 3s ease-in-out infinite;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
            letter-spacing: 3px;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes floatTitle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .subtitle {
            font-family: 'Cinzel', serif;
            font-size: 14px;
            color: #b8b8d1;
            margin-bottom: 30px;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0;
            animation: fadeInUp 1s ease forwards 0.3s;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .question {
            font-size: 16px;
            color: #e0e0ff;
            margin-bottom: 40px;
            padding: 20px 25px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 15px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            opacity: 0;
            animation: fadeInUp 1s ease forwards 0.5s;
            position: relative;
            overflow: hidden;
        }

        .question::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .deck-container {
            perspective: 2000px;
            margin: 50px auto;
            position: relative;
            height: 280px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .card {
            width: 150px;
            height: 240px;
            position: absolute;
            transform-style: preserve-3d;
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            cursor: pointer;
            border-radius: 15px;
            filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.5));
        }

        .card:hover:not(.flipped) {
            transform: translateY(-10px) scale(1.05);
            filter: drop-shadow(0 20px 40px rgba(255, 215, 0, 0.3));
        }

        .card.stacked {
            transform: translateY(0) scale(0.95);
            opacity: 0;
            animation: cardEntrance 0.8s ease forwards;
        }

        @keyframes cardEntrance {
            0% {
                opacity: 0;
                transform: translateY(100px) rotateX(-90deg) scale(0.5);
            }
            100% {
                opacity: 1;
                transform: translateY(0) rotateX(0deg) scale(0.95);
            }
        }

        .card.spread-1 {
            transform: translateX(0) translateY(0) scale(1);
            animation: spreadCenter 0.8s ease forwards;
        }

        .card.spread-2 {
            transform: translateX(-180px) translateY(0) scale(1);
            animation: spreadLeft 0.8s ease forwards;
        }

        .card.spread-3 {
            transform: translateX(180px) translateY(0) scale(1);
            animation: spreadRight 0.8s ease forwards;
        }

        @keyframes spreadCenter {
            from {
                transform: translateX(0) translateY(0) rotateY(0deg) scale(0.95);
            }
            to {
                transform: translateX(0) translateY(0) rotateY(0deg) scale(1);
            }
        }

        @keyframes spreadLeft {
            from {
                transform: translateX(0) translateY(0) rotateY(0deg) scale(0.95);
            }
            to {
                transform: translateX(-180px) translateY(0) rotateY(-15deg) scale(1);
            }
        }

        @keyframes spreadRight {
            from {
                transform: translateX(0) translateY(0) rotateY(0deg) scale(0.95);
            }
            to {
                transform: translateX(180px) translateY(0) rotateY(15deg) scale(1);
            }
        }

        .card.flipped .card-back {
            transform: rotateY(180deg);
        }

        .card.flipped .card-front {
            transform: rotateY(0deg);
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.6s;
        }

        .card-back {
            background: linear-gradient(135deg, #1e0a3e 0%, #3d1e6d 50%, #1e0a3e 100%);
            border: 3px solid #ffd700;
            box-shadow: 
                0 0 20px rgba(255, 215, 0, 0.3),
                inset 0 0 30px rgba(255, 215, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .card-back::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            height: 80%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }

        .card-back-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .card-back-emoji {
            font-size: 60px;
            margin-bottom: 15px;
            animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .card-back-text {
            font-family: 'Cinzel', serif;
            font-size: 16px;
            letter-spacing: 4px;
            color: #ffd700;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .card-front {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            color: #1a1a2e;
            transform: rotateY(-180deg);
            padding: 25px;
            border: 3px solid #ffd700;
            box-shadow: 
                0 0 30px rgba(255, 215, 0, 0.5),
                inset 0 0 20px rgba(255, 215, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .card-front::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent 0%, rgba(255, 215, 0, 0.1) 50%, transparent 100%);
            animation: shine 3s ease-in-out infinite;
        }

        @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .card-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            justify-content: center;
        }

        .card-emoji {
            font-size: 60px;
            margin-bottom: 15px;
            animation: bounceIn 0.6s ease;
        }

        @keyframes bounceIn {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }

        .card-name {
            font-family: 'Cinzel', serif;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            word-wrap: break-word;
            color: #1a0e3e;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .card-reversed {
            color: #e74c3c;
            font-size: 13px;
            margin-top: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .instructions {
            font-size: 18px;
            color: #ffd700;
            margin: 30px 0;
            padding: 20px 30px;
            background: rgba(255, 215, 0, 0.05);
            border-radius: 15px;
            border: 2px solid rgba(255, 215, 0, 0.3);
            backdrop-filter: blur(10px);
            animation: pulseGlow 2s ease-in-out infinite;
            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
            text-align: center;
        }

        @keyframes pulseGlow {
            0%, 100% { 
                transform: scale(1); 
                box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
            }
            50% { 
                transform: scale(1.02); 
                box-shadow: 0 12px 40px rgba(255, 215, 0, 0.2);
            }
        }

        .button-container {
            margin-top: 40px;
            display: none;
            animation: fadeInUp 0.6s ease forwards;
        }

        .btn {
            font-family: 'Cinzel', serif;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a0e3e;
            border: none;
            padding: 18px 50px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 
                0 10px 30px rgba(255, 215, 0, 0.3),
                0 0 20px rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 
                0 15px 40px rgba(255, 215, 0, 0.5),
                0 0 30px rgba(255, 215, 0, 0.3);
        }

        .btn:active {
            transform: translateY(-1px) scale(1.02);
        }

        .btn span {
            position: relative;
            z-index: 1;
        }

        .selected-cards {
            margin-top: 40px;
            display: none;
            width: 100%;
            max-width: 500px;
            animation: fadeInUp 0.6s ease forwards;
        }

        .selected-cards h3 {
            font-family: 'Cinzel', serif;
            font-size: 22px;
            margin-bottom: 20px;
            color: #ffd700;
            text-align: center;
            letter-spacing: 2px;
        }

        .selected-card-item {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px 20px;
            margin: 12px 0;
            border-radius: 12px;
            border-left: 4px solid #ffd700;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            animation: slideInRight 0.5s ease forwards;
            opacity: 0;
        }

        .selected-card-item:nth-child(2) { animation-delay: 0.1s; }
        .selected-card-item:nth-child(3) { animation-delay: 0.2s; }
        .selected-card-item:nth-child(4) { animation-delay: 0.3s; }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .selected-card-item:hover {
            transform: translateX(5px);
            border-left-color: #ffed4e;
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
        }

        .loading {
            display: none;
            font-size: 18px;
            color: #ffd700;
            margin-top: 30px;
            text-align: center;
        }

        .loading.active {
            display: block;
            animation: fadeIn 0.5s;
        }

        .loading-dots {
            display: inline-block;
            animation: loadingDots 1.5s infinite;
        }

        @keyframes loadingDots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
        }

        /* Медиа запросы для мобильных */
        @media (max-width: 600px) {
            h1 { font-size: 28px; }
            .card { width: 120px; height: 190px; }
            .card.spread-2 { transform: translateX(-140px) translateY(0) scale(1); }
            .card.spread-3 { transform: translateX(140px) translateY(0) scale(1); }
            .card-emoji { font-size: 45px; }
            .card-name { font-size: 13px; }
        }
    </style>
</head>
<body>
    <div class="animated-bg"></div>
    <div class="stars" id="stars"></div>

    <div class="container">
        <h1>✨ Расклад Таро ✨</h1>
        <div class="subtitle">Откройте тайны судьбы</div>
        <div class="question" id="question"></div>
        <div class="instructions" id="instructions">Нажмите на карты, чтобы открыть их...</div>
        
        <div class="deck-container" id="deckContainer"></div>
        
        <div class="selected-cards" id="selectedCards"></div>
        
        <div class="button-container" id="buttonContainer">
            <button class="btn" id="confirmBtn">
                <span>Получить толкование</span>
            </button>
        </div>
        
        <div class="loading" id="loading">
            Отправка данных в бот<span class="loading-dots">...</span>
        </div>
    </div>

    <script>
        // Создаем звезды
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Инициализация Telegram Web App
        let tg = window.Telegram.WebApp;
        tg.expand();
        tg.MainButton.hide();

        // Получаем данные из URL параметров
        const urlParams = new URLSearchParams(window.location.search);
        const question = urlParams.get('question') || 'Без конкретного вопроса';
        const numCards = parseInt(urlParams.get('num_cards')) || 3;
        const layoutName = urlParams.get('layout_name') || 'Три карты';
        const mode = urlParams.get('mode') || 'auto';

        document.getElementById('question').textContent = `Вопрос: ${question}`;

        // Полная колода Таро (78 карт)
        const tarotCards = [
            // Старшие Арканы
            {name: "Шут", emoji: "🤡"},
            {name: "Маг", emoji: "🧙‍♂️"},
            {name: "Жрица", emoji: "🔮"},
            {name: "Императрица", emoji: "👸"},
            {name: "Император", emoji: "🤴"},
            {name: "Иерофант", emoji: "⛪"},
            {name: "Влюблённые", emoji: "💕"},
            {name: "Колесница", emoji: "🛡️"},
            {name: "Сила", emoji: "💪"},
            {name: "Отшельник", emoji: "🕯️"},
            {name: "Колесо Фортуны", emoji: "🎡"},
            {name: "Справедливость", emoji: "⚖️"},
            {name: "Повешенный", emoji: "🙃"},
            {name: "Смерть", emoji: "☠️"},
            {name: "Умеренность", emoji: "🏹"},
            {name: "Дьявол", emoji: "😈"},
            {name: "Башня", emoji: "💥"},
            {name: "Звезда", emoji: "⭐"},
            {name: "Луна", emoji: "🌙"},
            {name: "Солнце", emoji: "🌞"},
            {name: "Суд", emoji: "📯"},
            {name: "Мир", emoji: "🌍"},
            // Младшие Арканы - Жезлы
            {name: "Туз Жезлов", emoji: "🪄"},
            {name: "Двойка Жезлов", emoji: "🪄"},
            {name: "Тройка Жезлов", emoji: "🪄"},
            {name: "Четверка Жезлов", emoji: "🪄"},
            {name: "Пятерка Жезлов", emoji: "🪄"},
            {name: "Шестерка Жезлов", emoji: "🪄"},
            {name: "Семерка Жезлов", emoji: "🪄"},
            {name: "Восьмерка Жезлов", emoji: "🪄"},
            {name: "Девятка Жезлов", emoji: "🪄"},
            {name: "Десятка Жезлов", emoji: "🪄"},
            {name: "Паж Жезлов", emoji: "🪄"},
            {name: "Рыцарь Жезлов", emoji: "🪄"},
            {name: "Королева Жезлов", emoji: "🪄"},
            {name: "Король Жезлов", emoji: "🪄"},
            // Кубки
            {name: "Туз Кубков", emoji: "🏆"},
            {name: "Двойка Кубков", emoji: "🏆"},
            {name: "Тройка Кубков", emoji: "🏆"},
            {name: "Четверка Кубков", emoji: "🏆"},
            {name: "Пятерка Кубков", emoji: "🏆"},
            {name: "Шестерка Кубков", emoji: "🏆"},
            {name: "Семерка Кубков", emoji: "🏆"},
            {name: "Восьмерка Кубков", emoji: "🏆"},
            {name: "Девятка Кубков", emoji: "🏆"},
            {name: "Десятка Кубков", emoji: "🏆"},
            {name: "Паж Кубков", emoji: "🏆"},
            {name: "Рыцарь Кубков", emoji: "🏆"},
            {name: "Королева Кубков", emoji: "🏆"},
            {name: "Король Кубков", emoji: "🏆"},
            // Мечи
            {name: "Туз Мечей", emoji: "⚔️"},
            {name: "Двойка Мечей", emoji: "⚔️"},
            {name: "Тройка Мечей", emoji: "⚔️"},
            {name: "Четверка Мечей", emoji: "⚔️"},
            {name: "Пятерка Мечей", emoji: "⚔️"},
            {name: "Шестерка Мечей", emoji: "⚔️"},
            {name: "Семерка Мечей", emoji: "⚔️"},
            {name: "Восьмерка Мечей", emoji: "⚔️"},
            {name: "Девятка Мечей", emoji: "⚔️"},
            {name: "Десятка Мечей", emoji: "⚔️"},
            {name: "Паж Мечей", emoji: "⚔️"},
            {name: "Рыцарь Мечей", emoji: "⚔️"},
            {name: "Королева Мечей", emoji: "⚔️"},
            {name: "Король Мечей", emoji: "⚔️"},
            // Пентакли
            {name: "Туз Пентаклей", emoji: "🪙"},
            {name: "Двойка Пентаклей", emoji: "🪙"},
            {name: "Тройка Пентаклей", emoji: "🪙"},
            {name: "Четверка Пентаклей", emoji: "🪙"},
            {name: "Пятерка Пентаклей", emoji: "🪙"},
            {name: "Шестерка Пентаклей", emoji: "🪙"},
            {name: "Семерка Пентаклей", emoji: "🪙"},
            {name: "Восьмерка Пентаклей", emoji: "🪙"},
            {name: "Девятка Пентаклей", emoji: "🪙"},
            {name: "Десятка Пентаклей", emoji: "🪙"},
            {name: "Паж Пентаклей", emoji: "🪙"},
            {name: "Рыцарь Пентаклей", emoji: "🪙"},
            {name: "Королева Пентаклей", emoji: "🪙"},
            {name: "Король Пентаклей", emoji: "🪙"}
        ];

        // Перемешиваем и выбираем случайные карты
        function shuffle(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        const shuffledCards = shuffle(tarotCards).slice(0, numCards);
        const selectedCards = [];
        let cardsFlipped = 0;

        // Создаем карты
        const deckContainer = document.getElementById('deckContainer');
        shuffledCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card stacked';
            cardElement.dataset.index = index;
            cardElement.style.animationDelay = `${index * 0.15}s`;
            
            const reversed = Math.random() > 0.5;
            card.reversed = reversed;
            
            cardElement.innerHTML = `
                <div class="card-face card-back">
                    <div class="card-back-content">
                        <div class="card-back-emoji">🔮</div>
                        <div class="card-back-text">ТАРО</div>
                    </div>
                </div>
                <div class="card-face card-front">
                    <div class="card-content">
                        <div class="card-emoji">${card.emoji}</div>
                        <div class="card-name">${card.name}</div>
                        ${reversed ? '<div class="card-reversed">Перевёрнутая</div>' : ''}
                    </div>
                </div>
            `;
            
            deckContainer.appendChild(cardElement);
            
            // Анимация раскладки карт
            setTimeout(() => {
                if (numCards === 1) {
                    cardElement.classList.remove('stacked');
                    cardElement.classList.add('spread-1');
                } else if (numCards === 3) {
                    cardElement.classList.remove('stacked');
                    if (index === 0) cardElement.classList.add('spread-2');
                    else if (index === 1) cardElement.classList.add('spread-1');
                    else cardElement.classList.add('spread-3');
                }
            }, 800 + index * 200);
            
            // Обработчик клика на карту
            cardElement.addEventListener('click', function() {
                if (!this.classList.contains('flipped')) {
                    this.classList.add('flipped');
                    cardsFlipped++;
                    
                    selectedCards.push({
                        name: card.name,
                        emoji: card.emoji,
                        reversed: card.reversed
                    });
                    
                    updateSelectedCards();
                    
                    if (cardsFlipped === numCards) {
                        setTimeout(() => {
                            document.getElementById('instructions').textContent = '✨ Все карты выбраны! Готово к толкованию ✨';
                            document.getElementById('buttonContainer').style.display = 'block';
                        }, 500);
                    }
                }
            });
        });

        function updateSelectedCards() {
            const container = document.getElementById('selectedCards');
            container.style.display = 'block';
            container.innerHTML = '<h3>✨ Выбранные карты ✨</h3>';
            
            selectedCards.forEach((card, index) => {
                const cardItem = document.createElement('div');
                cardItem.className = 'selected-card-item';
                cardItem.innerHTML = `
                    ${card.emoji} <strong>${card.name}</strong> ${card.reversed ? '<span style="color: #e74c3c;">(Перевёрнутая)</span>' : ''}
                `;
                container.appendChild(cardItem);
            });
        }

        // Отправка данных обратно в бот
        document.getElementById('confirmBtn').addEventListener('click', function() {
            document.getElementById('loading').classList.add('active');
            document.getElementById('buttonContainer').style.display = 'none';
            
            const data = {
                question: question,
                layout_name: layoutName,
                num_cards: numCards,
                cards: selectedCards,
                mode: mode
            };
            
            // Отправляем данные через Telegram WebApp API
            tg.sendData(JSON.stringify(data));
            
            // Закрываем Mini App
            setTimeout(() => {
                tg.close();
            }, 1000);
        });

        // Обработка кнопки "Назад" в Telegram
        tg.BackButton.show();
        tg.BackButton.onClick(function() {
            tg.close();
        });
    </script>
</body>
</html>
