// A diretiva "use strict" é uma funcionalidade do JavaScript que define um mode restrito de operação do código, tornando o código mais seguro e eficiente. Quando utilizada, ela impõe regras mais rígidas para a escrita do código, evitando comportamento ambíguos ou inesperados. O modo estrito previne algumas ações de serem tomadas e envia mais exceções. O strict mode evita equívocos que dificultam que motores JavaScript realizem otimizações. O strict pode ser utilizado no inínio do arquivo ou na primeira linha dentro de uma função.

'use strict';

const images = [

    { 'id': '1', 'url': 'classroom.jpg' },
    { 'id': '2', 'url': 'deathnote.jpg' },
    { 'id': '3', 'url': 'hellsing.jpg' },
    { 'id': '4', 'url': 'jigokuraku.jpg' },
    { 'id': '5', 'url': 'jujutsukaisen.jpg' },
    { 'id': '6', 'url': 'kemonojihen.jpg' },
    { 'id': '7', 'url': 'mobpsycho100.jpg' },
    { 'id': '8', 'url': 'monogatari.jpeg' },
    { 'id': '9', 'url': 'evangelion.jpg' }

]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, containerItems) => {
   images.forEach( image => {
    containerItems.innerHTML += `
    <div class='item'>
        <img src='${image.url}'
    </div>
    `
   });
}

loadImages( images, containerItems );
let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item'); 
}

const previous = () => {
    const lastItems = items[items.length - 1];
    containerItems.insertBefore( lastItems, items[0] );
    items = document.querySelectorAll('.item');
}   

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

document.addEventListener('keydown', function(event){
    switch (event.keyCode){ //keyCode é uma propriedade do JavaScript que retorna o código Unicode da tecla que disparou o evento onkeypress, ou onkeydown ou onkeyup.
        case 37:
            const lastItems = items[items.length - 1];
            containerItems.insertBefore( lastItems, items[0]);
            items = document.querySelectorAll('.item')
            break;
        
        case 39: //Número das teclas.
            containerItems.appendChild(items[0]);
            items = document.querySelectorAll('.item');
            break;
    }
})