class Perro {
  constructor(raza) {
    this.raza = raza;
  }

  comer() {
    return 'comiendo'
  };
}
class Bulldog extends Perro {
  constructor(nombre) {
    super('Bulldog');
    this.nombre = nombre;
  }

  comer() {
    return `${this.nombre} está ${super.comer()}`;
  }
}
let Tronco = new Bulldog('Tronco');
console.log(Tronco.comer()); // Tronco está comiendo