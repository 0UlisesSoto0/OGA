document.addEventListener('DOMContentLoaded', () => {
    const meses = document.querySelectorAll('.ListaMeses p');
    const secciones = document.querySelectorAll('.CarruselCalendarioA > div');
  
    meses.forEach(mes => {
      mes.addEventListener('click', () => {
        const idMes = mes.id;
  
        // Eliminar clase activa de todos
        meses.forEach(m => m.classList.remove('activo'));
        mes.classList.add('activo');
  
        // Ocultar todas las secciones
        secciones.forEach(sec => sec.style.display = 'none');
  
        // Mostrar la correspondiente
        const divMostrar = document.querySelector(`.Fechas${idMes}`);
        if (divMostrar) {
          divMostrar.style.display = 'block';
        }
      });
    });
  
    // Marcar Enero como activo al cargar
    const enero = document.getElementById('Enero');
    if (enero) enero.classList.add('activo');  
});

document.addEventListener('DOMContentLoaded', () => {
  const meses2 = document.querySelectorAll('.listaMesesTablet p');
  const secciones2 = document.querySelectorAll('.CarruselCalendarioA > div');

  meses2.forEach(mes2 => {
    mes2.addEventListener('click', () => {
      const idMes = mes2.id;

      // Eliminar clase activa de todos
      meses2.forEach(m2 => m2.classList.remove('activo'));
      mes2.classList.add('activo');

      // Ocultar todas las secciones
      secciones2.forEach(sec2 => sec2.style.display = 'none');

      // Mostrar la correspondiente
      const divMostrar2 = document.querySelector(`.Fechas${idMes}`);
      if (divMostrar2) {
        divMostrar2.style.display = 'block';
      }
    });
  });

  // Marcar Enero como activo al cargar
  const enero = document.getElementById('Enero');
  if (enero) enero.classList.add('activo');  
});

document.addEventListener('DOMContentLoaded', () => {
  const meses3 = document.querySelectorAll('.ContenedorOpciones div');
  const secciones3 = document.querySelectorAll('.CarruselCalendarioA > div');

  meses3.forEach(mes3 => {
    mes3.addEventListener('click', () => {
      const idMes = mes3.id;

      // Eliminar clase activa de todos
      meses3.forEach(m3 => m3.classList.remove('activo'));
      mes3.classList.add('activo');

      // Ocultar todas las secciones
      secciones3.forEach(sec3 => sec3.style.display = 'none');

      // Mostrar la correspondiente
      const divMostrar3 = document.querySelector(`.Fechas${idMes}`);
      if (divMostrar3) {
        divMostrar3.style.display = 'block';
      }
    });
  });

  // Marcar Enero como activo al cargar
  const enero = document.getElementById('Enero');
  if (enero) enero.classList.add('activo');  
});


const select = document.querySelector('.ListamesesSelect');
const selected = select.querySelector('.MesSeleccionado');
const optionsContainer = select.querySelector('.ContenedorOpciones');
const options = select.querySelectorAll('.option');

selected.addEventListener('click', () => {
  select.classList.toggle('open');
});

options.forEach(option => {
  option.addEventListener('click', (e) => {
    selected.textContent = e.target.textContent;
    options.forEach(o => o.classList.remove('active'));
    e.target.classList.add('active');

    // Oculta el menú
    select.classList.remove('open');
  });
});
