const container = document.querySelector('#container');

// function fall(){
//     container.style.display = 'block';
// }

function fall(){
    if(container.style.display === 'none'){
        container.style.display = 'block';
    }else{
        container.style.display = 'none';
    }
};

function tema(){
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black'
    } else{
        document.body.style.backgroundColor = 'white'
    }
}