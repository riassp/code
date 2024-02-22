const pessoas = [
    { nome: 'Joao', idade: 20 },
    {nome: 'Pedro', idade: 18 },
    {nome: 'Maria', idade: 22 },
];

const isAdult = (pessoa) => pessoa.idade >= 18;

console.log(pessoas.every(isAdult));
/*
Aqui está passando a function para o array e o array vai conferir se está certo e se estiver certo vai dar true, então se 
todos tiverem com mais ou terem 18 anos vai ser true, se não, vai ser falso. 
*/
