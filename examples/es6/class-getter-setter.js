class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo) {
    this._nombre = nuevo;
  }
}

let Pepito = new Persona('Pepito');
console.log(Pepito.nombre);
Pepito.nombre = 'Don Pepito';
console.log(Pepito.nombre);