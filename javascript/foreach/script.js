/*

ForEach(item, index, array)

item - Dados/Informações contidos na posição atual
index - Número da Posição. Sempre começando em 0.
array - Retorna o Array completo.


*/



const abacate = [

    { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    { name: 'Paula', age: 21, contact: '(12) 34204-3534'},
    { name: 'Alino', age: 40, contact: '(13) 89224-4002'},
    { name: 'Maria', age: 12, contact: '(14) 40024-8922'},

]


abacate.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade.`)
    }
} )