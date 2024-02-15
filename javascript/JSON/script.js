const objs = [
  {
    nome: "rias",
    idade: 18,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programar",
      empresa: "Empresa X",
    },
    hobbies: ["Programar", "Ler", "Jogar"],
  },
  {
    nome: "Yuki",
    idade: 16,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: "Youtube👍",
      empresa: null,
    },
    hobbies: ["Gravar", "Jogar", "naosei"],
  },
];

console.log(objs);

// JSON.
// Converter objeto para json.
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto.
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});
