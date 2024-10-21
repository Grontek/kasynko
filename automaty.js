const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '🔔', '💰'];
const spinButton = document.getElementById('spin-button');
const resultDisplay = document.getElementById('result');

spinButton.addEventListener('click', () => {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol3 = symbols[Math.floor(Math.random() * symbols.length)];

    reel1.textContent = randomSymbol1;
    reel2.textContent = randomSymbol2;
    reel3.textContent = randomSymbol3;

    checkResult(randomSymbol1, randomSymbol2, randomSymbol3);
});

function checkResult(symbol1, symbol2, symbol3) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        resultDisplay.textContent = 'Gratulacje! Wygrałeś!';
        showAlert('Gratulacje! Wygrałeś!');
    } else {
        resultDisplay.textContent = 'Spróbuj ponownie!';
    }
}

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '0';
    alertDiv.style.left = '0';
    alertDiv.style.width = '100%';
    alertDiv.style.height = '100%';
    alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertDiv.style.color = 'white';
    alertDiv.style.display = 'flex';
    alertDiv.style.justifyContent = 'center';
    alertDiv.style.alignItems = 'center';
    alertDiv.style.fontSize = '2em';
    alertDiv.style.zIndex = '1000';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000);
}
11111111111111
