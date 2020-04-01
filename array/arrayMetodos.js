const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove ultimo elemento da lista
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona no primeiro elemento do array
console.log(pilotos);

//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3, 1); // remove um elemento do index 3
console.log(pilotos);

const algunsPilotos1 = pilotos.splice(2); // novo array pegando um pedaço do array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
