// um dos pontos mais fortes da programação funcional é a composição de funções
// por meio dela, montamos as funções como se fossem lego
// isso permite quebrar um problema complexo, dando soluções que atuam pra resolver uma
// parte específica, pois são funções puras, então vc pode compor as funções
// e pode ter versões intermediárias e resolve o problema parte por parte
function composicao(...fns){
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

// utilizando currying
const exagerado = composicao(gritar, enfatizar, tornarLento)

const resultado = exagerado('teste')

console.log(resultado)