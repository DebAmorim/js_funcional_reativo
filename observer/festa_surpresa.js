// O padrão observer pode ser comparado a uma festa surpresa. O evento de interesse é a chegada
// do namorado. A interessada no evento é a namorada e quem observa o evento é o porteiro, porque
// enquanto o evento não ocorre, a namorada pode fazer outras coisas.
// A namorada é a interessada no evento.
// A chegada do namorado é o evento de interesse.
// O porteiro é o observer, porque ele observa um evento e notifica quando ele acontece.
const readline = require('readline')

function obterResposta(pergunta){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
        })
    })
}

// quando há leitura de teclado, não é possível executar diretamente pelo codeRunner (extensão)
// nesse caso deve-se executar diretamente pelo node
// obterResposta('Tá entendendo?').then(console.log)

// observer
function namorada(){
    console.log('N: Apagar as luzes!')
    console.log('N: Pedir silêncio.')
    console.log('N: Surpresa!!!')
}

// observer
function sindico(evento){
    console.log('S: Monitorando o barulho!')
    console.log(evento.resp)
    console.log(evento.data)
}

// subject
async function porteiro(interessados){
    while(true){
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if(resp.toLowerCase() === 's'){
            // os observadores são notificados  
            (interessados || []).forEach(obs => obs({resp, data: Date.now()}))

        } else if(resp.toLowerCase() === 'q'){
            break
        }
    }
}

/*
    Chamada da função -> resgistra dois observadores: namorada e síndico.
    O subject é o porteiro. Ele é quem é capaz de monitorar o evento.
*/
porteiro([namorada, sindico])