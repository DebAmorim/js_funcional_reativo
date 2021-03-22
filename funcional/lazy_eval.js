function eager(a, b){

    // processamento mais pesado
    const fim = Date.now() + 2500
    while(Date.now()< fim){}

    const valor = Math.pow(a, 3);
    return valor + b;
}

console.time('#01');
console.log(eager(2,3));
console.log(eager(2,3));
console.log(eager(2,3));
console.timeEnd('#01');

function lazy(a){
    const fim = Date.now() + 2500
    while(Date.now() < fim){

    }
    const valor = Math.pow(a, 3);
    return function(b){
        return valor + b;
    }
}
// dessa forma não há ganho nenhum em relação ao eager
console.time('#2')
console.log(lazy(3)(100))
console.log(lazy(3)(200))
console.log(lazy(3)(300))
console.timeEnd('#2')

// utilizando os benefícios de currying
console.time('#3')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#3')