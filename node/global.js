// console.log(global);
// globalThis.MinhaApp = {
//   saudacao() {
//     return 'Estou em todos os lugares!';
//   },
//   nome: 'Sistema Legal',
// };
// Para o objeto não poder ser modificado utilize o Object.freeze
globalThis.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares!';
  },
  nome: 'Sistema Legal',
});
