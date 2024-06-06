let filterArray = (array, callback) => {
    let result = []; // Array criado pelo filterArray.
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            result.push(array[i]);
        };
    };

    return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array original.
let evenNumbers = filterArray(numbers, function(num){
    return num % 2 === 0; // Retornar a divisão por 2 que dê como resto 0.
});

console.log(evenNumbers);

/*

// Neste exercício, você vai criar uma função de ordem superior chamada filterArray. A função filterArray deve receber  um array e uma função de callback que recebe um elemento do array e retorna um valor booleano. A função filterArray deve retornar um novo array que contém apenas os elementos do array original para os quais a função de callback retorna true.

// Neste exemplo, a função de callback é uma função que recebe um número e retorna true se o número for par e false se o número for ímpar. Portanto, a variável evenNumbers deve conter o array [2, 4], que são os números pares do array original.

*/