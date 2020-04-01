// Clouser é o escopo criado quando uma função e declarada
// Esse escopo permite a função acessar a manipular variáveis externas à função

// Contexo léxico em ação

const x = 'Global';
function fora() {
  const x = 'Local';
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
