const dropdown3 = document.querySelector('.dropdown3');
const desplegableDd3 = document.getElementById('desplegableDd3');


document.addEventListener("DOMContentLoaded", () => {
    // Función para alternar la visibilidad del dropdown3 en pantallas pequeñas
    function toggledropdown3() {
        if (window.innerWidth <= 959) {
            if (dropdown3.style.display === "flex") {
                dropdown3.style.display = "none"; // Oculta el submenú
                desplegableDd3.classList.remove('dpd3Desplegado');
            } else {
                dropdown3.style.display = 'flex';
                const alturaDropdown3 = dropdown3.offsetHeight;
                document.documentElement.style.setProperty('--alturaDropdown3', `${alturaDropdown3}px`);
                desplegableDd3.classList.add('dpd3Desplegado');
            }
        }
    }

    // Configura eventos dependiendo del tamaño de la pantalla
    function desplegarDesplegable3() {
        const item3 = document.querySelector('#DropD2'); // ITEM
        const desplegable3 = item3.querySelector('.desplegable3'); // <p>SERVICIOS</p>

        // Elimina todos los eventos previamente asignados
        item3.removeEventListener("mouseenter", showdropdown3);
        item3.removeEventListener("mouseleave", hidedropdown3);
        desplegable3.removeEventListener("click", toggledropdown3);

        if (window.innerWidth > 959) {
            // Pantallas mayores a 959px: hover
            item3.addEventListener("mouseenter", showdropdown3);
            item3.addEventListener("mouseleave", hidedropdown3);
            dropdown3.style.display = "none"; // Asegura que el dropdown3 esté oculto
            desplegableDd3.classList.remove('dpd3Desplegado');
        } else {
            // Pantallas menores o iguales a 959px: click
            desplegable3.addEventListener("click", toggledropdown3);
        }
    }

    // Mostrar el dropdown3 (para hover)
    function showdropdown3() {
        dropdown3.style.display = "flex"; // Muestra el submenú
    }

    // Ocultar el dropdown3 (para hover)
    function hidedropdown3() {
        dropdown3.style.display = "none"; // Oculta el submenú
    }

    // Configurar eventos iniciales
    desplegarDesplegable3();

    // Actualizar eventos al redimensionar la ventana
    window.addEventListener("resize", desplegarDesplegable3);
});

function reiniciarFlecha3() {
    if (window.innerWidth <= 959) {
        const svgIcon = document.querySelector('.flechaItem3');
        svgIcon.classList.remove('rotado');
        dropdown3.style.display = "none";
        desplegableDd3.classList.remove('dpd3Desplegado');
    }
}

window.addEventListener('resize', reiniciarFlecha3);

// reiniciarFlecha3();


function rotarDesplegable3() {
    const svgIcon = document.querySelector('.flechaItem3');
    svgIcon.classList.toggle('rotado');
}

document.querySelector('.desplegable3').addEventListener('click', rotarDesplegable3);
