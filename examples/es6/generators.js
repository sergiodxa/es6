function* fibonacci() {
  let anterior = 0, actual = 1;
  while(true) {
    let temp = anterior;
    anterior = actual;
    actual += temp;
    yield actual;
  }
}

let fibo = fibonacci();

for (let i = 0; i < 5; i++) {
  console.log(fibo.next()); // { value: n, done: false }
}