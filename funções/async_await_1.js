// o node não suporta o uso de await diretamente dentro de um arquivo
// ele só é válido dentro de uma função assíncrona
// na runtime deno, é suportado
// sempre que temos uma função que retorna uma promise, podemos usar await

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){

        setTimeout(() => {
            resolve()}, tempo);
        
    });
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
//     .then(esperarPor)

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor+1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor+2}...`)
}

executar();

// pra pegar o valor (quando retornado na função) da função executar:

// executar().then()