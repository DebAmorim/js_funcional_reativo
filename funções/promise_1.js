// declaração da promessa
let objeto = new Promise(funcaoArgumento(funcaoChamadaAoCumprirPromessa){
    funcaoChamadaAoCumprirPromessa(valorArguemnto);
});

// acessando o valor da promessa
objeto.then(funcaoArgumento(valorArguemnto)){
    console.log(valorArguemnto);
}

// o valorArgumento pode ser uma lista, um objeto, mas somente um valor retornado é
// acessado. Se mais de um valor for passado, o segundo em diante ficará indisponível

// concatenando .then

objeto.then(valorArguemnto => valorArguemnto[0])
        .then(primeiroObjeto => primeiroObjeto.valor)
        .then(console.log)

// o resultado de um .then é passado para o próximo, como trabalhado acima

// isso torna o código mais legível do que callback hell