// FUNCIÓN PARA AVANZAR LOS NÚMEROS

document.addEventListener("DOMContentLoaded", function () {
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
      threshold: 0.1
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
});

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

// FUNCIÓN PARA COLOCAR EL VIDEO SELECCIONADO EN EL ESPACIO PRINCIPAL

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

// Para activar los videos con su título

// if (window.innerWidth < 730) {
//   var tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   var player1, player2, player3;

//   function onYouTubeIframeAPIReady() {
//     player1 = new YT.Player('video1');
//     player2 = new YT.Player('video2');
//     player3 = new YT.Player('video3');
//   }

//   // 4. Funciones para cada botón
//   function iniciarVideoA() {
//     player1.playVideo();
//   }

//   function iniciarVideoB() {
//     player2.playVideo();
//   }

//   function iniciarVideoC() {
//     player3.playVideo();
//   }
// }

// TARJETAS EN MODO CELULARA PARA PTAR

document.addEventListener("DOMContentLoaded", function () {
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


// FUNCIÓN PARA ANIMAR GIFS

document.addEventListener("DOMContentLoaded", function () {
  // Configuración de cada GIF con su respectiva imagen estática
  const configuracionGIFs = [
    {
      id: 'gifTrofeo',
      gifSrc: '../gifs/20_Aniversario.gif',
      staticSrc: '../gifs/plantaTemporal.jpg',
      duration: 4000 // Duración aproximada del GIF en ms
    },
    {
      id: 'gifTubo',
      gifSrc: '../gifs/Sistema_Irrigacion.gif',
      staticSrc: '../gifs/Sistema_Irrigacion_psd.png',
      duration: 1600
    },
    {
      id: 'gifLluvia',
      gifSrc: '../gifs/nube.gif',
      staticSrc: '../gifs/plantaTemporal.jpg',
      duration: 4000
    },
    {
      id: 'gifGota',
      gifSrc: '../gifs/agua_gotas.gif',
      staticSrc: '../gifs/plantaTemporal.jpg',
      duration: 4000
    },
    {
      id: 'gifPlanta',
      gifSrc: '../gifs/planta.gif',
      staticSrc: '../gifs/plantaTemporal.jpg',
      duration: 4000
    },

  ];

  configuracionGIFs.forEach(config => {
    const elemento = document.getElementById(config.id);
    if (!elemento) return;

    // Estado para controlar si ya se mostró el GIF
    let yaSeHaMostrado = false;

    // Guardar la fuente original (estática) que está en el HTML
    const originalStaticSrc = elemento.src;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!yaSeHaMostrado) {
            // Cambiar temporalmente al GIF, elimina el problema de cargar desde el cache
            elemento.src = config.gifSrc + '?t=' + Date.now();

            // Después de la duración del GIF, cambiar a la imagen estática
            setTimeout(() => {
              elemento.src = config.staticSrc;
              yaSeHaMostrado = true;
            }, config.duration);
          }
        } else {
          // Cuando el elemento sale de la vista, resetear para la próxima vez
          yaSeHaMostrado = false;
          elemento.src = originalStaticSrc;
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(elemento);

    // Inicializar con la imagen estática
    elemento.src = originalStaticSrc;
  });
});


// FUNCION PARA OBSERVAR LOS EFECTOS DE IMAGENES Y TEXTOS

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Configuración centralizada de animaciones
   * @type {Object.<string, {class: string, resetOnExit: boolean, threshold: number, rootMargin: string}>}
   */
  const animationsConfig = {
    focusIn: {
      class: 'focus-in-contract-bck',
      resetOnExit: true, // Reinicia al salir del viewport
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    },
    kenBurns: {
      class: 'kenburns-top-left',
      resetOnExit: false, // No reinicia (animación continua)
      threshold: 0.1,
    },
    focusExpand: {
      class: 'focus-in-expand-fwd',
      resetOnExit: true, // Recomendado para esta animación
      threshold: 0.2,
      rootMargin: '0px 0px -20px 0px'
    },
    focusContract: {
      class: 'focus-in-contract',
      resetOnExit: true, // Recomendado para esta animación
      threshold: 0.15,
      rootMargin: '0px 0px -15% 0px',
      delay: 150 // Opcional: retardo antes de activar
    },
  };

  function setupAnimationObserver(animationName) {
    const config = animationsConfig[animationName];
    if (!config) return;

    const elements = document.querySelectorAll(`.${config.class}`);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // En la función setupAnimationObserver, modifica el bloque entry.isIntersecting:
        if (entry.isIntersecting) {
          // Fuerza el reinicio de la animación
          entry.target.style.animation = 'none';
          void entry.target.offsetWidth; // Trigger reflow
          entry.target.style.animation = '';

          entry.target.classList.add(`${config.class}-active`);

          if (config.resetOnExit) {
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove(`${config.class}-active`);
            }, { once: true });
          }
        } else if (config.resetOnExit) {
          // Reinicia para futuras visualizaciones
          entry.target.classList.remove(`${config.class}-active`);
        }
      });
    }, {
      threshold: config.threshold,
      rootMargin: config.rootMargin || '0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  // Inicializa todas las animaciones configuradas
  Object.keys(animationsConfig).forEach(animationName => {
    setupAnimationObserver(animationName);
  });
});