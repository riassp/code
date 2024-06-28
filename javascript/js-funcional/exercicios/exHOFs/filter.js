function numerosPares(numeros) {
    return numeros.filter(num => num % 2 === 0);    
};
const numeros = [1, 2, 3, 4, 5];
const resultado = numerosPares(numeros);
console.log(numeros);
console.log(resultado);
// Primeiro teste.


const numbers = [1, 2, 3, 4, 5];
const pairNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});
console.log(numbers);
console.log(pairNumbers);
// Segundo teste.