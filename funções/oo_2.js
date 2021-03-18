class Produto{
    constructor(nome, preco, desconto = 0.1){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    // com o get, nome que antes era um atributo
    // agora passa a ser um método
    get nome(){
        return `Produto: ${this._nome}`;
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase();
    }

    get preco(){
        return this._preco;
    }
    
    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco;
        }
    }
    //colocando o get antes, precoFinal deixa de ser acessado como função e passa a ser acessado
    // como atributo
    get precoFinal(){
        return this.preco * (1-this.desconto);
    }
}

const p1 = new Produto('Geladeira', 3000, 0.12);
const p2 = new Produto('Caneta', 3);
p2.nome = 'caneta';

console.log(p1.nome);
console.log(p2); 
console.log(p1.precoFinal);
console.log(p2.precoFinal); 