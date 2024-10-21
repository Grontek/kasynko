document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('roulette-wheel');
    const button = document.getElementById('spin-button');
    const result = document.getElementById('result');
    const colors = ['green', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'green'];

    button.addEventListener('click', function() {
        const randomDegree = Math.floor(Math.random() * 360);
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${randomDegree + 3600}deg)`;

        setTimeout(() => {
            const selectedColor = colors[Math.floor((randomDegree % 360) / 36)];
            result.textContent = `Wylosowany kolor: ${selectedColor}`;
        }, 4000);
    });
});
