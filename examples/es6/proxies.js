let Jose = {
  nombre: 'Don Jose'
};

let proxy = new Proxy(Jose, {
  get(target, propiedad) {
    let mensaje = `obteniendo ${propiedad}:
${target[propiedad]}`;
    console.log(mensaje);
  }
});

proxy.nombre;