const carrinho = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', quantidade: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', quantidade: 1, preco: 19.2, fragil: true}
]

// fragil: true
const isFragil = item => item.fragil;

const itemFragilList = carrinho.filter(isFragil);

// total por item
const getTotal = item => item.quantidade * item.preco;

const totalItemList = itemFragilList.map(getTotal);

// média geral

const getMediaGeral = (acumulador, elemento) => {
    const novaQuantidade = acumulador.quantidade + 1;
    const novoTotal = acumulador.total + elemento;
    return {quantidade: novaQuantidade,
            total: novoTotal,
            media: novoTotal/novaQuantidade}

}
// objeto auxiliado para que o tamanho do array usado no reduce não precise ser acessado diretamente
const valoresInicais = {quantidade: 0, total: 0, media: 0};

const mediaGeral = totalItemList.reduce(getMediaGeral, valoresInicais);

console.log(mediaGeral);

