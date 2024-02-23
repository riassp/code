const pessoas = [
  //  { name: 'Joao', idade: 20},
    { name: 'Pedro', idade: 18},
    { name: 'Maria', idade: 22},
];

const comecaComj = (pessoa) => pessoa.name.startsWith('J'); /*startsWith(começacom) é uma informação que você
coloca para saber se isso está dentro do array( mas é só nesse contexto, não sei como eu usaria ele em outro contexto).
*/

console.log(pessoas.some(comecaComj)); /* Esse some(algum) é uma validação, então se pelo menos tiver uma pessoa que 
tenha o nome que comece com J vai dar true. Lembrando que ele só recebe function. Também existe o .find mas ele te 
retorna o item do array, já o some vai retornar true caso tenha, se não, vai retornar false.
 */