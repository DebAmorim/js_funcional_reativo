// Chamada de várias promises e .then apenas quando todas elas forem resolvidas

function gerarNumeroEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        },tempo)
    });
}


function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroEntre(1,60,4000),
        gerarNumeroEntre(1,60,4500),
        gerarNumeroEntre(1,60,1000),
        gerarNumeroEntre(1,60,3000),
        gerarNumeroEntre(1,60,1000),
        gerarNumeroEntre(1,60,1000)
    ])
}

console.time('promise');

gerarVariosNumeros().then(console.log).then(console.timeEnd('promise'))