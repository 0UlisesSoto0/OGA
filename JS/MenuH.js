document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('#CH');
    const abrir = document.querySelector('#AbrirM');
    const cerrar = document.querySelector('#CerrarM');

    // Mostrar el menú y alternar botones
    abrir.addEventListener("click", () => {
        nav.classList.add("visible"); // Mostrar el menú
        abrir.style.display = "none"; // Ocultar el botón de abrir
        cerrar.style.display = "block"; // Mostrar el botón de cerrar
    });

    // Ocultar el menú y alternar botones
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible"); // Ocultar el menú
        cerrar.style.display = "none"; // Ocultar el botón de cerrar
        abrir.style.display = "block"; // Mostrar el botón de abrir
    });

    // Asegurar el estado inicial de los botones al cargar la página
    const updateButtonVisibility = () => {
        if (window.innerWidth <= 820) {
            abrir.style.display = "block";
            cerrar.style.display = "none";
        } else {
            abrir.style.display = "none"; // Ocultar los botones fuera del tamaño móvil
            cerrar.style.display = "none";
        }
    };

    // Llamar a la función para establecer el estado inicial
    updateButtonVisibility();

    // Actualizar los botones cuando la ventana cambie de tamaño
    window.addEventListener("resize", updateButtonVisibility);
});




