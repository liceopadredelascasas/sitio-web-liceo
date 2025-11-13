// Script para funcionalidades interactivas mejoradas
document.addEventListener('DOMContentLoaded', function() {
    // Carrusel de imágenes con efectos mejorados
    let carruselIndex = 0;
    const carruselItems = document.querySelectorAll('.carrusel-item');
    
    function rotateCarrusel() {
        carruselItems.forEach(item => item.classList.remove('active'));
        carruselIndex = (carruselIndex + 1) % carruselItems.length;
        carruselItems[carruselIndex].classList.add('active');
    }
    
    // Cuadrícula dinámica con frases
    let gridIndex = 0;
    const gridItems = document.querySelectorAll('.grid-item');
    
    function rotateGrid() {
        gridItems.forEach(item => item.classList.remove('active'));
        gridIndex = (gridIndex + 1) % gridItems.length;
        gridItems[gridIndex].classList.add('active');
    }
    
    // Iniciar rotaciones
    setInterval(rotateCarrusel, 5000);
    setInterval(rotateGrid, 6000);
    
    // Efecto hover en eventos del calendario
    const eventos = document.querySelectorAll('.evento');
    eventos.forEach(evento => {
        evento.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        evento.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Controles del video
    const video = document.querySelector('.video-presentacion');
    const muteBtn = document.querySelector('.mute-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    
    // Control de silencio
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            muteBtn.title = "Silenciar";
        } else {
            video.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            muteBtn.title = "Activar sonido";
        }
    });
    
    // Control de pausa/reproducción
    pauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            pauseBtn.title = "Pausar";
        } else {
            video.pause();
            pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            pauseBtn.title = "Reproducir";
        }
    });
});