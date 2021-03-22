// algumas alterações para suportar Promise, além dos valores habituais

// criando promise com função vazia
const p = new Promise(() => {})

// como verificar se realmente tenho uma promise? (ex.: array.isArray)
Promise.resolve(2) === 2
// se a expressão acima der false, então vc não tem uma Promise
Promise.resolve(p) === p
// p é uma promise, 2 não é uma promise

function composicao(...fns){
    return function(valor){
        // a função a seguir foi marcada como async, porque se eu receber uma Promise
        // quero esperar que ela seja resolvida pra só então chamar a função
        
        return fns.reduce(async(acumulador, fn) =>{
            // Se o valor de acumulador retornado pela função abaixo for uma promise
            //  signifca que devo esperar a resolução da Promise pra só então passar o 
            // acumulador pra próxima função executar o próximo passo

            // testando se é uma promise
            if(Promise.resolve(acumulador) === acumulador){
                // se é uma Promise, ele espera ela ser resolvida e depois passa o valor pra função
                return fn(await acumulador)
            }else {
                return fn(acumulador)
            }
        }, valor )
    }
}

// com as modificações da função acima, podemos fazer composições com funções
// que são Promises

function gritar(texto){
    return texto.toUpperCase();
}

function enfatizar(texto){
    return `${texto}!!!`;
}

function tornarLento(texto){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve( texto.split('').join(' '))
        }, 3000)
    })
}

// utilizando currying
const exagerado = composicao(gritar, enfatizar, tornarLento)

exagerado('teste').then(console.log)
