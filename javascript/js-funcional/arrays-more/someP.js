const vencedoresdasComps = [
    { name: 'Rhuan', tema: 'Programacao', idade: 18},
    { name: 'Joao', tema: 'JogadordeFutebol', idade: 21},
    { name: 'Gabriel', tema: 'Atleta', idade: 32},
    { name: 'Guilherme', tema: 'Designer', idade: 41},
    { name: 'Heloisa', tema: 'Escritora', idade: 50},
    { name: 'Fabio', tema: 'Dentista', idade: 49},
    { name: 'Jhonny', tema: 'Desenhista', idade: 28},
    { name: 'Eduardo', tema: 'Advogado', idade: 85},
    { name: 'Andre', tema: 'Medico', idade: 22},
    { name: 'Caio', tema: 'Piloto', idade: 16}
];

const verificarIdade = vencedoresdasComps.some(pessoa => pessoa.idade < 18);

console.log(verificarIdade);