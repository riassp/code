var contadorIMG = 0; //contador para saber qual imagem deve ser mostrada.
var imgArray = [
    'imgs/vermelho.png',
    'imgs/amarelo.png',
    'imgs/verde.png'
];

function trocar(){
    // A function trocar verifica se contador é igual ao tamanho do array, se for, significa que mostrou todas imagens e que precisamos começar de novo, definindo 0 no contador novamente. Em seguida, ela muda a imagem atual para a imagem no array no índice do contador, ela faz isso alterando o atributo src do elemento de imagem para o caminho da imagem correspondente. E ela incrementa o contador para que da próxima vez que trocar() for chamada, ela mostra a próxima imagem.
    if(contadorIMG == imgArray.length){
        contadorIMG = 0;
    }
    document.getElementById('imgP').src = imgArray[contadorIMG];
    contadorIMG++;
}

// InterValid usado abaixo é para acompanhar o intervalo que estamos criando. a function iniciar() primeiro verifica se o InterValid existe. se existir, isso significa que já temos um intervalo em execução, então usamos clearInterval para pará-lo, ou limpa-lo, não sei. Em seguida, ela usa setInterval para começar a chamar a função trocar() a cada 1000 milissegundos ( ou seja, 1 segundo). 

var InterValid;

function iniciar() {
    if(InterValid){
        clearInterval(InterValid);
    }
    InterValid = setInterval(trocar, 1000);
}

let img = document.querySelector('#imgP')
let red = document.querySelector('#r')
let yellow = document.querySelector('#y')
let green = document.querySelector('#g')
let auto = document.querySelector('#auto')

function vermelho(){
    clearInterval(InterValid);

    img.src = "imgs/vermelho.png"
}
function amarelo(){
    clearInterval(InterValid);

    img.src = "imgs/amarelo.png"
}
function verde(){
    clearInterval(InterValid);

    img.src = "imgs/verde.png"
}

