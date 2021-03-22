//isso é bastante semelhante ao uso de promise, onde podemos compor funções por meio do .then
function composicao(fn1, fn2){
    return function(valor){
        return fn2(fn1(valor))
    }
}

// também é possível fazer:
function composicao2(...fns){
    return function(valor){

        return fns.reduce((acumulador, fn) =>{
            return fn(acumulador)
        }, valor )
    }
}

function gritar(texto){
    return texto.toUpperCase();
}

function enfatizar(texto){
    return `${texto}!!!`;
}

function tornarLento(texto){
    return texto.split('').join(' ')
}
const resultado = composicao2(
    gritar,
    enfatizar,
    tornarLento
    )('pare')

console.log(resultado)