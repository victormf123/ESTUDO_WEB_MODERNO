Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: false },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(
  produtos.filter(function(p) {
    return p.preco > 2400;
  })
);

const caro = produtos => produtos.preco >= 500;
const fragil = produtos => produtos.fragil;
console.log(produtos.filter2(caro).filter2(fragil));
