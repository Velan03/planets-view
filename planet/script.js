 
const planets = [
    'mercury.png',
    'venus.png',
    'earth.png',
    'mars.png',
    'jupiter.png',
    'saturn.png',
    'uranus.png',
    'neptune.png'
];

let currentPlanetIndex = 1;  

function changePlanet(index) {
    if (index === currentPlanetIndex) return;

    const foreground = document.getElementById('foreground');
    const background = document.getElementById('background');

    // Move the foreground planet downward and zoom in
    foreground.style.transform = 'translateY(100%) scale(1.5)';
    foreground.style.opacity = '0';

    // Zoom the background planet in slowly
    background.style.transform = 'scale(1)';
    background.style.opacity = '1';

    // After the transition, swap the planets
    setTimeout(() => {
        // Swap the planet images
        background.src = foreground.src;
        foreground.src = `planet-img/${planets[index]}`;

        foreground.style.transform = 'translateY(0) scale(1)';
        foreground.style.opacity = '1'; 
        background.style.transform = 'scale(0.5)';
        background.style.opacity = '0.5';
    }, 500);  

    currentPlanetIndex = index;
} 