//Forma com set para não ter items repetidos.

// const alimentos = [
//     'Laranja',
//     'Banana',
//     'Laranja',
//     'Maça',
//     'Morango',
//     'Banana',
//     'Cenoura',
//     'Morango',
//     'Abóbora',
//     'Abobrinha',
//     'Espinafre'
// ];

// const alimentosUnicos = new Set(); /*Set é uma estrutura de dados que aceita dados de diferentes tipos mas eles tem que ser únicos, então você não consegue
// inserir dados repetidos dentro do Set.*/
// Set só armazena valores únicos, mas não trabalha com no sistema chave valor.


// alimentos.forEach((alimento) => {
//     alimentosUnicos.add(alimento);
// });

// console.log([...alimentosUnicos.values()]); // Forma de converter para array.


// Forma com map para escolher um item de cada categoria.

const alimentos = [
    { nome: 'Laranja', categoria: 'Fruta'},
    { nome: 'Banana', categoria: 'Fruta'},
    { nome: 'Maça', categoria: 'Fruta'},
    { nome: 'Abóbora', categoria: 'Legume'},
    { nome: 'Abobrinha', categoria: 'Legume'},
    { nome: 'Espinafre', categoria: 'Legume'},
    { nome: 'Ameixa', categoria: 'Fruta'}
];

const alimentosUnicos = new Map();

alimentos.forEach((alimento) => {
    if (!alimentosUnicos.has(alimento.categoria)){
    alimentosUnicos.set(alimento.categoria, alimento); // Se não tiver nos alimentos únicos ele vai inserir.
    }
});

console.log([...alimentosUnicos.values()]) // seria possível colocar keys se no caso fosse para ver somente as categorias.