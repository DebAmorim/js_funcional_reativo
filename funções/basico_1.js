// Function declaration
function bomDia(){
    console.log('Bom dia!');
}

bomDia();

// Function expression

//a função é armazenada dentro de uma variável e via de regra a função é anônima. O valor da expressão é armazenado
//na variável.

const boaTarde = function(){
    console.log('Boa tarde!');
}

boaTarde();

//flexibilidade na passagem de argumentos em javaScript

function somar(a, b){
    return a + b;
}

let resultado = somar(3, 4);
console.log(resultado);

//não vai reclamar os argumentos a mais e vai somar os dois primeiros
resultado = somar(3, 5);
console.log(resultado);

//neste caso o segundo argumento é undefined e será retornado um erro
resultado = somar(3);
console.log(resultado);

//Evitando o erro: definir valor padrão de parâmetro
//dessa forma o argumento b deixa de ser obrigatório na chamada dessa função
function somarValorPadrao(a, b = 0){
    return a + b;
}

let resultado2 = somarValorPadrao(3);
console.log(resultado2);
