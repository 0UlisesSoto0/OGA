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

