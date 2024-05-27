const numbers = [1, 2, 3, 4, 5];

const modN = numbers.map(function(element){
    return element*2;
});
console.log(modN);

const iv = 0; // valor inicial.
const soma = modN.reduce((acumulador, valorAtual) => acumulador + valorAtual, iv);
//accumulator, acc; currentValue,cv;
console.log(soma);

