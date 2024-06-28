function palavrasCurtas(palavras) {
    return palavras.filter(palavra => palavra.length <= 3);
};

const palavras = ['Cão', 'Gato', 'elefante', 'Leão', 'rato', 'Tatu', 'Boi', 'fox', 'bat'];
const resultado = palavrasCurtas(palavras);
console.log(resultado);