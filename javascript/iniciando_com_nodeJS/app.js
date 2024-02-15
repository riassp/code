const express = require("express");
conts {} = require()

const app = express();

app.use(express.json());

const products = [];

/* 

- POST => Inserir um dado.
- GET => Buscar um/mais dados.
- PUT => Alterar um dado.
- DELETE => Remover um dados.

*/

/* 

- Body => Sempre que eu quiser enviar dados para minha aplicação. 
- Params => /product/id
- Query => /product?id=ata&value=coisas

 */

app.post("/products", (request, response) => {
    // Nome e Preço => name and price

    const { name, price} = request.body;

    products.push({
        name,
        price
    })

    console.log(body);

});

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));