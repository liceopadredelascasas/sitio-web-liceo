// Script para funcionalidades específicas de la página de Actividades Escolares
document.addEventListener('DOMContentLoaded', function() {
    
    // Animación para las tarjetas de categorías al hacer scroll
    const categoriaCards = document.querySelectorAll('.categoria-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    categoriaCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Efecto hover mejorado para elementos de la galería
    const galeriaItems = document.querySelectorAll('.galeria-item');
    
    galeriaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Efecto para los elementos del calendario
    const actividadItems = document.querySelectorAll('.actividad-item');
    
    actividadItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
            this.style.borderRadius = '8px';
            this.style.padding = '1rem';
            this.style.margin = '0 -0.5rem 1.5rem';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
            this.style.margin = '0 0 1.5rem';
        });
    });
    
    // Animación para el botón de inscripción
    const btnInscripcion = document.querySelector('.btn-inscripcion');
    
    if (btnInscripcion) {
        btnInscripcion.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btnInscripcion.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Efecto de aparición gradual para las secciones
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
});