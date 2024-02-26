const everyoneisaChild = [
    {nome: 'Fabrícia', idade: 30, profissão: 'Professora'},
    {nome: 'André', idade: 30, profissão: 'Bombeiro'},
    {nome: 'Mike', idade: 40, profissão: 'Empreendedor'},
    {nome: 'Harvey', idade: 20, profissão: 'Desenhista'},
    {nome: 'John', idade: 20, profissão: 'Professor'}
];

const conferirIdadesC = (pessoa) => pessoa.idade > 18;

console.log(everyoneisaChild.every(conferirIdadesC));
