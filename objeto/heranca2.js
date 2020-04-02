// Cadeia de protótipo (prototype chain)
Object.prototype.attr0 = 'Z'; // não faça isso em casa!
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr1);
console.log(filho.attr0);
console.log(filho.attrA);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
};

const ferrai = {
  modelo: 'F40',
  velMax: 324 //shadowing
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  }
};

Object.setPrototypeOf(ferrai, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrai);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrai.acelerarMais(300);
console.log(ferrai.status());
