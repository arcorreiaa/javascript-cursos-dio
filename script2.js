// set

const meuArray = [300, 45, 300, 489, 55, 145, 17, 1];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(meuArray));

// transformando um set em array
