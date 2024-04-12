// const contain = document.querySelector('#contain')
// contain.style.display = 'none';
// function fall() {
//     if(contain.style.display === 'none'){
//         contain.style.display = 'block'
//     }else{
//         contain.style.display = 'none'
//     }
// };


// document.body.style.backgroundColor = 'black';
// function tema() {
//     if(document.body.style.backgroundColor === 'black'){
//         document.body.style.backgroundColor = 'white';
//         document.querySelectorAll('a').style.color = 'black';
        

//     }else{
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }
// };


const contain = document.querySelector('#contain');
contain.style.display = 'none';

function fall(){
    if(contain.style.display === 'none'){
        contain.style.display = 'block';
    }else{
        contain.style.display = 'none';
    }
};

const body = document.body;
function tema(){
    if(body.classList.contains("white")){
        body.classList.remove("white");
    }else{
        body.classList.add("white");
    }
};