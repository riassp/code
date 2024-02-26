async function pegarDados() {
    try{
        const r = await fetch('https://randomusar.me/api/')
        return r.json()   
    } catch(e){
        console.log('e')
    }
    return null;
}

pegarDados();