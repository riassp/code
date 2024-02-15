/*
const casa1 = {
    cor: 'amarelo',
    logradouro: 'Av. Brasil',
    numero: 20,
};

const casa2 = {...casa1};
// esses três pontinhos se chama spread operator. Ele tira uma cópia rasa do objeto.
casa2.numero = 30;

console.log(casa1);
console.log(casa2);
*/



// outra forma de fazer isso.
/*
const casa2 = {
    ...casa1,
    numero:30
};

*/

/*
const lista1 = ['laranja', 'banana'];
const lista2 = [...lista1];
lista2.push('maça');

console.log(lista1);
console.log(lista2);

outra forma de fazer isso:
const lista1 = ['laranja', 'banana'];
const lista2 = [...lista1, 'maça']; mesmo se inverter vai continuar igual.



console.log(lista1);
console.log(lista2);
*/


const jose = {
    nome: 'jose',
    idade: 18,
    enderecos: [
        { logradouro: 'Av. Brasil', numero:10 },
    ],
};

/*
const joao = {};
joao.name = 'jose';
joao.idade = 18;
joao.enderecos = jose.enderecos;
joao.name = 'joao';
*/
const joao = {
    ...jose,
    nome: 'joao',
    enderecos: [
        ...jose.enderecos,
        {
            logradouro: 'Av. Santa Catarina',
            numero:10,
        },
    ],
};


console.log(jose, joao);


 /*outra forma de fazer isso abaixo
 const joao = {
    ...jose,
    nome: 'joao',
 }

 joao.enderecos = [
    ...jose.enderecos,
    {
        logradouro: 'av. Santa Catarina',
        numero: 10,
    },
 ]

 Eu devo tirar a cópia somente dos arrays, objetos entre outros, tirando as strings, números e etc.

Cópia Rasa (Shallow Copy): Uma cópia rasa constrói um novo objeto composto e então insere nele 
referências aos objetos encontrados no original. Isso significa que a cópia rasa cria uma nova 
instância do mesmo objeto, mas os elementos dentro do objeto são referências aos objetos originais. 
Portanto, se você alterar os elementos do objeto copiado, isso afetará o objeto original.

Cópia Profunda (Deep Copy): Uma cópia profunda constrói um novo objeto composto e então, 
recursivamente, insere nele cópias dos objetos encontrados no original. Isso significa que a cópia 
profunda cria uma nova instância do mesmo objeto e também copia todos os elementos internos do 
objeto original. Portanto, se você alterar os elementos do objeto copiado, isso não afetará o 
objeto original.

Em resumo, a principal diferença entre cópia rasa e cópia profunda é que a cópia rasa copia as 
referências aos objetos, enquanto a cópia profunda copia os próprios objetos.

 */


