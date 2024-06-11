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
});
console.log(studentM);

let 

// 1. Calcule a média de notas de cada estudante e adicione ao objeto do estudante como uma nova propriedade.
// 2. Encontre o estudante com a maior média de notas.
// 3. Encontre o estudante com a menor média de notas.
// 4. Calcule a média geral de notas de todos os estudantes.

// Dica: Você pode usar as funções .map(), .reduce(), .filter() e outras Higher Order Functions disponíveis em javascript.