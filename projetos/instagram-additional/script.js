const contain = document.querySelector('#contain');
contain.style.display = 'none';
function fall(){
    if(contain.style.display === 'none'){
        contain.style.display = 'block';
    }else{
        contain.style.display = 'none';
    }
};


function tema() {
    const body = document.body;
    body.style.backgroundColor = 'black';
    if(body.style.backgroundColor = 'black'){
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }
};