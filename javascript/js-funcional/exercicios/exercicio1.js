function processArray(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));

    };
    return result;
};

let numbers = [1, 2, 3, 4, 5];
let squares = processArray(numbers, function(num) {
    return num * num;
});

console.log(squares);


/*
// Exercício: Implemente uma função de ordem superior chamada 'processArray'.
// A função 'processArray' deve receber dois parâmetros: um array de números e uma função de callback.
// A função 'processArray' deve retornar um novo array onde cada elemento é o resultado da aplicação da função de callback no elemento correspondente do array original.
// Teste a função 'processArray' com um array de números e uma função de callback que retorna o quadrado do número.

Neste exercício, a função 'processArray' é uma função de ordem superior, pois recebe uma função como argumento (callback). A função callback é aplicada a cada elemento do array original, e o resultado é adicionado a um novo array (result), que é então retornado pela função processArray. No teste, a função callback retorna o quadrado do número fornecido. Portanto, o array resultante (squares) contém os quadrados dos números no array original (numbers).
*/