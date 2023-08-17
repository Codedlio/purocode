const particlesConfig = {
  particles: {
    number: {
      value: 200, // Número de partículas
    },
    color: ["#3475D7", "#FCF932", "#EC8F21"],
    shape: {
      type: "circle", // Tipo de forma de las partículas
      stroke: {
        width: 1, // Ancho del borde de la forma
        color: "#FCF932", // Color del borde de la forma
      },
      polygon: {
        nb_sides: 3, // Número de lados del polígono (si es una forma poligonal)
      },
    },
    opacity: {
      value: 1, // Opacidad de las partículas
      random: true, // Opacidad aleatoria
      anim: {
        enable: true,
        speed: 1, // Velocidad de la animación de opacidad
        opacity_min: 0, // Opacidad mínima
        sync: false, // Sincronización de la animación
      },
    },
    size: {
      value: 5, // Tamaño de las partículas
      random: true, // Tamaño aleatorio
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: true, // Conexiones entre partículas
      distance: 100, // Distancia de las conexiones
      color: "#FCF932",
      opacity: 0.9, // Opacidad de las conexiones (líneas)
      width: 1, // Ancho de las conexiones (líneas)
    },
    move: {
      enable: true, // Movimiento de las partículas
      speed: 0.5, // Velocidad de movimiento
      direction: "none", // Dirección del movimiento
      random: true, // Movimiento aleatorio
      straight: false, // Movimiento en línea recta
      out_mode: "out", // Comportamiento fuera de los límites del contenedor
      bounce: false, // Rebotar en los límites del contenedor
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    modes: {
      connect: {
        distance: 100,
        color: "#588444", // Cambiar el color aleatoriamente
        line_linked: {
          opacity: 0.4,
        },
      },
    },
  },
  retina_detect: true,
};
export default particlesConfig;
