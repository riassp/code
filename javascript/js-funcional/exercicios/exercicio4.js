let funcionarios = [
    { nome: "Maria", departamento: "Marketing", vendas: [150, 200, 180, 220], dataAdimissão: "2019-03-10"},
    { nome: "Pedro", departamento: "Vendas", vendas: [300, 400, 350, 500], dataAdimissão: "2021-03-10"},
    { nome: "Ana", departamento: "TI", vendas: [100, 150, 120,130], dataAdimissão: "2018-07-01"},
    { nome: "Lucas", departamento: "Marketing", vendas: [200, 220, 210, 230], dataAdimissão: "2022-02-20"},
    { nome: "João", departamento: "Vendas", vendas: [200, 300, 250, 400], dataAdimissão: "2020-01-15"},
];

let vendasTotal = funcionarios.map(funcionario => {
    let soma = funcionario.vendas.reduce((acc, venda) => acc + venda, 0);
    return { nome: funcionario.nome, totalVendas: soma};
});

let maiorVendedor = vendasTotal.reduce((max,funcionario) => {
    return (funcionario.totalVendas > max.totalVendas) ? funcionario.nome : max;
}, vendasTotal[0]);

let vendasPorDepartamento = {};

funcionarios.forEach(funcionario => {
    let departamento = funcionario.departamento;
    let vendasTotalFuncionario = funcionario.vendas.reduce((acc, venda) => acc + venda, 0);

    if(!vendasPorDepartamento[departamento]) {
        vendasPorDepartamento[departamento] = {
            somaVendas: 0,
            numeroFuncionarios: 0
        };
    };

    vendasPorDepartamento[departamento].somaVendas += vendasTotalFuncionario;
    vendasPorDepartamento[departamento].numeroFuncionarios += 1;
});

let mediaVendasPorDepartamento = {};

for(let departamento in vendasPorDepartamento){
    let dadosDepartamento = vendasPorDepartamento[departamento];
    mediaVendasPorDepartamento[departamento] = dadosDepartamento.somaVendas / dadosDepartamento.numeroFuncionarios;
}


console.log("Média de vendas por Departmento: ");
for(let departamento in mediaVendasPorDepartamento) {
    console.log(`${departamento}: ${mediaVendasPorDepartamento[departamento].toFixed(2)}`);
}

// 1 erro: o retorno da função map deu erro pois só estou retornando o total de vendas do funcionario e não o nome dele com o total de vendas ao lado. let vendasTotal = funcionarios.map(funcionario => {
    //let soma = funcionario.vendas.reduce((acc, venda) => acc + venda, 0);
    //return soma;



// Total de Vendas por Funcionário com map e reduce ¬
// Funcionário com Maior Venda Total com reduce. Pedro ¬
// Média de Vendas por Departamento com reduce e map.
// Funcionários Admitidos Antes de 2020 com filter.
// Lista de Nomes dos Funcionários do departamento de Vendas com filter e map.
