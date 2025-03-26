document.addEventListener('DOMContentLoaded', function() {
    // Crear corazones flotantes
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
    
    // Crear globos
    const balloonsContainer = document.getElementById('balloons');
    for (let i = 0; i < 10; i++) {
        createBalloon();
    }
    
    // Botón de sorpresa
    const surpriseBtn = document.getElementById('surpriseBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    surpriseBtn.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        



        
        // Cambiar color de fondo
        document.body.style.background = 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
        
        // Agregar más corazones
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
    });
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 4 + Math.random() * 6 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = 6 + Math.random() * 10 + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        
        // Colores aleatorios
        const colors = ['#ff6b81', '#ff4757', '#ff6348', '#ffa502', '#eccc68', '#7bed9f', '#2ed573'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        balloonsContainer.appendChild(balloon);
        
        // Eliminar después de la animación
        setTimeout(() => {
            balloon.remove();
        }, 15000);
    }
    
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = 3 + Math.random() * 4 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            // Formas y colores aleatorios
            const colors = ['#ff4757', '#ff6b81', '#ffa502', '#2ed573', '#1e90ff', '#5352ed'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Formas redondas o cuadradas
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            // Rotación aleatoria
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            confettiContainer.appendChild(confetti);
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    surpriseBtn.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        this.style.display = 'none';
    });
});