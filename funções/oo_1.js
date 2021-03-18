function Produto(nome, preco, desconto = 0.15){
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;

    this.precoFinal = function(){
        return this.preco * (1 - this.desconto);
    }
}

const p1 = new Produto('geladeira', 3000);
const p2 = new Produto('caneta', 2);

console.log(p1);
console.log(p2);
console.log(p2.precoFinal());