function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Set random position and color for the firework
    const colors = ['#ffcc00', '#ff3300', '#00ccff', '#33ff00', '#ff33cc'];
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    firework.style.left = Math.random() * 100 + 'vw';
    
    // Create an animation delay for a staggered effect
    firework.style.animationDelay = Math.random() * 1 + 's';
    
    document.querySelector('.fireworks').appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

setInterval(createFirework, 500);
