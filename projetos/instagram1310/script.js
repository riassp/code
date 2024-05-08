const contain = document.querySelector('#contain');

contain.style.display = 'none';

function fall(){
    if(contain.style.display === 'none'){
        contain.style.display = 'block';
    } else{
        contain.style.display = 'none';
    }
};

function tema(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
    }else{
        document.body.classList.add("dark");
    }
};