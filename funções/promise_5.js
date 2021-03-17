function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro.')
            // gerar Erro
        } else {
            resolve(valor)
            // devolver valor
        }
    })
}

for(d=0; d<10; d++){
    funcionarOuNao('Testando...', 0.5)
    .then(console.log)
    .catch(console.log)
}


