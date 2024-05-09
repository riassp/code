/*

    Math -> Matemática
        - pow(2,2) / potência ou power / 2² = 4.
        - sqrt(25,2) / raiz / √25.
        - ceil / teto -> arredondar para cima. Se o número for 5.234234 vai passar a ser 6.
        - floor / chão -> arredondar para baixo.
        - random() / número aleatório entre 0 e 1.

        o sqrt só funciona raiz quadrada, pow também serve para ver raiz quadrada, cúbica, entre outros.
        ex: const numero = 8; 
        const raizCubica = Math.pow(numero, 1/3);
        console.log(raizCubica); resto 2.
        Math.random() * (max - min) + min; forma para escolher um número max e min aleatóriamente.
*/


/*

ex(respectivamente):

const calculo = Math.pow(2,5);
console.log(calculo); // = 32

const calculo = Math.sqrt(50,2);
console.log(calculo); // = 25

const calculo = Math.random() * (66 - 1) + 1;
console.log(Math.floor(calculo));
*/

const number = 4;
const calculo = Math.pow(number, 1/2)
console.log(calculo)