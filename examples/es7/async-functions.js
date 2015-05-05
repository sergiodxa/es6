async function obtenerDatos {
  try {
    let datos = await getJSON('/api/datos');

    console.log(datos); // mostramos el JSON obtenido
  } catch (error) {
    console.log(error); // mostramos el error
  }
}

(async function () {
  await obtenerDatos();
})();