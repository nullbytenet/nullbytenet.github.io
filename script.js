const logo = document.getElementById('dvd-logo');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let x = Math.random() * (screenWidth - logo.offsetWidth);
let y = Math.random() * (screenHeight - logo.offsetHeight);
let dx = 2;
let dy = 2;

function moveLogo() {
    x += dx;
    y += dy;

    // Reverse direction if logo hits the edges
    if (x + logo.offsetWidth > screenWidth || x < 0) {
        dx = -dx;
        logo.style.color = getRandomColor();
    }
    if (y + logo.offsetHeight > screenHeight || y < 0) {
        dy = -dy;
        logo.style.color = getRandomColor();
    }

    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    requestAnimationFrame(moveLogo);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

moveLogo();
