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
        document.body.style.background = 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
        
        // Agregar más corazones
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
        
        // Crear confeti
        createConfetti();
    });
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 4 + Math.random() * 6 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
        
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
        balloon.style.backgroundColor = ['#ff6b81', '#ff4757', '#ff6348', '#ffa502', '#eccc68'][Math.floor(Math.random() * 5)];
        balloonsContainer.appendChild(balloon);
        
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
            confetti.style.backgroundColor = ['#ff4757', '#ff6b81', '#ffa502', '#2ed573', '#1e90ff'][Math.floor(Math.random() * 5)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiContainer.appendChild(confetti);
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // [...] (mantén todo el código existente)
    
    // Botón de sorpresa (versión corregida)
    const surpriseBtn = document.getElementById('surpriseBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    surpriseBtn.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        this.style.display = 'none'; // Opcional: oculta el botón después de click
        
        // Activa confeti (nuevo código)
        createConfetti();
        
        // Cambio de fondo (opcional)
        document.body.style.background = 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
    });
    
    // Función de confeti (asegúrate que existe)
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = 3 + Math.random() * 4 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            // Colores aleatorios
            const colors = ['#ff4757', '#ff6b81', '#ffa502', '#2ed573', '#1e90ff', '#5352ed'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Formas
            confetti.style.width = Math.random() * 15 + 5 + 'px';
            confetti.style.height = Math.random() * 15 + 5 + 'px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            confettiContainer.appendChild(confetti);
            
            // Eliminar después de animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // [...] (resto del código existente)
});
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    // 1. Crear confeti (usando tu función existente)
    createConfetti();
    
    // 2. Animación del mensaje
    hiddenMessage.classList.add('show');
    
    // 3. Cambiar fondo (opcional)
    document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    
    // 4. Ocultar botón después de click
    this.style.display = 'none';
    
    // 5. Efecto de latido continuo en el mensaje
    setInterval(() => {
        hiddenMessage.style.transform = 'scale(1.02)';
        setTimeout(() => {
            hiddenMessage.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
    
});


