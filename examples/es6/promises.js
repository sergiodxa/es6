function obtenerDatos () {
  return new Promise((resolve, reject) => {
    let n = Math.floor(Math.random() * 2) + 1;

    setTimeout(() => {
      if (n === 1) resolve('Datos obtenidos');
      else reject(new Error('Hubo un error al obtener los datos'))
    }, 500);
  });
}

obtenerDatos()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });