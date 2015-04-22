class calculadora {
  static sumar(...numeros) {
    let resultado = 0;

    numeros.forEach(numero => {
      resultado += numero;
    });

    return resultado;
  }
}

console.log(calculadora.sumar(1,2,3)); // 6