/*
* Treino de uso de map
*/

const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]

const nomeProduto = (item) => item.nome;
console.log(carrinho.map(nomeProduto));
const valorTotalProduto = (item) => item.quantidade * item.preco;

const totalProduto = carrinho.map(valorTotalProduto);
console.log(totalProduto);