const contain = document.querySelector('#contain')
contain.style.display = 'none';
function fall() {
    if(contain.style.display === 'none'){
        contain.style.display = 'block'
    }else{
        contain.style.display = 'none'
    }
};

document.body.style.backgroundColor = 'black';
function tema() {
    if(document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white';
        contain.style.backgroundColor = 'white';
        body.p.style.Color = 'black';
    } else{
        document.body.style.backgroundColor = 'black';
        contain.style.backgroundColor = '#262626';
    }
};