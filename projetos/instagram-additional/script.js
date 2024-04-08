const contain = document.querySelector('#contain')
contain.style.display = 'none';
function fall() {
    if(contain.style.display === 'none'){
        contain.style.display = 'block'
    }else{
        contain.style.display = 'none'
    }
}