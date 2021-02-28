// implementação básica de um reduce
const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', quantidade: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', quantidade: 1, preco: 19.2, fragil: true}
]

Array.prototype.meuReduce = function(fn, inicial){
    let acumulador = inicial;

    for(let i=0; i<this.length; i++){
        // garante que se o valor inicial não foi passado a iteração comece no
        // primeiro elemento do array sendo o acumulador
        if(!acumulador && i === 0){
            acumulador = this[i];
            continue;
        }

        acumulador = fn(acumulador, this[i], i, this);
    }

    return acumulador;
}

const getTotalItem = item => item.quantidade * item.preco;

const somar = (acumulador, elemento) => {
    console.log(acumulador, elemento);    
    return acumulador + elemento;
}

const totalItem = carrinho.map(getTotalItem);

console.log(totalItem);

const totalGeral = totalItem.meuReduce(somar, 0);

console.log(totalGeral);