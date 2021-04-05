const readline = require('readline')

function obterResposta(pergunta){
    const rl = readline.createInterface({
        input: process.stdi,
        output: process.stdout,
    })
    return new Promise(resolve=> {
        rl.question(pergunta, resp =>{
            resolve(resp)
        })
    })
}

obterResposta('Tá entendendo?').then(console.log)