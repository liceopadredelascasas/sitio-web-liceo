// Script específico para la página de instalaciones
document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de categorías
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const tarjetas = document.querySelectorAll('.tarjeta-instalacion');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Mostrar/ocultar tarjetas según la categoría
            tarjetas.forEach(tarjeta => {
                if (categoria === 'todas' || tarjeta.getAttribute('data-categoria') === categoria) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });
    
    // Modal para vista ampliada
    const modal = document.getElementById('modal-imagen');
    const modalImagen = document.getElementById('modal-imagen-src');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalCerrar = document.getElementById('modal-cerrar');
    
    // Abrir modal al hacer clic en una tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const imagenSrc = this.querySelector('.imagen-instalacion').src;
            const titulo = this.querySelector('.nombre-instalacion').textContent;
            const descripcion = this.querySelector('.descripcion-instalacion').textContent;
            
            modalImagen.src = imagenSrc;
            modalTitulo.textContent = titulo;
            modalDescripcion.textContent = descripcion;
            
            modal.classList.add('mostrar');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });
    });
    
    // Cerrar modal
    modalCerrar.addEventListener('click', function() {
        modal.classList.remove('mostrar');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('mostrar');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('mostrar')) {
            modal.classList.remove('mostrar');
            document.body.style.overflow = 'auto';
        }
    });
});