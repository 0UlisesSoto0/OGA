
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


// CONTROL DE LOS VIDEOS DE YOUTUVE

let players = [];
let videoActivo = null;

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

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    videoActivo = event.target;

    if (videoActivo.getIframe().id === 'video2') {
      console.log('El video 2 está activo');
    }
    // Pausa todos los demás videos que no sean el que se está reproduciendo
    players.forEach(player => {
      if (player !== event.target) {
        player.pauseVideo();
      }
    });
  }
}
