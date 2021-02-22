/*
* Implementando versão própria de map
*/

const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99},
    {nome: 'Impressora', quantidade: 0, preco: 649.50},
    {nome: 'Caderno', quantidade: 4, preco: 27.10},
    {nome: 'Lapis', quantidade: 3, preco: 5.82},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20}
]

/*
* Funcionamento do map:
* Recebe uma função como argumento
* Cria novo array vazio
* Faz um laço no array de interesse
* Chama a função passando o valor e índice atual do array de interesse e o próprio array
* Quando a função executou a transformação no array, o resultado é alocado no no array
* Ao fim da iteração o novo array é devolvido
*/

Array.prototype.meuMap = function (fn) {
    const novoArray = [];

    for(let i = 0; i < this.length; i ++){
        // Elementos que a função espera receber: valor, index e array completo
        const resultado = fn(this[i], i, this);
        novoArray.push(resultado);
    }

    return novoArray;
}

const valorTotal = n => n.preco * n.quantidade;

const valorTotalList = carrinho.meuMap(valorTotal);

console.log(valorTotalList);