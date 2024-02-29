const nomes = ['Guilherme', 'Gislene', 'Pablo', 'Isabella', 'Daniel', 'João', 'Clara'];
const encontrosMarcados = (hora) => {
    if(hora == 8){
        return `Encontro com ${nomes[1]}`
    }
    if(hora == 12){
        return `Encontro com ${nomes[2]}`
    }
    if(hora == 15){
        return `Encontro com ${nomes[3]}`
    }
    if(hora == 17){
        return `Encontro com ${nomes[4]}`
    }
    if(hora == 19){
        return `Encontro com ${nomes[5]}`
    }
    if(hora == 21){
        return `Encontro com ${nomes[6]}`
    }
    if(hora == 3){
        return `Encontro com ${nomes[0]}`
    }
};

console.log(encontrosMarcados(3))