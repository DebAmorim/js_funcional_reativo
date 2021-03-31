// Diz-se que uma linguagem de programação possui first-class-function
// quando uma função nessa linguagem é tratada como qualquer outra variável
// Em outras palavras, é possível armazenar funções em variáveis.

const x = 3;

const y = function(texto){
    return `Esse é o texto: ${texto}`;
}

const z = () => console.log('é isso mesmo');

console.log(x);
console.log(y('Olá'));
z();