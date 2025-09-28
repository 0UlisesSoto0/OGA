// Selecciona los elementos del menú y el subrayado
const menuItems = document.querySelectorAll('.menu .item');
const underline = document.querySelector('.underline');

let lastItem = null;
let listenersAgregados = false;

function handleMouseEnter(e) {
  const itemWidth = e.target.offsetWidth;
  const itemLeft = e.target.offsetLeft;
  underline.style.width = `${itemWidth}px`;
  underline.style.left = `${itemLeft}px`;
  lastItem = e.target;
}

function handleMouseLeave() {
  if (lastItem) {
    const itemWidth = lastItem.offsetWidth;
    const itemLeft = lastItem.offsetLeft;
    underline.style.width = `${itemWidth / 10000}px`;
    underline.style.left = `${itemLeft}px`;
  }
}

function subrayadoRojo() {
  const esPantallaGrande = window.innerWidth > 960;

  if (esPantallaGrande && !listenersAgregados) {
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
    listenersAgregados = true;
  }

  if (!esPantallaGrande && listenersAgregados) {
    menuItems.forEach(item => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    });
    underline.style.width = "0px"; // Oculta el subrayado
    listenersAgregados = false;
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', subrayadoRojo);
window.addEventListener('resize', subrayadoRojo);





