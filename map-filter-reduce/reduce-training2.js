const lista = [
  {
    name: "detergente",
    preco: 30,
  },
  {
    name: "cerveja",
    preco: 7,
  },
  {
    name: "pão",
    preco: 4,
  },
];

const saldoDisponivel = 200;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log("rodada", index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
