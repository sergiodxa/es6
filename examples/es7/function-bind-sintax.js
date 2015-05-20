const map    = Array.prototype.map;
const filter = Array.prototype.filter;
function mostrar() { console.log(this); return this; }
function agregar(numeros) {
  for (let numero of numeros) {
    this.push(numero);
  }
  return this;
}

const data = [1,2,3];

data
::mostrar()
::filter(x => x % 2 !== 0)
::mostrar()
::map(x => ++x)
::mostrar()
::agregar(data)
::mostrar();