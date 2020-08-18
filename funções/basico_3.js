//arrow function
//a função não possui nome

() => console.log('arrow function');

//mas como escrito acima, essa função não é chamada/invocada, para isso ela devo no mínimo ser armazenada em uma 
//variável

const arrowFunction = () => console.log('arrowFunction');
arrowFunction();

//com parâmetro

const saudacao = (nome) => {
    return "Fala, " + nome + "!!!";
}

console.log(saudacao('Débora'));

//da forma como a função foi escrita acima (com corpo), ela pode ter mais de uma expressão.
//caso eu tenha apenas uma única expressão ela pode ser escrita da seguinte forma:

const cumprimento = (nomePessoa) => "Fala, " + nomePessoa + "!!!";

console.log(cumprimento('Eric'));

//se há apenas um parâmetro, os parênteses podem ser removidos
//const cumprimento = nomePessoa => "Fala, " + nomePessoa + "!!!";
//a string pode ser escrita usando ``, veja:
// `Fala, ${nomePessoa}, !!!`

//corpo associado a uma função arrow, que é uma função anônima
//dessa forma o return deve ser explícito
const somar = numeros => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total;
}

console.log('A soma é:',somar([0,1,1,2,3,5,8]));

//não está associado a arrow function, mas é um recurso do javascript ter uma quantidade de parâmetros variável
// os ... são conhecidos como operador rest, ele transforma os números num array

const somarSemArray = (...numeros) => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total;
}

console.log('A soma dos números é: ', somarSemArray(1,3,34,13,13445,345,56));

//uma função dentro da outra usando arrow function
const potencia = (base) => {
    return function(exp){
        return Math.pow(base, exp);
    }
}

console.log(potencia(2)(8));

//a segunda função também como arrow function
const potenciaArrow = (base) => {
    return (exp) => {
        return Math.pow(base, exp);
    }
}

console.log(potenciaArrow(2)(8));

//limpando a sintaxe:
const potenciaClean = base => exp => Math.pow(base, exp);

console.log(potenciaClean(2)(8));

//uma questão importante relacionada a função normal e função arrow é a palavra this e como ela é usada
//isso está mais relacionado a orientação a objetos do que programação funcional
// const numeros = [1,2,3];
// numeros.log(); - essa linha retorna erro porque log não é uma função de um array, porém podemos criar essa função
// antes da declaração do array e usar this para referenciá-lo

Array.prototype.log = function(){
    console.log(this);
}

const numeros = [1,2,3];
numeros.log();

//outra função
Array.prototype.ultimo = function(){
    console.log(this[this.length-1]);
}

numeros.ultimo();

//mas essas funções no prototype não podem ser escritas como arrow function porque o this funciona de forma diferente


