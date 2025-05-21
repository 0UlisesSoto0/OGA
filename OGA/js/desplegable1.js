const servicios = document.getElementById('DropD');
const dropdown1 = document.querySelector('.dropdown1');
const desplegableDd1 = document.getElementById('desplegableDd1');

document.addEventListener("DOMContentLoaded", () => {
    // Función para alternar visibilidad del dropdown1 en pantallas pequeñas
    function toggledropdown0() {
        // Solo cambiar el display si está en pantalla pequeña
        if (window.innerWidth <= 959) {
            if (dropdown1.style.display === "flex") {
                dropdown1.style.display = "none";
                // dropdown1.style.width = "300%";
                servicios.classList.remove('dpd1Desplegado');
                desplegableDd1.classList.remove('dpd1Desplegado');
            } else {
                dropdown1.style.display = 'flex';
                const alturaDropdown1 = dropdown1.offsetHeight;
                // console.log('Altura (offsetHeight):', alturaDropdown1);


                // dropdown1.style.width = "100%";

                // Coloca la altura del dropdown1 en CP
                document.documentElement.style.setProperty('--alturaDropdown1', `${alturaDropdown1+2}px`);
                servicios.classList.add('dpd1Desplegado');
                desplegableDd1.classList.add('dpd1Desplegado');

            }
        }
    }

    // Configura eventos dependiendo del tamaño de la pantalla
    function desplegarDesplegable1() {
        const item1 = document.querySelector('#DropD0'); // item
        const desplegable1 = item1.querySelector('.desplegable1'); // <p>SERVICIOS</p>

        // Elimina todos los eventos previamente asignados
        item1.removeEventListener("mouseenter", showdropdown1);
        item1.removeEventListener("mouseleave", hidedropdown1);
        desplegable1.removeEventListener("click", toggledropdown0);

        if (window.innerWidth > 959) {
            // Pantallas mayores a 959px: hover
            item1.addEventListener("mouseenter", showdropdown1);
            item1.addEventListener("mouseleave", hidedropdown1);
            dropdown1.style.display = "none"; // Asegura que el dropdown1 esté oculto
            servicios.classList.remove('dpd1Desplegado');
            desplegableDd1.classList.remove('dpd1Desplegado');
        } else {
            // Pantallas menores o iguales a 959px: click
            desplegable1.addEventListener("click", toggledropdown0);
        }
    }

    // Mostrar el dropdown1 (para hover)
    function showdropdown1() {
        dropdown1.style.display = "flex";
    }

    // Ocultar el dropdown1 (para hover)
    function hidedropdown1() {
        dropdown1.style.display = "none";
    }

    // Configurar eventos iniciales
    desplegarDesplegable1();

    // Actualizar eventos al redimensionar la ventana
    window.addEventListener("resize", desplegarDesplegable1);
});

function reiniciarFlecha1() {
    if (window.innerWidth <= 959) {
        const svgIcon = document.querySelector('.flechaItem1');
        svgIcon.classList.remove('rotado');
        dropdown1.style.display = "none";
        servicios.classList.remove('dpd1Desplegado');
        desplegableDd1.classList.remove('dpd1Desplegado');
    }
}

window.addEventListener('resize', reiniciarFlecha1);

function rotarDesplegable1() {
    const svgIcon = document.querySelector('.flechaItem1'); // El SVG
    svgIcon.classList.toggle('rotado');
}

document.querySelector('.desplegable1').addEventListener('click', rotarDesplegable1);

