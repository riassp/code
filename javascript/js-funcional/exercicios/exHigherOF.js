/* Neste exemplo, executarFuncao é uma função de alta ordem porque aceita uma função (dizerOla) como argumento.
const executarFuncao = (funcao) => {
    return funcao();
}
  
const dizerOla = () => {
    return "Olá, mundo!";
}
  
console.log(executarFuncao(dizerOla)); // Saída: "Olá, mundo!"
*/


// Forma errada ou não funcional.

/*const lukeLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  }
  
  const leiaLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!"
  }
*/

// Forma melhor de fazer isso.
const usuarioLogin = (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++){
        array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
};

console.log(usuarioLogin('Jake'));

// Agora, usuarioLogin é uma função de alta ordem, pois recebe uma função (o nome do usuário) como argumento.


