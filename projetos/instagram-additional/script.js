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
    body.classList.toggle("white");
    // if(document.body.classList.contains("white"))
    //     document.body.classList.remove("white");
    // else
    //     document.body.classList.add("white");

};