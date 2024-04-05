const contain = document.querySelector('#contain')

function fall() {
    if(contain.style.display === 'none'){
        contain.style.display = 'block'
    }else{
        contain.style.display = 'none'
    }
}