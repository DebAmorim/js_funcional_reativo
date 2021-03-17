// utilização de promise sem assincronismo

function gerarNumeroEntre(min, max){
    if(min > max){
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    });
}

gerarNumeroEntre(3, 50).then(num => `O número gerado foi ${num}`).then(console.log);