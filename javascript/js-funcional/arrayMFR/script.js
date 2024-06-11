// Manipulação de Array em JS



// Teste.
// const pessoas = [
//     { id: 1, nome: "Paulo", idade: 37, profissão: 'Programador', salário: '10k' },
//     { id: 2, nome: "João", idade: 28, profissão: 'Caminhoneiro', salário: '5k' },
//     { id: 3, nome: "Pedro", idade: 28, profissão: 'Caminhoneiro', salário: '5k' },
//     { id: 4, nome: "Henrique", idade: 25, profissão: 'Designer Full Stack', salário: '10k' },
//     { id: 5, nome: "Julius", idade: 50, profissão: 'Todos', salário: 'infinitoKK' },
//     { id: 6, nome: "Mariana", idade: 28, profissão: 'Marketing Digital', salário: '8k' }

// ];


// const naosei = pessoas.filter(a => a.idade === 28);


// const soma = naosei.reduce((contador, valorA) => {
//     const NumberR = parseInt(valorA.salário);
//     return contador + NumberR;
// }, 0);

// console.log(soma)




/* Minha conclusão => .map vai procurar somente aquilo que você pediu.

    .filter vai pegar aquilo que você pediu mas vai mostrar todas as infos além daquilo, você pode 
    usar o .map depois já que é outro array ai botar o que você quer.

    .reduce eu uso para somar até o momento.
*/



// !Todos as manipulações tiveram o array produtos como uso!


//Array usado

const produtos = [
    { id: 1, nome: 'detergente' , valor: 2.00 , categoria: 'limpeza' },
    { id: 2, nome: 'amaciante' , valor: 6.50 , categoria: 'limpeza' },
    { id: 3, nome: 'pão' , valor: 2.00 , categoria: 'alimento' },
    { id: 4, nome: 'queijo' , valor: 7.00 , categoria: 'alimento' },
    { id: 5, nome: 'leite' , valor: 2.20 , categoria: 'alimento' }
];





//MAP

const ids = produtos.map(produto => produto.id);
const nomes = produtos.map(produto => produto.nome);

const numeros = [1,2,3,4,5,6,7,8,9,10];

const duplicados = numeros.map(x => x *2);

console.log(duplicados);


// Separação

/*

FILTER

const alimentos = produtos.filter(p => p.categoria === 'alimento');  Significa que vai 
aparecer somente os alimentos pois a categoria afirmada acima é alimento. 

console.log(alimentos.map(a => a.nome));  Vai retornar só o nome do alimento.

↓↓↓↓↓↓↓↓↓↓ */ 

/* 

    Também é possível fazer assim:

const alimentos = produtos
.filter(p => p.categoria === 'alimento')
.map(a => a.nome);

console.log( alimentos);

*/



/*

REDUCE

const total = produtos.reduce((acc, i) => acc + i.id, 0);

console.log(total);

*/



// Separação de infos

/* 

Truthy


Em JavaScript, um valor truthy é um um valor que se traduz em verdadeiro quando avaliado
em um contexto Booleano. Todos os valores são truthy a menos que eles sejam definidos como
falsy. (ou seja, exceto para false, 0, "", null, undefined, e NaN).

O JavaScript usa coerção de tipo em contextos booleanos.

Exemplos de valores truthy em JavaScript (que se traduzirão em true, e então executar o 
bloco if):

------------------------------------------------------------------------------------------
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (infinity)
if (-infinity)

------------------------------------------------------------------------------------------


Falsy

Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.

JavaScript usa tipo coercion em contextos booleanos.

Exemplos de valores falsy em JavaScript (que se traduzirá em false e assim ignorar o bloco
if):

JS
------------------------------------------------------------------------------------------

if (false){
    // Not reachable
}

if (null){
    // Not reachable
}

if (undefined){
    // Not reachable
}

if (0){
    // Not reachable
}

if (-0){
    // Not reachable
}

if (On){
    // Not reachable
}

if (NaN){
    // Not reachable
}

if (""){
    // Not reachable
}

if (document.al){
    //[1], not reachable
}

------------------------------------------------------------------------------------------

[1] document.all tem sido utilizado para a detecção do navegador no passado e a
especificação do padrão ECMAScript aqui para mantes a compatibilidade com código legado (
    if(document.all) { // Internet Explorer code here} ou usando document.all sem 
verificar sua presença em primeiro lugar: document.all.foo).

*/