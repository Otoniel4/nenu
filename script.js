document.getElementById('surpriseBtn').addEventListener('click', function() {
    // 1. Mostrar mensaje oculto
    document.getElementById('hiddenMessage').style.display = 'block';
    
    // 2. Activar fondo morado
    document.body.classList.add('purple-bg');
    
    // 3. Configurar canvas
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // 4. Configuración de partículas
    const colors = ['#ff6b81', '#ff4757', '#ffb8c6', '#ff9ff3', '#feca57', '#e84393'];
    const particles = [];
    const particleCount = 200; // Cantidad de partículas
    
    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            size: Math.random() * 12 + 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: 0,
            rotation: Math.random() * 0.2 - 0.1,
            drift: Math.random() * 2 - 1
        });
    }
    
    // 5. Animación
    let startTime = Date.now();
    const duration = 30000; // 30 segundos
    
    function animate() {
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar partículas
        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            
            // Forma de confeti rectangular
            ctx.fillRect(-p.size/2, -p.size/3, p.size, p.size/1.5);
            
            ctx.restore();
            
            // Actualizar posición
            p.y += p.speed;
            p.x += p.drift;
            p.angle += p.rotation;
            
            // Reiniciar posición si sale de la pantalla
            if (p.y > canvas.height) {
                p.y = -p.size;
                p.x = Math.random() * canvas.width;
            }
        });
        
        // Continuar animación si no ha terminado el tiempo
        if (Date.now() - startTime < duration) {
            requestAnimationFrame(animate);
        } else {
            // Limpiar al finalizar
            canvas.remove();
        }
    }
    
    // 6. Iniciar animación
    animate();
    
    // 7. Actualizar botón
    this.disabled = true;
    this.textContent = '¡Feliz Cumpleaños! 🎉';
});
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const sound = document.getElementById('birthdaySound');
    sound.play().catch(error => {
        alert("Haz clic otra vez para activar el audio");
    });
    this.textContent = '¡Que disfrutes tu día!';
});
