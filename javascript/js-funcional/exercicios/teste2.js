let estudantes = [
    { nome: "João", notas: [10, 8, 9, 7] },
    { nome: "Maria", notas: [9, 9, 7, 8] },
    { nome: "Pedro", notas: [8, 7, 8, 9] },
    { nome: "Ana", notas: [9, 10, 8, 9] }
];

let studentM = estudantes.map(estudante => {
  let soma = estudante.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma;
});

let testeMaior = studentM.reduce((maior, estudante) => {
    return estudante.notas > maior.notas ? estudante : maior;
});
console.log(studentM);
console.log(testeMaior);