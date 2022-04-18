function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
  // vai mostrar apenas pares
  //   se quiser mostrar impar !==
}

const meuArray = [1, 5, 18, 33, 30, 22, 26, 28, 60, 55, 50, 25];

console.log(filtraPares(meuArray));
