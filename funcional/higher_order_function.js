// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as.
// Se consigo fazer isso, significa que a função suporta higher order function

function executar(fn, ...params){
    return fn(...params);
}

function somar( a, b, c){
    return a + b + c;
}

function multiplicar(a, b){
    return a*b;
}

// console.log(executar(somar, 4,5,6));
// console.log(executar(multiplicar, 5,6));

// No exemplo acima a função executar recebeu uma função como parâmetro.
// A seguir uma função que retorna uma função.

function executar2(fn, ...params){
    return function(textoInicial){
        return `${textoInicial} ${fn(...params)}`
    }
}

console.log(executar2(somar, 4,75,45)('O resultado da soma é: '));
console.log(executar2(multiplicar, 75,45)('O resultado da multiplicação é: '));