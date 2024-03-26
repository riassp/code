//  A way to convert a string to a number

 const string = '123.12'; //com vírgula não funciona, vai dar NaN quando tentar converter.
 console.log(string, Number(string));
// se adicionar parseInt, significa que você quer transformar um número em inteiro. Se tiver parseInt é porque você não quer que tenha decimais.
// é recomendado botar um dez ao lado caso queira que não de algum erro ou o parseInt entenda o número errado.
// no caso do parseFloat é para você deixar os decimais se tiver algum.
// também é possível usar somente o parseInt() ou o parseFloat()