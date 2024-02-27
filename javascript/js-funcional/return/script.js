const retornaTipo = (idade) => {
    if(idade < 1){
        return 'bebê';
    }
     if(idade < 13){
        return 'criança';
    }
     if(idade < 18){
        return 'adolescente';
    }
    return 'adulto';
}

console.log(retornaTipo(14));

/* 

O early return serve para deixar o código mais limpo além de que ele tem o conceito de que se 
você tem um valor que pode ser retornado, retorne ele e não espere até o final para retorna-lo.
No function foi tirado o let tipo e foi retornado o valor na hora, else if e mostrar o que já vai no 
automático(idade >= 1).

*/


/*

    Como era a function antes do early return.

const retornaTipo = (idade) => {
    let tipo = null;
    if(idade < 1){
        tipo = 'bebê';
    } else if(idade >= 1 && idade < 13){
        tipo = 'criança';
    } else if(idade >= 13 && idade < 18){
        tipo = 'adolescente';
    } else{
        tipo = 'adulto';
    }
    return tipo;
}

console.log(retornarTipo(10));

 */