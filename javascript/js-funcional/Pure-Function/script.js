/* 

Como separar lógica pura da lógica com efeitos colaterais:


• Identifique as funções puras e impuras: O primeiro passo é identificar quais partes do seu código
são puras(ou seja, sempre produzem a mesma saída para as mesmas entradas e não têm efeitos colate
rais) e quais partes têm efeitos colaterais (como manipulação do DOM, chamadas de API, etc.).

• Separe a lógica pura da impura: Uma vez que voce tenha identificado as funções puras e impuras,
você pode começar a separá-las. Você pode fazer isso colocando a lógica pura em suas próprias funções
e a lógica impura em outras funções.

• Minimize os efeitos colaterais: Tente minimizar o número de funções que têm efeitos colaterais.
Quanto mais do seu código for composto por funções puras, mais previsível e fácil de testar será o
seu código.

• Use funções puras sempre que possível:Sempre que possível, use funções puras.Elas são mais fáceis
de entender, testar e reutilizar.

• Teste suas funções puras:Como as funções puras sempre retornam a mesma saída para as mesmas entra
das, elas são muito mais fáceis de testar do que as funções impuras. Você pode escrever testes unitá
rios para suas funções puras para garantir que elas estejam funcionando corretamente.

*/


/*

const square = document.querySelector('#quadrado');
const letra = document.querySelector('#letra');


square.addEventListener("mousedown", function(){
square.style.backgroundColor = 'black'
square.style.color = 'white'

});
square.addEventListener("mouseup", function(){
square.style.backgroundColor = 'white'
square.style.color = 'black'
});

square.addEventListener("mouseenter", function() {
    letra.innerHTML = 'P'
    square.style.backgroundColor = 'crimson'
});
square.addEventListener("mouseout", function() {
    letra.innerHTML = 'C'
square.style.backgroundColor = 'white'
});

*/







/*

Um teste mostrando o que é uma função pura.

function conferirIdades(idade){
    if(idade <= 3){
        return 'ele é um bebê';
    }else if(idade <= 11){
        return 'ele é uma criança';
    }else if(idade >= 12 && idade <= 18){
        return 'ele/ela é um adolescente';
    }else if(idade <= 70){
        return 'ele/ela é uma adulto/adulta';
    }else{
        return 'ele/ela é um idoso/idosa';
    }
};

console.log(conferirIdades(60));
*/

/*

var rhuanIdade = 18;

    if(rhuanIdade <= 3){
        console.log('ele é um bebê');
    }else if(rhuanIdade <= 11){
        console.log('ele é uma criança');
    }else if(rhuanIdade >= 12 && rhuanIdade <= 18){
        console.log('ele/ela é um adolescente');
    }else if(rhuanIdade <= 70){
        console.log('ele/ela é uma adulto/adulta');
    }else{
        console.log('ele/ela é um idoso/idosa');
    }

 Um código "normal" porém ainda cometendo um side effect pois está falando com o escopo de fora(no 
caso o console.)
*/


const square = document.querySelector('#quadrado');
const letra = document.querySelector('#letra');
square.addEventListener("")

// Pure Function



// Function with side effect



