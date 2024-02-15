// Objeto.
/* Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. */
// Para criar um objeto crie uma variável e coloque chaves e feche chaves.
// Tendo mais de uma propriedade coloque vírgula para separar.
// Isso dentro da pessoa são propriedades.
// Os valores das propriedades podem ter tipos de dados diferentes.
// Abaixo vemos string, numbers, boolean, array.
// Para acessarmos um valor de propriedade específica basta colocar o objeto.NomedaPropriedade Ex:pessoa.nome.
// No caso do array temos que fazer assim: pessoa.pets[0 ou 1 que é o índice]
// Caso você queira trocar alguma propriedade basta colocar o objeto . e a propriedade. Ex:pessoa.feliz: false
// É possível ter objetos dentro de objetos.
// Se tiver mais de um objeto e só fazer como está abaixo.
//console.log(pessoa.carros.camaro.placa)
// Objetos são importantes pois tudo no JavaScript é um objeto.

let pessoa = {
    nome: "rias",
    idade: 18,
    tamanho: 1.75,
    feliz: true,
    pets: ["Cachorro", "Gato"],
    carros: {
        camaro: {
            placa: '123456',
            cor: 'verde',
        },
        uno: {
            placa: '9876543',
            cor: 'branco'
        }
    },
    andar: function(km){
        alert(pessoa.nome+" andou "+km+" km ")
    }
}

//pessoa.andar(20)
// Chamando a function andar.
