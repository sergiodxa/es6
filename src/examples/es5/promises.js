'use strict';

function obtenerDatos() {
  return new Promise(function (resolve, reject) {
    var n = Math.floor(Math.random() * 2) + 1;

    setTimeout(function () {
      if (n === 1) resolve('Datos obtenidos');else reject(new Error('Hubo un error al obtener los datos'));
    }, 500);
  });
}

obtenerDatos().then(function (data) {
  console.log(data);
})['catch'](function (error) {
  console.log(error);
});