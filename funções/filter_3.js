const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]

Array.prototype.meuFilter = function(fn){
    const novoArray = [];

    for(let i = 0; i< this.length; i ++){
        if(fn(this[i], i, this )){
            novoArray.push(this[i]);
        }
    }
    return novoArray;
}

const nomeItem = item => item.nome;

const quantidadeValida = item => item.quantidade > 0;

const nomeItensValidos = carrinho.meuFilter(quantidadeValida).map(nomeItem);

console.log(nomeItensValidos);

