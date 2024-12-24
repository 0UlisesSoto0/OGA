// Selecciona los elementos del menú y el subrayado
const menuItems = document.querySelectorAll('.menu .item');
const underline = document.querySelector('.underline');

// Almacena el último elemento seleccionado
let lastItem = null;

// Itera sobre cada elemento del menú
menuItems.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    // Obtén el ancho y posición del elemento actual
    const itemWidth = e.target.offsetWidth;
    const itemLeft = e.target.offsetLeft;

    // Ajusta el ancho y posición de la underline al tamaño completo
    underline.style.width = `${itemWidth}px`;
    underline.style.left = `${itemLeft}px`;

    // Actualiza el último elemento seleccionado
    lastItem = e.target;
  });

  item.addEventListener('mouseleave', () => {
    if (lastItem) {
      // Ajusta el ancho a la mitad y alinea el underline a la izquierda
      const itemWidth = lastItem.offsetWidth;
      const itemLeft = lastItem.offsetLeft;

      underline.style.width = `${itemWidth / 10000}px`;
      underline.style.left = `${itemLeft}px`; // Alineado a la izquierda
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const serviciosItem = document.querySelector('#DropD'); // Contenedor de "SERVICIOS"
  const serviciosTexto = serviciosItem.querySelector('.Desplega p'); // <p>SERVICIOS</p>
  const dropdown = serviciosItem.querySelector('.Dropdown'); // Submenú
  const calendario = document.getElementById('Calen'); // "CALENDARIO AMBIENTAL"

  // Función para alternar visibilidad del Dropdown en pantallas pequeñas
  function toggleDropdown() {
      // Solo cambiar el display si está en pantalla pequeña
      if (window.innerWidth <= 820) {
          if (dropdown.style.display === "flex") {
              dropdown.style.display = "none";
              dropdown.style.width = "250%";
              calendario.style.marginTop = "20px"; // Restablece el margen
          } else {
              dropdown.style.display = "flex";
              dropdown.style.width = "100%";
              dropdown.style.marginTop = "10px";
              calendario.style.marginTop = "80px"; // Agrega el margen
          }
      }
  }

  // Configura eventos dependiendo del tamaño de la pantalla
  function updateEventListeners() {
      // Elimina todos los eventos previamente asignados
      serviciosItem.removeEventListener("mouseenter", showDropdown);
      serviciosItem.removeEventListener("mouseleave", hideDropdown);
      serviciosTexto.removeEventListener("click", toggleDropdown);

      if (window.innerWidth > 820) {
          // Pantallas mayores a 820px: hover
          serviciosItem.addEventListener("mouseenter", showDropdown);
          serviciosItem.addEventListener("mouseleave", hideDropdown);
          dropdown.style.display = "none"; // Asegura que el Dropdown esté oculto
          calendario.style.marginTop = "0px"; // Restablece el margen
      } else {
          // Pantallas menores o iguales a 820px: click
          serviciosTexto.addEventListener("click", toggleDropdown);
      }
  }

  // Mostrar el Dropdown (para hover)
  function showDropdown() {
      dropdown.style.display = "flex";
  }

  // Ocultar el Dropdown (para hover)
  function hideDropdown() {
      dropdown.style.display = "none";
  }

  // Configurar eventos iniciales
  updateEventListeners();

  // Actualizar eventos al redimensionar la ventana
  window.addEventListener("resize", updateEventListeners);
});



document.addEventListener("DOMContentLoaded", () => {
  const serviciosTexto = document.querySelector('.Desplega p'); // Elemento "SERVICIOS"
  const svgIcon = document.querySelector('.BtnAM2'); // El SVG

  // Función para alternar la rotación del SVG
  serviciosTexto.addEventListener('click', () => {
      svgIcon.classList.toggle('rotado'); // Alterna la clase "rotado" al hacer clic
  });
});
