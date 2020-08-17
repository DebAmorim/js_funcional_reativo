function bomDia(){
    console.log('Bom dia!!!!!!');
}

const tardeBoa = function(){
    console.log('Boa tarde!');
}

//1)função como parâmetro de outra função
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn();
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(tardeBoa);

//2)função como parâmetro de outra função
// 2.1 - jeito simples de entender
function potencia(base, exp){
    return Math.pow(base, exp);
}

const bits128 = potencia(2, 128);
console.log(bits128);

// 2.2 - um pouco mais complexo
function calculaPotencia(base){
    return function(exp){
        return Math.pow(base, exp);
    }
}

//na linha a seguir a função calculaPotencia foi armazenada na variável potenciaDe2
// a partir desse momento, essa variável é uma função, então ela pode ser chamada
// passando o valor da função interna 
const potenciaDe2 = calculaPotencia(2);
console.log(potenciaDe2(8));

//uma forma de chamar diretamente a funcção calculaPotencia é
const resultadoPot = calculaPotencia(3)(4);
console.log(resultadoPot);