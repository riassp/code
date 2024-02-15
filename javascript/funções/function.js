/*
Função: Trecho de código que só é executado quando é chamado/invocado.

    Função Void (vazia).
    Função com Parâmetro(s).
    Função Return.
    Função Arrow / Arrow Function.

*/

//<-------------------------------------------------------------------------------------------------------->

/*
Chamada de Função Void(vazia) pois não está retornando nada.

let valor = 20

function incremento(){ 
    valor += 30
}

incremento()
console.log(valor)
*/

//<-------------------------------------------------------------------------------------------------------->

/*
Função com Parâmetro(x) mas que ainda sim é considerado função void pois não está retornando nada.
O parâmetro só funciona dentro da function e pode se usar mais de um parâmetro.

function soma(numero1, numero2){

    const somaDosNumeros = numero1 + numero2
    console.log(somaDosNumeros)

}

function subtração(numero1, numero2){

    const subDosNumeros = numero1 - numero2
    console.log(subDosNumeros)

}

soma(1450, 50)
subtração(1000, 7)

*/

//<-------------------------------------------------------------------------------------------------------->

/*
Função Return.
Return vai retornar o valor para quem o chamou.

function soma(numero1, numero2){
    const somaDosNumeros = numero1 + numero2
    return somaDosNumeros
}

const meusNumeros = soma(4, 7)
const meusNumeros2 = soma(1000, 7)

console.log(meusNumeros)
console.log(meusNumeros2)

*/

//<-------------------------------------------------------------------------------------------------------->

/*
Função Arrow / Arrow Function.
Arrow function é uma forma moderna de escrever uma função.

const multi = (numero1, numero2) => {

    const multipli = numero1 * numero2
    return multipli

}

const multiplica = multi(10, 50)

console.log(multiplica)

Esse Arrow Function acima é o mesmo que a function de baixo.↓

function multi(numero1, numero2){
    const multiplicacao = numero1 * numero2
    return multiplicacao
}

const multiNumbers = multi(10,50)
console.log(multiNumbers)

*/

//<-------------------------------------------------------------------------------------------------------->

/* Se eu escrever tudo numa mesma linha eu não vou precisar usar o return. É a mesma coisa do Arrow Function acima só que mais simplificado ainda.  
const multi = (numero1, numero2) => numero1 * numero2

const multiplica = multi(10, 50)

console.log(multiplica)
*/
