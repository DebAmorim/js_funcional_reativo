function gerarNumeroEntre(min, max, quantidade){


    if(min > max){
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const numGerados = [];

        if(fator < quantidade){
            reject(`Não é possível gerar ${quantidade} números entre ${min} e ${max} sem repetir valores.`);
        } 
        else {
            while(numGerados.length < quantidade){
                const aleatorio = parseInt(Math.random() * fator) + min;
                
                if(!numGerados.includes(aleatorio)){
                    numGerados.push(aleatorio)
                } 
            }
            resolve(numGerados);
        }

       
    });
}

async function gerarApostas(numApostas, quantidadeNumeros){
    // dentro de uma função assíncrona, o retorno resolve a promise e o throw devolve a exceção
    try{
        const apostas = [];
        for(let _ of Array(numApostas).fill()){
            apostas.push(await gerarNumeroEntre(1,60,quantidadeNumeros));
        }
        return apostas;
    }
    catch(e){
        throw "Deu ruim";
    }
    
}

gerarApostas(1, 65).then(console.log).catch(console.log);

// gerarNumeroEntre(3,8,2)
//     .then(console.log)
//     .catch(console.log)