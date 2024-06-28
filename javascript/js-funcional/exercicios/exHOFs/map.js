const numbers = [3, 6, 12, 24];

const dobrado = numbers.map(num => {
    return function(){
        return num * 2;
    };
});
const resultados = dobrado.map(func => func());
console.log(numbers);
console.log(dobrado);
console.log(resultados);
// teste.