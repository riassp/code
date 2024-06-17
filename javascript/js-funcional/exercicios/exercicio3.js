let estudantes = [
    { nome: "João", notas: [10, 8, 9, 7] },
    { nome: "Maria", notas: [9, 9, 7, 8] },
    { nome: "Pedro", notas: [8, 7, 8, 9] },
    { nome: "Ana", notas: [9, 10, 8, 9] }
];

let studentM = estudantes.map(estudante => { // Média dos alunos.
  let soma = estudante.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  let media = soma / estudante.notas.length;
  return {
    ...estudante,
    media: media
  };
});;

let estudanteMaiorMedia = studentM.reduce((maior, estudante) => {
  return estudante.media > maior.media ? estudante : maior;
  // se a média do estudante for maior que o estudante com a maior média ele retorna o estudante, se não, retorna o maior.
});

let estudanteMenorMedia = studentM.reduce((menor, estudante) => {
  return estudante.media < menor.media ? estudante : menor;
  //Mesmo de cima.
});


let mediaGeral = studentM.reduce((acumulador, estudante) => acumulador + estudante.media, 0) /studentM.length; // Média geral de notas.

console.log(studentM);
console.log("Estudante com maior média: " , estudanteMaiorMedia.nome);
console.log("Estudante com menor média: " , estudanteMenorMedia.nome);
console.log(mediaGeral)
// 1. Calcule a média de notas de cada estudante e adicione ao objeto do estudante como uma nova propriedade.
// 2. Encontre o estudante com a maior média de notas.
// 3. Encontre o estudante com a menor média de notas.
// 4. Calcule a média geral de notas de todos os estudantes.

// Dica: Você pode usar as funções .map(), .reduce(), .filter() e outras Higher Order Functions disponíveis em javascript.