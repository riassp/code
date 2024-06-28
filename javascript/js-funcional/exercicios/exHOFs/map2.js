function nomesCompletos(pessoas) {
    return pessoas.map(pessoa => `${pessoa.primeiroNome} ${pessoa.sobrenome}`); 
};

const pessoas = [
    { primeiroNome: 'João', sobrenome: 'Silva'},
    { primeiroNome: 'Maria', sobrenome: 'Santos'},
    { primeiroNome: 'Douglas', sobrenome: 'Matos'},
    { primeiroNome: 'Ana', sobrenome: 'Clara'},
];
const resultados = nomesCompletos(pessoas);
console.log(resultados);