const calendario = document.getElementById('Calen');
const dropdown2 = document.querySelector('.dropdown2');
const desplegableDd2 = document.getElementById('desplegableDd2');


document.addEventListener("DOMContentLoaded", () => {
    // Función para alternar visibilidad del dropdown2 en pantallas pequeñas
    function toggledropdown2() {
        // Solo cambiar el display si está en pantalla pequeña
        if (window.innerWidth <= 959) {
            if (dropdown2.style.display === "flex") {
                dropdown2.style.display = "none";


                // dropdown2.style.width = "300%";


                calendario.classList.remove('dpd2Desplegado');
                desplegableDd2.classList.remove('dpd2Desplegado');
            } else {
                dropdown2.style.display = 'flex'; //
                const alturaDropdown2 = dropdown2.offsetHeight;
                // console.log('Altura (offsetHeight):', alturaDropdown2);


                // dropdown2.style.width = "100%";

                // Coloca la altura del dropdown2 en CP
                document.documentElement.style.setProperty('--alturaDropdown2', `${alturaDropdown2+2}px`);
                calendario.classList.add('dpd2Desplegado');
                desplegableDd2.classList.add('dpd2Desplegado');
            }
        }
    }

    // Configura eventos dependiendo del tamaño de la pantalla
    function desplegarDesplegable2() {
        const item2 = document.querySelector('#DropD'); // item
        const desplegable2 = item2.querySelector('.desplegable2'); // <p>SERVICIOS</p>

        // Elimina todos los eventos previamente asignados
        item2.removeEventListener("mouseenter", showdropdown2);
        item2.removeEventListener("mouseleave", hidedropdown2);
        desplegable2.removeEventListener("click", toggledropdown2);

        if (window.innerWidth > 959) {
            // Pantallas mayores a 959px: hover
            item2.addEventListener("mouseenter", showdropdown2);
            item2.addEventListener("mouseleave", hidedropdown2);
            dropdown2.style.display = "none"; // Asegura que el dropdown2 esté oculto
            calendario.classList.remove('dpd2Desplegado');
            desplegableDd2.classList.remove('dpd2Desplegado');
        } else {
            // Pantallas menores o iguales a 959px: click
            desplegable2.addEventListener("click", toggledropdown2);
        }
    }

    // Mostrar el dropdown2 (para hover)
    function showdropdown2() {
        dropdown2.style.display = "flex";
    }

    // Ocultar el dropdown2 (para hover)
    function hidedropdown2() {
        dropdown2.style.display = "none";
    }

    // Configurar eventos iniciales
    desplegarDesplegable2();

    // Actualizar eventos al redimensionar la ventana
    window.addEventListener("resize", desplegarDesplegable2);
});

function reiniciarFlecha2() {
    if (window.innerWidth <= 959) {
        const svgIcon = document.querySelector('.flechaItem2');
        svgIcon.classList.remove('rotado');
        dropdown2.style.display = "none";
        calendario.classList.remove('dpd2Desplegado');
        desplegableDd2.classList.remove('dpd2Desplegado');
    }
}

window.addEventListener('resize', reiniciarFlecha2);

// reiniciarFlecha2();


function rotarDesplegable2() {
    const svgIcon = document.querySelector('.flechaItem2'); // El SVG
    svgIcon.classList.toggle('rotado');
}

document.querySelector('.desplegable2').addEventListener('click', rotarDesplegable2);

