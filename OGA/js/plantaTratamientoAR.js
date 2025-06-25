// const contador = document.getElementsByClassName('numeros__contador')[0];
// let numeroFinal = 492.5;
// let duracion = 2000; // en milisegundos
// let inicio = null;

// function animarContador(timestamp) {
//   if (!inicio) inicio = timestamp;
//   const progreso = timestamp - inicio;
//   const valor = Math.min(((progreso / duracion) * numeroFinal), numeroFinal);
//   contador.textContent = valor.toFixed(1); // Mostrar con 1 decimal

//   if (valor < numeroFinal) {
//     requestAnimationFrame(animarContador);
//   }
// }

// requestAnimationFrame(animarContador);




// const contadorEl = document.querySelector('.numeros__contador');
// let numeroFinal = 492.5;
// let duracion = 2000;
// let inicio = null;
// let animando = false;

// function animarContador(timestamp) {
//   if (!inicio) inicio = timestamp;
//   const progreso = timestamp - inicio;
//   const valor = Math.min((progreso / duracion) * numeroFinal, numeroFinal);
//   contadorEl.textContent = valor.toFixed(1);
//   if (valor < numeroFinal) {
//     requestAnimationFrame(animarContador);
//   } else {
//     animando = false;
//   }
// }

// // Observar el elemento cuando entra en pantalla
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && !animando) {
//       animando = true;
//       inicio = null;
//       requestAnimationFrame(animarContador);
//     } else if (!entry.isIntersecting) {
//       // Reinicia el contador si se sale de pantalla
//       contadorEl.textContent = '0';
//       animando = false;
//       inicio = null;
//     }
//   });
// }, {
//   threshold: 0.5 // Se activa cuando el 50% del elemento es visible
// });

// observer.observe(contadorEl);


const contadorEl = document.querySelector('.numeros__contador');
const seccion = document.querySelector('.contenido__informacion');

let numeroFinal = 492.5;
let duracion = 1000;
let inicio = null;
let animando = false;
let yaContado = false;

function animarContador(timestamp) {
  if (!inicio) inicio = timestamp;
  const progreso = timestamp - inicio;
  const valor = Math.min((progreso / duracion) * numeroFinal, numeroFinal);
  contadorEl.textContent = valor.toFixed(1);
  if (valor < numeroFinal) {
    requestAnimationFrame(animarContador);
  } else {
    animando = false;
    yaContado = true;
  }
}

// Observa la sección completa, no solo el número
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animando && !yaContado) {
      animando = true;
      inicio = null;
      requestAnimationFrame(animarContador);
    } else if (!entry.isIntersecting) {
      // Cuando salimos completamente de la sección, reiniciar
      contadorEl.textContent = '0';
      yaContado = false;
      animando = false;
      inicio = null;
    }
  });
}, {
  threshold: .6 // Se activa cuando 50% de la sección es visible
});

observer.observe(seccion);



