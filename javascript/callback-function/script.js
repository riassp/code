/* 

                            Callback functions

• A função de callback é um recurso muito interessante e também amplamente utilizado em JS; 

• Permite executar uma função depois de uma determinada ação;

•Conceito fundamental para entender a parte assíncrona do JS;

*/

function exibir(num){
    console.log("A operação resultou em: " + num);

}


function soma(a, b, callback){
    let op = a + b;
    callback(op);
}
function multi(a, b, cb){
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multi(4, 4, exibir);