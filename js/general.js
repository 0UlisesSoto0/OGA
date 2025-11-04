// FUNCION PARA OBSERVAR LOS EFECTOS DE IMAGENES Y TEXTOS

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Configuración centralizada de animaciones
   * @type {Object.<string, {class: string, resetOnExit: boolean, threshold: number, rootMargin: string}>}
   */
  const animationsConfig = {
    focusIn: {
      class: 'focus-in-contract-bck',
      resetOnExit: true,
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    },
    kenBurns: {
      class: 'kenburns-top-left',
      resetOnExit: false,
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
    kenBurnsBottom: {
      class: 'kenburns-bottom',
      resetOnExit: false,
      threshold: 0.1,
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