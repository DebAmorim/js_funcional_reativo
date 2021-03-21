// Função pura ou impura?
// impura, porque há uma dependência de uma outra função não determinística
function gerarNumeroAleatorio(max, min){
    const intervalo = max - min + 1;
    return parseInt(Math.random() * intervalo) + min;
}

console.log(gerarNumeroAleatorio(5,6));
console.log(gerarNumeroAleatorio(5,6));
console.log(gerarNumeroAleatorio(5,6));
console.log(gerarNumeroAleatorio(5,6));
console.log(gerarNumeroAleatorio(5,6));