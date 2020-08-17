function somar(num1){
    return function(num2){
        return function(num3){
            return num1 + num2 + num3;
        }
    }
}

const soma = somar(3)(4)(5);
console.log(soma);

function subtrair(valor1, valor2){
    return valor1 - valor2;
}

function calcular(valor1){
    return function(valor2){
        return function(fn){
            return fn(valor1, valor2);
        }
    }
}

const resultado = calcular(10)(5)(subtrair);
console.log(resultado);


