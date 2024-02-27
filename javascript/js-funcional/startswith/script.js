/* 
O método startsWith é para você identificar numa string se ela começa com uma determinada letra
ou um trecho de uma palavra.
*/

const frutas = [
    'banana',
    'laranja',
    'maça',
    'manga',
    'morango',
    'pêra'
];

const frutasQueComecamComMA = frutas
.filter((fruta) => fruta.startsWith('ma'));

console.log(frutasQueComecamComMA);
