// FUNSIÓN PARA AVANZAR LOS NÚMEROS

function crearObserver(contador, numFinal, duracion = 1000, desimal) {
  let animando = false;
  let contado = false;
  let inicio = null;

  function animarContador(timestamp) {
    if (!inicio) inicio = timestamp;
    const progreso = timestamp - inicio;
    const valor = Math.min((progreso / duracion) * numFinal, numFinal);
    if (desimal) {
      contador.textContent = valor.toFixed(1);
    } else {
      contador.textContent = valor.toFixed(0);
    }

    if (valor < numFinal) {
      requestAnimationFrame(animarContador);
    } else {
      animando = false;
      contado = true;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animando && !contado) {
        animando = true;
        inicio = null;
        requestAnimationFrame(animarContador);
      } else if (!entry.isIntersecting) {
        contador.textContent = '0';
        contado = false;
        animando = false;
        inicio = null;
      }
    });
  }, {
    threshold: 0.6
  });

  return observer;
}

const contadorBidon = document.querySelector('.numeros__contador');
const seccionBidon = document.querySelector('.contenido__informacion');
const titulo__1 = document.querySelector('.titulo__1');
const titulo__2 = document.querySelector('.titulo__2');
const titulo__3 = document.querySelector('.titulo__3');
const titulo__4 = document.querySelector('.titulo__4');

const observer0 = crearObserver(contadorBidon, 492.5, 1000, true);
observer0.observe(seccionBidon);

const observer1 = crearObserver(titulo__1, 20, 1000, false);
observer1.observe(titulo__1);

const observer2 = crearObserver(titulo__2, 1260, 1000, false);
observer2.observe(titulo__2);

const observer3 = crearObserver(titulo__3, 1080, 1000, false);
observer3.observe(titulo__3);

const observer4 = crearObserver(titulo__4, 1080, 1000, false);
observer4.observe(titulo__4);


// CONTROL DE LOS VIDEOS DE YOUTUBE

let players = [];
let videoActivo = null;
let esVideoPrincipal = false;
let videoSeccion = null;

// REGISTRO DE LOS VIDEOS
function onYouTubeIframeAPIReady() {
  players = [
    new YT.Player('video1', {
      events: {
        'onStateChange': onPlayerStateChange
      }
    }),
    new YT.Player('video2', {
      events: {
        'onStateChange': onPlayerStateChange
      }
    }),
    new YT.Player('video3', {
      events: {
        'onStateChange': onPlayerStateChange
      }
    })
  ];
}
// PARAR LOS VIDEOS QUE NO FUÉRON SELECCIONADOS Y GUARDAR CUAL FUÉ EL SELECCIONADO
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {

    if (window.innerWidth > 729) {
      videoActivo = event.target;
      if (videoActivo.getIframe().parentElement.classList.contains('videoA')) {
        esVideoPrincipal = false;
      } else {
        esVideoPrincipal = true;
      }

      if (videoActivo.getIframe().parentElement.classList.contains('videos__comoFunciona')) {
        videoSeccion = 'videos__comoFunciona';
      } else if (videoActivo.getIframe().parentElement.classList.contains('videos___comoSeProduce')) {
        videoSeccion = 'videos___comoSeProduce';
      } else {
        videoSeccion = 'videos__historia';
      }
      acomodarVideos();
    }


    // Pausa todos los demás videos que no sean el que se está reproduciendo
    players.forEach(player => {
      if (player !== event.target) {
        player.pauseVideo();
      }
    });
  }
}

// FUNSIÓN PARA COLOCAR EL VIDEO SELECCIONADO EN EL ESPACIO PRINCIPAL

function acomodarVideos() {
  const videos__comoFunciona = document.querySelector('.videos__comoFunciona');
  const videos___comoSeProduce = document.querySelector('.videos___comoSeProduce');
  const videos__historia = document.querySelector('.videos__historia');

  if (esVideoPrincipal) {

    if (videoSeccion === 'videos__comoFunciona') {
      videos__comoFunciona.classList.add('oculto');
    } else if (videoSeccion === 'videos___comoSeProduce') {
      videos___comoSeProduce.classList.add('oculto');
    } else {
      videos__historia.classList.add('oculto');
    }

    setTimeout(() => {

      if (videoActivo.getIframe().id === 'video2') {
        videos__comoFunciona.classList.remove('videoA');
        videos__comoFunciona.classList.remove('videoB');
        videos__comoFunciona.classList.add('videoC');

        videos___comoSeProduce.classList.remove('videoB');
        videos___comoSeProduce.classList.remove('videoC');
        videos___comoSeProduce.classList.add('videoA');

        videos__historia.classList.remove('videoC');
        videos__historia.classList.remove('videoA');
        videos__historia.classList.add('videoB');
      } else if (videoActivo.getIframe().id === 'video3') {



        videos__comoFunciona.classList.remove('videoA');
        videos__comoFunciona.classList.remove('videoC');
        videos__comoFunciona.classList.add('videoB');

        videos___comoSeProduce.classList.remove('videoB');
        videos___comoSeProduce.classList.remove('videoA');
        videos___comoSeProduce.classList.add('videoC');

        videos__historia.classList.remove('videoB');
        videos__historia.classList.remove('videoC');
        videos__historia.classList.add('videoA');



      }
      else {
        videos__comoFunciona.classList.remove('videoB');
        videos__comoFunciona.classList.remove('videoC');
        videos__comoFunciona.classList.add('videoA');

        videos___comoSeProduce.classList.remove('videoA');
        videos___comoSeProduce.classList.remove('videoC');
        videos___comoSeProduce.classList.add('videoB');

        videos__historia.classList.remove('videoB');
        videos__historia.classList.remove('videoA');
        videos__historia.classList.add('videoC');
      }
      videos__comoFunciona.classList.remove('oculto');
      videos___comoSeProduce.classList.remove('oculto');
      videos__historia.classList.remove('oculto');
    }, 500);
  }
}

// TARJETAS EN MODO CELULARA PARA PTAR

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll('.PTARcelular__tarjetas .PTARcelular__tarjeta');
    const prevBtn = document.querySelector('.PTARcelular__prevBtn');
    const nextBtn = document.querySelector('.PTARcelular__nextBtn');
    let currentIndex = 0;

    function mostrarTarjetaCelular(index) {
      tarjetas.forEach((tarjeta, i) => {
        tarjeta.style.display = i === index ? 'grid' : 'none';
      });
    }

    mostrarTarjetaCelular(currentIndex);

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % tarjetas.length;
      mostrarTarjetaCelular(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
      mostrarTarjetaCelular(currentIndex);
    });
});