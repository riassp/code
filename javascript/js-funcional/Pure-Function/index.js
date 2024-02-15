/* Uma função pura é aquela que não provoca efeitos colaterais, ou seja, ela não muda qualquer estado na aplicação. Mas não 
é só isso, ela precisa sempre gerar o mesmo resultado com os mesmos argumentos, ou seja, ela precisa ser completamente
determinística. A filosofia da programação funcional é que estados mutáveis causam problemas.

Uma função pura é uma função que, dada a mesma entrada, sempre retornará a mesma saída e não tem efeitos colaterais.
 Isso significa que ela não muda qualquer estado na aplicação e é completamente determinística.
*/


// Uma função pura dado os mesmos argumentos sempre vai retornar os mesmos resultados.
/* 
const sum = (a, b) => a + b;

console.log(sum(1, 2))
*/

// Uma função não pode produzir side effect(Efeito Colateral em português).
/*
let total = 0;
const sum = (a, b) => {
    // Essa função está comentendo um side effect porque está alterando valores fora do escopo dela.
    total = a + b;
};

sum(1, 2);
// Aqui o total continua zero porque não colocamos nenhum parâmetro.
console.log(total);
*/



const shoppingCart = {
    user: {
         id: 1, 
         firstName: 'John', 
         lastName: 'Doe',
        },
    items: [
        { 
            product: { id:1, name: 'banana'},
            quantity: 10,
        },
        { 
            product: { id:2, name: 'laranja'},
            quantity: 1,
        }
    ]
};
/*
const shoppingCart = {
    user: {
        id: 1, 
        name: 'John Doe',
       },
   items: [
       { 
           product: { id:1 },
           quantity: 10,
       },
       { 
           product: { id:2 },
           quantity: 1,
       }
   ]
}
*/

function formatShoppingCart(shoppingCart){
    const result = {};
    result.user = {
        id: shoppingCart.user.id,
        name: `${shoppingCart.user.firstName} ${shoppingCart.user.lastName}`
    };

    result.items = shoppingCart.items.map((item) => {
       return {
            ...item,
            product: {id: item.product.id },

        };
     });

     return result;
}

console.log(formatShoppingCart(shoppingCart));

console.log(shoppingCart);