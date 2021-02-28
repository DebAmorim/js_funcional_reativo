const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]


const quantidadeMaiorQueZero = item => item.quantidade > 0;

const itensValidos = carrinho.filter(quantidadeMaiorQueZero);

console.log(itensValidos);

//filter em associação com um map

const getNomeItem = item => item.nome;

const nomeItensValidos = carrinho.filter(quantidadeMaiorQueZero).map(getNomeItem);

console.log(nomeItensValidos);

const quantidadeAtacado = item => item.quantidade >= 20;

const nomeItensAtacado = carrinho.filter(quantidadeAtacado).map(getNomeItem);

console.log(nomeItensAtacado);

