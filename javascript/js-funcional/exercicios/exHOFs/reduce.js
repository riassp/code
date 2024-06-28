function somarNumeros(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
};

const numeros = [1, 2, 3, 4, 5];
const resultado = somarNumeros(numeros);
console.log(resultado);