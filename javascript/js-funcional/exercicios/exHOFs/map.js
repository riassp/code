const numbers = [3, 6, 12, 24];

const dobrado = numbers.map(function(num){
    return num * 2;
});

console.log(numbers); // [3, 6, 12, 24]
console.log(dobrado); // [6, 12, 24, 48]