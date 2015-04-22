function sumar (a, b, ...c) {
  let resultado = a + b;

  c.forEach(n => {
    resultado += n;
  });

  return resultado;
}
console.log(sumar(1,2)); // 3;
console.log(sumar(1,2,3)); // 6
console.log(sumar(1,2,3,4)); // 10
console.log(sumar(1,2,3,4,5)); //15