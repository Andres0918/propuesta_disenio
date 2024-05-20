document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces principales
    var enlacesPrincipales = document.querySelectorAll('.navegacion__enlace');

    // Agregar un evento de clic a cada enlace principal
    enlacesPrincipales.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            // Alternar la visibilidad del submenú
            var submenu = this.querySelector('.submenu');
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';

            // Detener la propagación del evento para evitar que se cierre inmediatamente
            event.stopPropagation();
        });
    });

    // Agregar un controlador de eventos al documento que oculte todos los submenús cuando se hace clic fuera de ellos
    document.addEventListener('click', function(event) {
        // Verificar si el clic se realizó dentro de un submenú
        var estaEnSubMenu = event.target.closest('.submenu');

        // Si no se hizo clic en un submenú, ocultar todos los submenús
        if (!estaEnSubMenu) {
            var submenus = document.querySelectorAll('.submenu');
            submenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });
        }
    });
});
