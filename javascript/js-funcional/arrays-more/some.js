const pessoas = [
    { name: 'Joao', idade: 20},
    { name: 'Pedro', idade: 18},
    { name: 'Maria', idade: 22},
];

const comecaComj = (pessoa) => pessoa.name.startsWith(18); /*startsWith serve para saber uma "característica" do array 
pessoas
*/


console.log(comecaComj(pessoas[1]));