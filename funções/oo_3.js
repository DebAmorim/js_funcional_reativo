// Função construtora
function Produto(nome, preco, desconto = 0.15){
    this.nome = nome;
    this.preco = preco;
    this._desconto = desconto;

    this.precoFinal = function(){
        return this.preco * (1 - this._desconto);
    }
}

Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} | Preço: ${this.preco} `)
}

Object.defineProperty(Produto.prototype, 'desconto', {
    get: function(){
        return this._desconto;
    },
    set: function(novoDesconto){
        if(novoDesconto>=0 && novoDesconto<=1){
            this._desconto = novoDesconto;
        }
    }
});

Object.defineProperty(Produto.prototype, 'descontoString', {
    get: function(){
        return `${this._desconto*100}%`;
    }
});

const p1 = new Produto('geladeira', 3000);
const p2 = new Produto('caneta', 2);
p2.desconto = 0.7;
// p1.log();
console.log(p2);
// console.log(p1.descontoString);

// console.log(p1);
// console.log(p2);
// console.log(p2.precoFinal());