const contain = document.querySelector('#contain');  // dropup
const section = document.getElementById('#dropup')
contain.style.display = 'none';
const conBlock = contain.style.display === 'block';

function fall(){
    if(contain.style.display === 'none'){
        contain.style.display = 'block';
    }else{
        contain.style.display = 'none';
    }
};

function tema() {
     if(document.body.classList.contains("white"))
         document.body.classList.remove("white");
     else
         document.body.classList.add("white");
};